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
      {/* Subtle sunrise gradient - very pale yellow/orange */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            // Start with very subtle gradients
            'radial-gradient(ellipse at top right, rgba(254, 243, 199, 0.15) 0%, rgba(255, 255, 255, 0) 50%), radial-gradient(ellipse at bottom left, rgba(254, 243, 199, 0.1) 0%, rgba(255, 255, 255, 0) 50%)',
            'radial-gradient(ellipse at top right, rgba(253, 230, 138, 0.2) 0%, rgba(255, 255, 255, 0) 50%), radial-gradient(ellipse at bottom left, rgba(254, 243, 199, 0.12) 0%, rgba(255, 255, 255, 0) 50%)',
            'radial-gradient(ellipse at top right, rgba(254, 243, 199, 0.18) 0%, rgba(255, 255, 255, 0) 50%), radial-gradient(ellipse at bottom left, rgba(253, 230, 138, 0.15) 0%, rgba(255, 255, 255, 0) 50%)',
            'radial-gradient(ellipse at top right, rgba(253, 230, 138, 0.15) 0%, rgba(255, 255, 255, 0) 50%), radial-gradient(ellipse at bottom left, rgba(254, 243, 199, 0.1) 0%, rgba(255, 255, 255, 0) 50%)',
            'radial-gradient(ellipse at top right, rgba(254, 243, 199, 0.2) 0%, rgba(255, 255, 255, 0) 50%), radial-gradient(ellipse at bottom left, rgba(253, 230, 138, 0.12) 0%, rgba(255, 255, 255, 0) 50%)',
            'radial-gradient(ellipse at top right, rgba(254, 243, 199, 0.15) 0%, rgba(255, 255, 255, 0) 50%), radial-gradient(ellipse at bottom left, rgba(254, 243, 199, 0.1) 0%, rgba(255, 255, 255, 0) 50%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Additional subtle layer for depth - very light orange hint */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.3, 0.5, 0.4, 0.5, 0.3, 0.4],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 70% 30%, rgba(251, 191, 36, 0.08) 0%, transparent 60%)',
        }}
      />

      {/* Very subtle ambient glow */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse 100% 50% at 50% 0%, rgba(254, 243, 199, 0.12) 0%, transparent 70%)',
            'radial-gradient(ellipse 100% 50% at 50% 0%, rgba(253, 230, 138, 0.15) 0%, transparent 70%)',
            'radial-gradient(ellipse 100% 50% at 50% 0%, rgba(254, 243, 199, 0.1) 0%, transparent 70%)',
            'radial-gradient(ellipse 100% 50% at 50% 0%, rgba(253, 230, 138, 0.12) 0%, transparent 70%)',
            'radial-gradient(ellipse 100% 50% at 50% 0%, rgba(254, 243, 199, 0.12) 0%, transparent 70%)',
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

