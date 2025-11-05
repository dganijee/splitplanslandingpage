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
      <div className="overflow-hidden" style={{ height: '2.5rem' }}>
        <img
          src="/images/splitplans-logo.png"
          alt="SplitPlans"
          className="h-10 w-auto flex-none"
          style={{ display: 'block', marginTop: 0 }}
        />
      </div>
    </div>
  )
}
