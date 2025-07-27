import { ButtonSize, buttonVariants } from '@/app/components/ui/Button/Button'
import { cn } from '@/app/lib/utils'
import Link from 'next/link'

type LinkButtonProps = {
  href: string
  label: string
  size?: ButtonSize
}

export function LinkButton({ href, label, size = 'sm' }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants.variant.default, buttonVariants.size[size])}
    >
      {label}
    </Link>
  )
}
