import { Button } from '@/components/Button'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="call-to-action"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 sm:py-28"
    >
      {/* Animated gradient orbs */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-yellow-400/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2 opacity-20">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to start planning?
          </h2>
          <p className="mt-6 text-xl text-gray-300 leading-relaxed">
            Create your first event and start splitting costs effortlessly. No credit card required to get started.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="/register" color="white">
              Plan an Event
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
