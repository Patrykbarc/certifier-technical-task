import { ButtonSize, buttonVariants } from '@/app/components/ui/Button/Button'
import { cn } from '@/app/lib/utils'
import Link from 'next/link'

type GetStartedButtonProps = {
  size?: ButtonSize
}

export function GetStartedButton({ size = 'sm' }: GetStartedButtonProps) {
  return (
    <Link
      href="/"
      className={cn(buttonVariants.variant.default, buttonVariants.size[size])}
    >
      Get started
    </Link>
  )
}
