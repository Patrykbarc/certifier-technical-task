'use client'

import { useMediaQuery } from './_hook/useMediaQuery'
import { DesktopNav } from './Desktop/DesktopNav'
import { MobileNav } from './Mobile/MobileNav'

export function Navigation() {
  const isMobile = useMediaQuery('(max-width: 80rem)')

  if (isMobile === null) return null

  return <header>{isMobile ? <MobileNav /> : <DesktopNav />}</header>
}
