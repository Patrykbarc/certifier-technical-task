import { useEffect } from 'react'

export function useLockBodyScroll(isLocked: boolean, onEscape?: () => void) {
  useEffect(() => {
    if (typeof window === 'undefined') return

    if (isLocked) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isLocked])

  useEffect(() => {
    if (!onEscape || !isLocked) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onEscape?.()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isLocked, onEscape])
}
