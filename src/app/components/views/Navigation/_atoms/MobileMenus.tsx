import { cn } from '@/app/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { NAV_ITEMS } from '../_constants/nav-items'
import { BrandLogo } from './BrandLogo'
import { LinkButton } from './LinkButton'

type MenuProps = {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (isOpen: boolean) => void
}

function MenuClosed({ isMobileMenuOpen, setIsMobileMenuOpen }: MenuProps) {
  return (
    <>
      <Link
        href="/"
        aria-label="Certifier home page"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <BrandLogo width={145} height={35} />
      </Link>

      <div className="flex items-center gap-4">
        <LinkButton href="#get-started" label="Get started" />

        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={isMobileMenuOpen}
          className="z-50 aspect-square size-10 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Image
            src="/icons/hamburger.svg"
            alt="Open menu"
            width={28}
            height={28}
            className="mx-auto"
          />
        </button>
      </div>
    </>
  )
}

function MenuOpen({ isMobileMenuOpen, setIsMobileMenuOpen }: MenuProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex flex-col bg-white transition-transform duration-300 ease-in-out',
        isMobileMenuOpen ? 'block' : 'hidden'
      )}
    >
      <div className="flex wrapper justify-between items-center px-5 py-5 border-b border-gray-200">
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
          <BrandLogo width={145} height={35} />
        </Link>

        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsMobileMenuOpen(false)}
          className="aspect-square size-10 text-2xl cursor-pointer"
        >
          &#x2715;
        </button>
      </div>

      <nav className="flex-1 px-5" aria-label="Main navigation">
        <ul className="mt-8 flex flex-col space-y-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-lg font-medium text-black hover:text-blue-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <li className="border-b pb-6 border-gray-200">{item.label}</li>
            </Link>
          ))}
          <LinkButton href="#get-started" label="Get started" size="lg" />
        </ul>
      </nav>
    </div>
  )
}

export { MenuClosed, MenuOpen }
