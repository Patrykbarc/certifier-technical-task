import { useEffect, useState } from 'react'

const breakpoints = {
  sm: '40rem',
  md: '48rem',
  lg: '64rem',
  xl: '80rem',
  '2xl': '96rem'
}

export function useMediaQuery(
  breakpoint: keyof typeof breakpoints
): boolean | null {
  const [matches, setMatches] = useState<null | boolean>(null)

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${breakpoints[breakpoint]})`)

    setMatches(media.matches)

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches)

    media.addEventListener('change', listener)

    return () => media.removeEventListener('change', listener)
  }, [breakpoint])

  return matches
}
