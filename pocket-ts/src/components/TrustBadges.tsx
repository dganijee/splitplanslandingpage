'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

import { Container } from '@/components/Container'

const trustBadges = [
  {
    name: 'Bank-Level Security',
    description: '256-bit encryption',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    name: 'PCI Compliant',
    description: 'Secure payment processing',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    name: 'Protected Funds',
    description: 'Held securely until events',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
]

export function TrustBadges() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  return (
    <section
      ref={containerRef}
      className="relative border-t border-gray-200 bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 sm:py-20"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
            Your security is our priority
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We use industry-leading security measures to protect your data and payments
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.name}
              className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-lg transition-all hover:shadow-xl hover:scale-105 hover:border-yellow-500/20 border-2 border-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="mb-4 text-yellow-500 transition-transform group-hover:scale-110">{badge.icon}</div>
              <h3 className="text-lg font-bold text-gray-900">{badge.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

