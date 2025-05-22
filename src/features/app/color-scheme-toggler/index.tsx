// TODO: Unit test
import { useCallback, useLayoutEffect, useState, type FunctionComponent } from 'react'
import { Button } from '../../../components'
import { ArrowPathIcon } from '../../../components/icons'

const KEY = 'app::color_scheme'

export type ColorScheme = 'light' | 'dark'

const getColorScheme = (): ColorScheme => {
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

const setColorScheme = (theme: ColorScheme) => {
  globalThis.document.documentElement.setAttribute('data-theme', theme)
  globalThis.localStorage.setItem(KEY, theme)
}

const ColorSchemeToggler: FunctionComponent = () => {
  const [theme, setTheme] = useState<ColorScheme>(() => getColorScheme())

  useLayoutEffect(() => {
    setColorScheme(theme)
  }, [theme])

  const handleToggle = useCallback(() => {
    const updated = theme === 'dark' ? 'light' : 'dark'
    setTheme(updated)
    setColorScheme(updated)
  }, [theme])

  return (
    <Button
      onClick={handleToggle}
      prefixIcon={<ArrowPathIcon className="animate-spin" size="large" />}
    >
      {theme} mode
    </Button>
  )
}

export default ColorSchemeToggler
