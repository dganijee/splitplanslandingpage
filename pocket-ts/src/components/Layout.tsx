import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { SplashScreen } from '@/components/SplashScreen'
import { SunriseBackground } from '@/components/SunriseBackground'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SplashScreen />
      <SunriseBackground />
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </>
  )
}
