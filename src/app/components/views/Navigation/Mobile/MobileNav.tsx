import { useState } from 'react'
import { MenuClosed, MenuOpen } from '../_atoms/MobileMenus'
import { useLockBodyScroll } from '../_hook/useLockBodyScroll'

export function MobileNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useLockBodyScroll(isMobileMenuOpen)

  return (
    <header className="py-5 px-6 md:px-12 mx-auto flex justify-between items-center 2xl:hidden">
      <MenuClosed setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <MenuOpen
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </header>
  )
}
