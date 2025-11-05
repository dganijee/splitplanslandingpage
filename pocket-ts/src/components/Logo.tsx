import Image from 'next/image'

export function Logomark(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props}>
      <Image
        src="/images/splitplans-logo.svg"
        alt="SplitPlans"
        className="h-10 w-auto flex-none"
        unoptimized
        width={200}
        height={40}
      />
    </div>
  )
}

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className="flex items-center gap-3" {...props}>
      <Image
        src="/images/splitplans-logo.svg"
        alt="SplitPlans"
        className="h-10 w-auto flex-none"
        unoptimized
        width={200}
        height={40}
      />
      <span className="text-xl font-semibold text-gray-900">SplitPlans</span>
    </div>
  )
}
