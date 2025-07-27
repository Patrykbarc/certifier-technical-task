import Link from 'next/link'
import { BrandLogo } from '../_atoms/BrandLogo'
import { LinkButton } from '../_atoms/LinkButton'
import { NAV_ITEMS } from '../_constants/nav-items'

export function DesktopNav() {
  return (
    <div className="py-5 wrapper px-9 mx-auto justify-between items-center flex fixed top-0 left-0 right-0 z-50">
      <Link href="/" aria-label="Certifier home page">
        <BrandLogo width={145} height={35} />
      </Link>

      <div className="flex items-center gap-8">
        <nav aria-label="Main navigation">
          <ul className="flex items-center space-x-9">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-base text-black motion-safe:hover:text-blue-500 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <LinkButton href="#get-started" label="Get started" size="default" />
      </div>
    </div>
  )
}
