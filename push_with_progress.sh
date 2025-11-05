#!/bin/bash
# Script to push with progress tracking and retry on rate limits

cd /Users/DanialGanijee/Downloads/splitplanslanding

TOTAL_LFS=$(git lfs ls-files | wc -l | tr -d ' ')
echo "Total LFS files to upload: $TOTAL_LFS"
echo "Starting push with progress tracking..."
echo ""

RETRY_COUNT=0
MAX_RETRIES=10

while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
  echo "Attempt $((RETRY_COUNT + 1))..."
  
  # Push and capture output
  if git push -u origin main --progress 2>&1 | tee /tmp/push_output.log | grep -E "(Uploading LFS|Enumerating|Counting|Compressing|Writing|remote:|error:|fatal:)" | while read line; do
    # Extract progress percentage for LFS
    if echo "$line" | grep -q "Uploading LFS"; then
      PERCENT=$(echo "$line" | grep -oP '\d+%' | head -1)
      COUNT=$(echo "$line" | grep -oP '\d+/\d+' | head -1)
      MB=$(echo "$line" | grep -oP '\d+\.?\d* MB' | head -1)
      SPEED=$(echo "$line" | grep -oP '\d+\.?\d* [KM]?B/s' | head -1)
      echo "[LFS Progress] $PERCENT - $COUNT files - $MB - $SPEED"
    else
      echo "$line"
    fi
  done; then
    echo ""
    echo "✅ Push completed successfully!"
    exit 0
  else
    EXIT_CODE=$?
    if grep -q "Rate limit exceeded" /tmp/push_output.log; then
      UPLOADED=$(grep "Uploading LFS" /tmp/push_output.log | tail -1 | grep -oP '\d+/\d+' | cut -d'/' -f1)
      if [ -n "$UPLOADED" ]; then
        PERCENT=$((UPLOADED * 100 / TOTAL_LFS))
        echo ""
        echo "⚠️  Rate limit hit at ${PERCENT}% (${UPLOADED}/${TOTAL_LFS} files)"
        echo "Waiting 60 seconds before retry..."
        sleep 60
        RETRY_COUNT=$((RETRY_COUNT + 1))
      else
        echo "Waiting 60 seconds before retry..."
        sleep 60
        RETRY_COUNT=$((RETRY_COUNT + 1))
      fi
    else
      echo "Error occurred. Check /tmp/push_output.log for details"
      exit $EXIT_CODE
    fi
  fi
done

echo "Max retries reached. Please check the repository status."

