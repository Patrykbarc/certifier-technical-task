import { useEffect, useState } from 'react'

export function useScrollHeight() {
  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return

    setScrollHeight(window.scrollY)

    window.addEventListener('scroll', () => {
      setScrollHeight(window.scrollY)
    })
  }, [])

  return scrollHeight
}
