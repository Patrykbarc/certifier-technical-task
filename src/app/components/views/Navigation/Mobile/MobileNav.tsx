import { cn } from '@/app/lib/utils'
import { useState } from 'react'
import { MenuClosed, MenuOpen } from '../_atoms/MobileMenus'
import { useLockBodyScroll } from '../_hook/useLockBodyScroll'
import { useScrollHeight } from '../_hook/useScrollHeight'

export function MobileNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const scrollHeight = useScrollHeight()
  useLockBodyScroll(isMobileMenuOpen, () => setIsMobileMenuOpen(false))

  return (
    <div
      className={cn(
        'py-5 transition-colors duration-500 px-5 wrapper mx-auto flex justify-between items-center fixed top-0 left-0 right-0 z-50',
        scrollHeight > 150 && 'bg-white shadow-xs'
      )}
    >
      <MenuClosed
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <MenuOpen
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </div>
  )
}
