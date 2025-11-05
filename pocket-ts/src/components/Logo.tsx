export function Logomark(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props}>
      <img
        src="/images/splitplans-logo.svg"
        alt="SplitPlans"
        className="h-10 w-auto flex-none"
      />
    </div>
  )
}

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className="flex items-center gap-3" {...props}>
      <img
        src="/images/splitplans-logo.svg"
        alt="SplitPlans"
        className="h-10 w-auto flex-none"
      />
      <span className="text-xl font-semibold text-gray-900">SplitPlans</span>
    </div>
  )
}
