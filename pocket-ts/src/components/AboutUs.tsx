'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

import { Container } from '@/components/Container'

const teamMembers = [
  {
    name: 'Adnan Yamani',
    role: '[Title Position]',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    name: 'Mohsin Yamani',
    role: '[Title Position]',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    name: 'Danial Ganijee',
    role: '[Title Position]',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
]

export function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <section
      ref={containerRef}
      className="relative border-t border-gray-200 bg-gradient-to-b from-white via-gray-50/50 to-white py-20 sm:py-28"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Meet the{' '}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Team
            </span>
          </motion.h2>
          <motion.p
            className="mt-6 text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The passionate founders behind SplitPlans, dedicated to making event planning effortless for everyone.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group relative rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl hover:scale-105 border-2 border-gray-100 hover:border-yellow-500/20"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              {/* Avatar placeholder */}
              <div className="mb-6 flex justify-center">
                <div className="relative h-32 w-32 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 p-1 shadow-lg">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-100">
                    <span className="text-4xl font-bold text-gray-400">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="text-center text-2xl font-bold text-gray-900">
                {member.name}
              </h3>
              <p className="mt-2 text-center text-sm font-semibold text-yellow-600">
                {member.role}
              </p>
              <p className="mt-4 text-center text-sm leading-relaxed text-gray-600">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

