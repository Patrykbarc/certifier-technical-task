import { cn } from '@/app/lib/utils'
import { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'default' | 'link'
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'

const baseClasses =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer motion-safe:hover:translate-y-[-2px] motion-safe:active:translate-y-0'

const buttonVariants = {
  variant: {
    default: cn(
      baseClasses,
      'bg-cerfitier-blue text-white motion-safe:hover:bg-cerfitier-blue/90 focus:ring-cerfitier-blue'
    ),
    link: cn(baseClasses, 'text-cerfitier-blue focus:ring-cerfitier-blue')
  },
  size: {
    default: 'px-4 py-2.5 h-[44px]',
    sm: 'h-9 px-3 text-sm',
    lg: 'h-12 px-5 py-2.5 text-xl',
    icon: 'p-0 size-10'
  }
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) {
  const variantClasses = buttonVariants.variant[variant]
  const sizeClasses = buttonVariants.size[size]

  return (
    <button className={cn(variantClasses, sizeClasses, className)} {...props} />
  )
}

export { Button, buttonVariants }
export type { ButtonProps, ButtonSize, ButtonVariant }
