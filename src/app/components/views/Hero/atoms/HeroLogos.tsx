import Image from 'next/image'

type LogoItem = {
  name: string
  url: string
  alt: string
}

const src = '/logos/training-providers'

const HERO_LOGOS: LogoItem[] = [
  {
    name: 'logo-0',
    url: `${src}/logo-0.svg`,
    alt: 'Society brand logo'
  },
  {
    name: 'logo-1',
    url: `${src}/logo-1.svg`,
    alt: 'Keepit brand logo'
  },
  {
    name: 'logo-2',
    url: `${src}/logo-2.svg`,
    alt: 'Verkada brand logo'
  },
  {
    name: 'logo-3',
    url: `${src}/logo-3.svg`,
    alt: 'Wortell brand logo'
  },
  {
    name: 'logo-4',
    url: `${src}/logo-4.svg`,
    alt: 'Hult Prize brand logo'
  }
]

export function HeroLogos() {
  return (
    <div className="flex items-center mt-12 md:mt-1 justify-between w-full wrapper px-4 flex-col 2xl:flex-row space-y-10 2xl:space-y-0">
      <h2 className="text-center mt-1.5 text-xl xl:text-base 2xl:text-left 2xl:max-w-60 mb-4 lg:mb-auto">
        500+ training providers grow their businesses with Certifier
      </h2>
      <Separator />
      <Logos />
    </div>
  )
}

function Separator() {
  return <div className="h-[40px] w-[1px] bg-[#ccc] hidden 2xl:block mx-8" />
}

function Logos() {
  return (
    <div className="flex flex-wrap items-center justify-evenly gap-4 pt-4 2xl:pt-1 w-full 2xl:justify-between">
      {HERO_LOGOS.map((logo) => (
        <Image
          key={logo.name}
          src={logo.url}
          alt={logo.alt}
          width={140}
          height={50}
        />
      ))}
    </div>
  )
}
