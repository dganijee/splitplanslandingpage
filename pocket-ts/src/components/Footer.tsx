import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import qrCode from '@/images/qr-code.svg'
import splitplansLogo from '@/images/splitplans-logo.svg'

function QrCodeBorder(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Image
                src={splitplansLogo}
                alt="SplitPlans"
                className="h-10 w-auto flex-none"
                unoptimized
              />
              <div className="ml-4">
                <p className="text-base font-semibold">SplitPlans</p>
                <p className="mt-1 text-sm">Effortless Event Planning & Cost Splitting</p>
              </div>
            </div>
            <nav className="mt-11 flex flex-col gap-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">About</h3>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-gray-900">About</a></li>
                  <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                  <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Account</h3>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li><a href="/login" className="hover:text-gray-900">Login</a></li>
                  <li><a href="/register" className="hover:text-gray-900">Sign Up</a></li>
                  <li><a href="#" className="hover:text-gray-900">Forgot Password</a></li>
                  <li><Link href="/#pricing" className="hover:text-gray-900">SplitPlans Pro</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">More</h3>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
                  <li><Link href="/#faqs" className="hover:text-gray-900">FAQ</Link></li>
                  <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-yellow-500" />
              <Image src={qrCode} alt="" unoptimized />
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <Link href="#">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Download the app
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Scan the QR code to download the app from the App Store.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row md:justify-between md:pt-6">
          <p className="text-sm text-gray-500">
            &copy; 2024 SplitPlans. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
