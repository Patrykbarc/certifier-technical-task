import { useEffect, useState } from 'react'

export function useScrollHeight() {
  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return

    setScrollHeight(window.scrollY)

    const handleScroll = () => {
      setScrollHeight(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollHeight
}
