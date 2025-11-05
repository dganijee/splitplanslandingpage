'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function SunriseBackground() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Wait for splash screen to finish (2.5s + 0.6s fade out = ~3.1s)
    // Then start the sunrise animation
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 -z-10 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 2, ease: 'easeInOut' }}
    >
      {/* Prominent sunrise gradient - warm yellow/orange */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            // More prominent gradients with higher opacity
            'radial-gradient(ellipse 120% 80% at top right, rgba(254, 243, 199, 0.5) 0%, rgba(253, 230, 138, 0.3) 30%, rgba(255, 255, 255, 0) 60%), radial-gradient(ellipse 100% 70% at bottom left, rgba(254, 243, 199, 0.4) 0%, rgba(253, 230, 138, 0.25) 25%, rgba(255, 255, 255, 0) 55%)',
            'radial-gradient(ellipse 120% 80% at top right, rgba(253, 230, 138, 0.6) 0%, rgba(251, 191, 36, 0.35) 30%, rgba(255, 255, 255, 0) 60%), radial-gradient(ellipse 100% 70% at bottom left, rgba(254, 243, 199, 0.45) 0%, rgba(253, 230, 138, 0.3) 25%, rgba(255, 255, 255, 0) 55%)',
            'radial-gradient(ellipse 120% 80% at top right, rgba(254, 243, 199, 0.55) 0%, rgba(253, 230, 138, 0.32) 30%, rgba(255, 255, 255, 0) 60%), radial-gradient(ellipse 100% 70% at bottom left, rgba(253, 230, 138, 0.5) 0%, rgba(254, 243, 199, 0.35) 25%, rgba(255, 255, 255, 0) 55%)',
            'radial-gradient(ellipse 120% 80% at top right, rgba(253, 230, 138, 0.5) 0%, rgba(254, 243, 199, 0.3) 30%, rgba(255, 255, 255, 0) 60%), radial-gradient(ellipse 100% 70% at bottom left, rgba(254, 243, 199, 0.4) 0%, rgba(253, 230, 138, 0.25) 25%, rgba(255, 255, 255, 0) 55%)',
            'radial-gradient(ellipse 120% 80% at top right, rgba(254, 243, 199, 0.6) 0%, rgba(253, 230, 138, 0.35) 30%, rgba(255, 255, 255, 0) 60%), radial-gradient(ellipse 100% 70% at bottom left, rgba(253, 230, 138, 0.45) 0%, rgba(254, 243, 199, 0.3) 25%, rgba(255, 255, 255, 0) 55%)',
            'radial-gradient(ellipse 120% 80% at top right, rgba(254, 243, 199, 0.5) 0%, rgba(253, 230, 138, 0.3) 30%, rgba(255, 255, 255, 0) 60%), radial-gradient(ellipse 100% 70% at bottom left, rgba(254, 243, 199, 0.4) 0%, rgba(253, 230, 138, 0.25) 25%, rgba(255, 255, 255, 0) 55%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Additional layer for depth - warm orange glow */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.6, 0.8, 0.7, 0.85, 0.65, 0.75],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'radial-gradient(ellipse 90% 65% at 70% 30%, rgba(251, 191, 36, 0.25) 0%, rgba(251, 191, 36, 0.15) 30%, transparent 65%)',
        }}
      />

      {/* Prominent ambient sunrise glow from top */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse 120% 60% at 50% 0%, rgba(254, 243, 199, 0.4) 0%, rgba(253, 230, 138, 0.25) 25%, rgba(251, 191, 36, 0.15) 45%, transparent 75%)',
            'radial-gradient(ellipse 120% 60% at 50% 0%, rgba(253, 230, 138, 0.45) 0%, rgba(251, 191, 36, 0.3) 25%, rgba(253, 230, 138, 0.2) 45%, transparent 75%)',
            'radial-gradient(ellipse 120% 60% at 50% 0%, rgba(254, 243, 199, 0.35) 0%, rgba(253, 230, 138, 0.22) 25%, rgba(251, 191, 36, 0.12) 45%, transparent 75%)',
            'radial-gradient(ellipse 120% 60% at 50% 0%, rgba(253, 230, 138, 0.4) 0%, rgba(254, 243, 199, 0.25) 25%, rgba(253, 230, 138, 0.15) 45%, transparent 75%)',
            'radial-gradient(ellipse 120% 60% at 50% 0%, rgba(254, 243, 199, 0.4) 0%, rgba(253, 230, 138, 0.25) 25%, rgba(251, 191, 36, 0.15) 45%, transparent 75%)',
          ],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  )
}

