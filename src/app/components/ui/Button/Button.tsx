import { cn } from '@/app/lib/utils'
import { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'default' | 'link'
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'

const baseClasses =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer hover:translate-y-[-2px]'

const buttonVariants = {
  variant: {
    default: cn(
      baseClasses,
      'bg-blue-500 text-white hover:bg-blue-700 focus:ring-blue-500'
    ),
    link: cn(
      baseClasses,
      'text-blue-500 underline-offset-4 hover:underline focus:ring-blue-500'
    )
  },
  size: {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 px-3 text-sm',
    lg: 'h-11 px-8 text-lg',
    icon: 'h-10 w-10 p-0'
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
