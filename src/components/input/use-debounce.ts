import { useEffect, useRef, useState } from 'react'

export function useDebounce<T>(value: T, delay: number): T {
  const timerRef = useRef<number | undefined>(undefined)

  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    timerRef.current = globalThis.setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timerRef.current)
    }
  }, [value, delay])

  return debouncedValue
}
