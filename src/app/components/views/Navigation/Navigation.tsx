'use client'

import { DesktopNav } from './Desktop/DesktopNav'
import { MobileNav } from './Mobile/MobileNav'

export function Navigation() {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  )
}
