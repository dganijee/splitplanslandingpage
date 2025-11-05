export function Logomark(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props}>
      <img
        src="/images/splitplans-logo.png"
        alt="SplitPlans"
        className="h-10 w-auto flex-none"
      />
    </div>
  )
}

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className="flex items-center" {...props}>
      <img
        src="/images/splitplans-logo.png"
        alt="SplitPlans"
        className="h-10 w-auto flex-none"
      />
    </div>
  )
}
