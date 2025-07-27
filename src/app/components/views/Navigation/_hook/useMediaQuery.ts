import { useEffect, useState } from 'react'

export function useMediaQuery(query: string): boolean | null {
  const [matches, setMatches] = useState<null | boolean>(null)

  useEffect(() => {
    const media = window.matchMedia(query)

    setMatches(media.matches)

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches)

    media.addEventListener('change', listener)

    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}
