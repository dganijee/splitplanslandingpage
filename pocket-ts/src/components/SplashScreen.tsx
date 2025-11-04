'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

import splitplansLogo from '@/images/splitplans-logo.svg'

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Show splash screen for 2.5 seconds, then fade out
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Animated gradient background cycling through yellow shades */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #fcd34d 100%)',
                'linear-gradient(135deg, #fde68a 0%, #fcd34d 50%, #fbbf24 100%)',
                'linear-gradient(135deg, #fcd34d 0%, #fbbf24 50%, #f59e0b 100%)',
                'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
                'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #fbbf24 100%)',
                'linear-gradient(135deg, #d97706 0%, #fbbf24 50%, #f59e0b 100%)',
                'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #fcd34d 100%)',
                'linear-gradient(135deg, #f59e0b 0%, #fcd34d 50%, #fde68a 100%)',
                'linear-gradient(135deg, #fcd34d 0%, #fde68a 50%, #fef3c7 100%)',
                'linear-gradient(135deg, #fde68a 0%, #fef3c7 50%, #fde68a 100%)',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Wave animation overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 50 Q 25 20, 50 50 T 100 50\' stroke=\'%23fcd34d\' fill=\'none\' stroke-width=\'2\' opacity=\'0.3\'/%3E%3C/svg%3E") repeat',
              backgroundSize: '200px 200px',
            }}
            animate={{
              x: [0, -200, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Second wave layer for depth */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'url("data:image/svg+xml,%3Csvg width=\'120\' height=\'120\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 60 Q 30 25, 60 60 T 120 60\' stroke=\'%23fbbf24\' fill=\'none\' stroke-width=\'2\' opacity=\'0.2\'/%3E%3C/svg%3E") repeat',
              backgroundSize: '240px 240px',
            }}
            animate={{
              x: [0, 240, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Logo container */}
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image
                src={splitplansLogo}
                alt="SplitPlans"
                className="h-40 w-auto sm:h-56 md:h-64 drop-shadow-2xl"
                priority
                unoptimized
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

