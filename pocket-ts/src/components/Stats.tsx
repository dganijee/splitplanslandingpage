'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

import { Container } from '@/components/Container'

interface Stat {
  value: string
  label: string
  suffix?: string
  prefix?: string
}

const stats: Array<Stat> = [
  { value: '50K+', label: 'Events Planned' },
  { value: '$2M+', label: 'Costs Split' },
  { value: '25K+', label: 'Active Users' },
  { value: '98%', label: 'Payment Success Rate' },
]

function AnimatedCounter({
  value,
  prefix,
  suffix,
  duration = 2000,
}: {
  value: string
  prefix?: string
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''))
  const hasSuffix = value.includes('K') || value.includes('M') || value.includes('%')
  const suffixChar = value.includes('K') ? 'K' : value.includes('M') ? 'M' : value.includes('%') ? '%' : ''
  const decimals = value.includes('.') ? 1 : 0

  useEffect(() => {
    if (numericValue === 0) return

    const startTime = Date.now()
    const startValue = 0
    const endValue = numericValue

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = startValue + (endValue - startValue) * easeOutQuart
      
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [numericValue, duration])

  const formatNumber = (num: number) => {
    if (hasSuffix && suffixChar === 'K') {
      return (num / 1000).toFixed(decimals) + suffixChar
    }
    if (hasSuffix && suffixChar === 'M') {
      return (num / 1000000).toFixed(decimals) + suffixChar
    }
    if (hasSuffix && suffixChar === '%') {
      return Math.round(num) + suffixChar
    }
    return Math.round(num).toLocaleString()
  }

  return (
    <span className="tabular-nums">
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  )
}

export function Stats() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  return (
    <section
      ref={containerRef}
      className="relative border-t border-gray-200 bg-gradient-to-b from-white via-gray-50 to-white py-16 sm:py-20"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Trusted by thousands of organizers
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Join the growing community of event organizers who rely on SplitPlans
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative rounded-2xl bg-white/80 p-6 text-center shadow-lg backdrop-blur-sm transition-all hover:shadow-xl hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold tracking-tight bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent sm:text-5xl">
                {isInView ? (
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                ) : (
                  stat.value
                )}
              </div>
              <div className="mt-2 text-sm font-semibold text-gray-700 sm:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

