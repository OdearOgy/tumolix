// TODO: Unit test
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useCallback, useLayoutEffect, useState, type FunctionComponent } from 'react'
import { Button } from '../../../../components'

const KEY = 'app::color_scheme'

export type ColorScheme = 'light' | 'dark'

// TODO: Extract
const getColorSchemePreference = (): ColorScheme => {
  const stored = globalThis.localStorage.getItem(KEY) ?? null

  if (stored) {
    return stored as ColorScheme
  }

  const systemPreference = globalThis.matchMedia?.('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'

  globalThis.localStorage.setItem(KEY, systemPreference)
  return systemPreference
}

const saveColorSchemePreference = (theme: ColorScheme) => {
  globalThis.document.documentElement.setAttribute('data-theme', theme)
  globalThis.localStorage.setItem(KEY, theme)
}

const ColorSchemeToggler: FunctionComponent = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(() => getColorSchemePreference())

  useLayoutEffect(() => {
    saveColorSchemePreference(colorScheme)
  }, [colorScheme])

  const handleToggle = useCallback(() => {
    const updated = colorScheme === 'dark' ? 'light' : 'dark'
    setColorScheme(updated)
    saveColorSchemePreference(updated)
  }, [colorScheme])

  return (
    <Button
      onClick={handleToggle}
      aria-label="Toggle theme"
      size="large"
      variant="warning"
      prefixIcon={colorScheme === 'dark' ? <SunIcon /> : <MoonIcon />}
    />
  )
}

export default ColorSchemeToggler
