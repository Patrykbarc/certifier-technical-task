import Image from 'next/image'

type LogoItem = {
  name: string
  url: string
  alt: string
}

const src = '/logos/training-providers/'

const HERO_LOGOS: LogoItem[] = [
  {
    name: 'logo-0',
    url: `${src}/logo-0.svg`,
    alt: 'Society logo'
  },
  {
    name: 'logo-1',
    url: `${src}/logo-1.svg`,
    alt: 'Keepit logo'
  },
  {
    name: 'logo-2',
    url: `${src}/logo-2.svg`,
    alt: 'Verkada logo'
  },
  {
    name: 'logo-3',
    url: `${src}/logo-3.svg`,
    alt: 'Wortell logo'
  },
  {
    name: 'logo-4',
    url: `${src}/logo-4.svg`,
    alt: 'Hult Prize logo'
  }
]

export function HeroLogos() {
  return (
    <div className="flex items-center justify-between wrapper flex-col 2xl:flex-row space-y-10 2xl:space-y-0">
      <h1 className="text-center 2xl:text-left">
        500+ training providers grow their businesses with Certifier
      </h1>
      <div className="flex flex-wrap items-center justify-evenly gap-4 w-full 2xl:justify-between">
        <Separator />
        {HERO_LOGOS.map((logo) => (
          <Image
            key={logo.name}
            src={logo.url}
            alt={logo.alt}
            className="training-provider-logo"
            width={140}
            height={50}
          />
        ))}
      </div>
    </div>
  )
}

function Separator() {
  return <div className="h-[40px] w-[1px] bg-[#ccc] hidden 2xl:block" />
}
