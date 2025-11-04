import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { SplashScreen } from '@/components/SplashScreen'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SplashScreen />
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </>
  )
}
