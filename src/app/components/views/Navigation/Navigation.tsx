'use client'

import { DesktopNav } from './Desktop/DesktopNav'
import { MobileNav } from './Mobile/MobileNav'

export function Navigation() {
  return (
    <header>
      <DesktopNav />
      <MobileNav />
    </header>
  )
}
