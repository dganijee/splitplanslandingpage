import Image from 'next/image'
import splitplansLogo from '@/images/splitplans-logo.svg'

export function Logomark(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props}>
      <Image
        src={splitplansLogo}
        alt="SplitPlans"
        className="h-10 w-auto flex-none"
        unoptimized
      />
    </div>
  )
}

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className="flex items-center gap-3" {...props}>
      <Image
        src={splitplansLogo}
        alt="SplitPlans"
        className="h-10 w-auto flex-none"
        unoptimized
      />
      <span className="text-xl font-semibold text-gray-900">SplitPlans</span>
    </div>
  )
}
