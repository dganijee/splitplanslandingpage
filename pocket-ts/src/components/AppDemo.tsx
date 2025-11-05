'use client'

import Image from 'next/image'

import { AppScreen } from '@/components/AppScreen'
import splitplansLogo from '@/images/splitplans-logo.svg'

function PlusIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ShareIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M18 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3.027 3.027 0 0 0 0-.74l4.94-2.47C16.456 8.68 17.19 8 18 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function AppDemo() {
  return (
    <AppScreen className="bg-gray-900" hideDefaultHeader>
      <div className="bg-gray-900 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/splitplans-logo.svg"
              alt="SplitPlans"
              className="h-12 w-auto"
              unoptimized
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded bg-yellow-500 px-3 py-1.5 text-xs font-medium text-white">
              <PlusIcon className="h-3 w-3" />
              Create
            </div>
            <div className="rounded bg-gray-700 px-3 py-1.5 text-xs font-medium text-white">
              $8.42
            </div>
            <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-red-500 bg-gray-600">
              <div className="h-6 w-6 rounded-full bg-gray-400"></div>
            </div>
          </div>
        </div>
      </div>
      <AppScreen.Body>
        <div className="p-0">
          {/* Map Section */}
          <div className="relative h-48 bg-gray-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-xs text-gray-500">
                <div className="mb-2">📍</div>
                <div>Map View</div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white p-3 shadow-lg">
              <div className="text-sm font-medium text-gray-900">Riverside Community Center</div>
              <div className="mt-1 text-xs text-gray-500">123 Main Street, Downtown District</div>
              <div className="mt-2 text-xs text-blue-600">View larger map</div>
            </div>
          </div>

          {/* Cost Section */}
          <div className="border-b border-gray-200 bg-white px-4 py-4">
            <div className="mb-3 text-sm font-medium text-gray-900">
              Current Cost Per Participant: $17.25
            </div>
            <div className="flex gap-3">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white">
                <ShareIcon className="h-4 w-4" />
                Share
              </button>
              <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white">
                <LinkIcon className="h-4 w-4" />
                Copy Link
              </button>
            </div>
          </div>

          {/* Participant List */}
          <div className="divide-y divide-gray-100 bg-white px-4 py-2">
            <div className="flex items-center gap-3 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300">
                <div className="h-8 w-8 rounded-full bg-gray-400"></div>
              </div>
              <div className="flex-auto">
                <div className="text-sm font-medium text-gray-900">Alex Thompson</div>
              </div>
            </div>
            <div className="flex items-center gap-3 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300">
                <div className="h-8 w-8 rounded-full bg-gray-400"></div>
              </div>
              <div className="flex-auto">
                <div className="text-sm font-medium text-gray-900">Jordan Martinez</div>
              </div>
            </div>
            <div className="flex items-center gap-3 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300">
                <div className="h-8 w-8 rounded-full bg-gray-400"></div>
              </div>
              <div className="flex-auto">
                <div className="text-sm font-medium text-gray-900">Sam Chen</div>
              </div>
            </div>
            <div className="flex items-center gap-3 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                <div className="h-6 w-6 rounded-full border-2 border-dashed border-gray-400"></div>
              </div>
              <div className="flex-auto">
                <div className="text-sm font-medium text-gray-500">Spot Available</div>
              </div>
            </div>
            <div className="flex items-center gap-3 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                <div className="h-6 w-6 rounded-full border-2 border-dashed border-gray-400"></div>
              </div>
              <div className="flex-auto">
                <div className="text-sm font-medium text-gray-500">Spot Available</div>
              </div>
            </div>
            <div className="flex items-center gap-3 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                <div className="h-6 w-6 rounded-full border-2 border-dashed border-gray-400"></div>
              </div>
              <div className="flex-auto">
                <div className="text-sm font-medium text-gray-500">Spot Available</div>
              </div>
            </div>
          </div>
        </div>
      </AppScreen.Body>
    </AppScreen>
  )
}
