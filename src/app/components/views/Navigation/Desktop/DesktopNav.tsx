import Link from 'next/link'
import { BrandLogo } from '../_atoms/BrandLogo'
import { GetStartedButton } from '../_atoms/GetStartedButton'
import NAV_ITEMS from '../_constants/nav-items.json'

export function DesktopNav() {
  return (
    <div className="py-5 wrapper px-9 mx-auto justify-between items-center hidden xl:flex fixed top-0 left-0 right-0 z-50">
      <Link href="/" aria-label="Certifier home page">
        <BrandLogo width={145} height={35} />
      </Link>

      <div className="flex items-center gap-8">
        <nav className="flex items-center space-x-9">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-base text-black hover:text-blue-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <GetStartedButton size="default" />
      </div>
    </div>
  )
}
