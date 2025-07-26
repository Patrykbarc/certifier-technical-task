import { useState } from 'react'
import { MenuClosed, MenuOpen } from '../_atoms/MobileMenus'
import { useLockBodyScroll } from '../_hook/useLockBodyScroll'

export function MobileNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useLockBodyScroll(isMobileMenuOpen)

  return (
    <div className="py-5 wrapper mx-auto flex justify-between items-center xl:hidden fixed top-0 left-0 right-0 z-50">
      <MenuClosed setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <MenuOpen
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </div>
  )
}
