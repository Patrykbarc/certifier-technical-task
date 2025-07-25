import { buttonVariants } from '@/app/components/ui/Button/Button'
import { cn } from '@/app/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { LinkButton } from '../../Navigation/_atoms/LinkButton'
import { UserRating } from './UserRating'
import CHEVRON_RIGHT from '/public/icons/chevron-right.svg'
import CERT from '/public/images/cert.svg'
import HERO_IMAGE from '/public/images/hero-image-1.png'

export function HeroContent() {
  return (
    <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 h-fit">
      <LeftSide />
      <RightSide />
    </div>
  )
}

function LeftSide() {
  return (
    <div className="max-w-4xl md:self-center">
      <div className="md:max-w-[500px] space-y-[15px] text-center md:text-left">
        <UserRating />
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-medium leading-[53px]">
            Power your training program with digital credentials
          </h1>
          <p className="text-xl max-w-2xl leading-7">
            Boost your training business, stay top of mind with program alumni,
            and turn learning progress into shareable, professional, and branded
            certificates.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 items-center mt-10">
        <LinkButton href="#book-a-demo" label="Book a demo" size="lg" />
        <Link
          href="#signup"
          className={cn(
            buttonVariants.variant.link,
            buttonVariants.size.lg,
            'group hover:translate-y-0 p-0'
          )}
        >
          Sign up free{' '}
          <Image
            className="group-hover:translate-x-1 transition-transform"
            src={CHEVRON_RIGHT}
            alt="Chevron right"
          />
        </Link>
      </div>
    </div>
  )
}

function RightSide() {
  const sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'

  return (
    <div className="max-w-4xl size-full relative h-[420px] xl:h-[500px] grid place-items-center">
      <div className="absolute group xl:left-22 xl:top-7 scale-75 lg:scale-100">
        <Image
          src={HERO_IMAGE}
          alt="A man with glasses sits at a table, focused on his laptop while working or browsing."
          priority
          sizes={sizes}
        />
        <Image
          src={CERT}
          alt="Image of the certificate with the title “TRAINING CERTIFICATE” and the expiry date."
          className="absolute -bottom-24 -right-18 xl:-right-[154px] shadow-lg scale-75 xl:scale-100"
          priority
          sizes={sizes}
        />
      </div>
    </div>
  )
}
