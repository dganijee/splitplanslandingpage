import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold transition-colors',
  outline:
    'inline-flex justify-center rounded-lg border py-[calc(--spacing(2)-1px)] px-[calc(--spacing(3)-1px)] text-sm transition-colors',
}

const variantStyles = {
  solid: {
    cyan: 'relative overflow-hidden bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg shadow-yellow-500/25 before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 hover:shadow-xl hover:shadow-yellow-500/30 active:bg-gradient-to-r active:from-yellow-600 active:to-yellow-700 active:text-white/80 before:transition-all transition-all duration-200',
    white:
      'bg-white text-yellow-900 shadow-lg hover:bg-white/90 hover:shadow-xl active:bg-white/90 active:text-yellow-900/70 transition-all duration-200',
    gray: 'bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg hover:shadow-xl hover:from-gray-900 hover:to-gray-950 active:bg-gray-800 active:text-white/80 transition-all duration-200',
  },
  outline: {
    gray: 'border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 active:bg-gray-100 active:text-gray-700/80 transition-all duration-200',
  },
}

type ButtonProps = (
  | {
      variant?: 'solid'
      color?: keyof typeof variantStyles.solid
    }
  | {
      variant: 'outline'
      color?: keyof typeof variantStyles.outline
    }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
        href?: undefined
      })
  )

export function Button({ className, ...props }: ButtonProps) {
  props.variant ??= 'solid'
  props.color ??= 'gray'

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
