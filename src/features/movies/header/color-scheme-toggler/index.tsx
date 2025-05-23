// TODO: Unit test
import { Button } from '@headlessui/react'
import { useCallback, useLayoutEffect, useState, type FunctionComponent } from 'react'
import { MoonIcon, SunIcon } from '../../../../components/icons'

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
      variant="warning"
      size="large"
      prefixIcon={colorScheme === 'dark' ? <SunIcon /> : <MoonIcon />}
    />
  )
}

export default ColorSchemeToggler
