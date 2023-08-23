import { useEffect, useState } from 'react'

const DARK_THEME_MATCHER = '(prefers-color-scheme: dark)'

export class UseTheme {
  isDarkTheme!: boolean
  handleChangeDarkTheme!: () => void
}

export function useTheme(): UseTheme {
  function getSystemTheme(): boolean {
    if (typeof window !== 'undefined') {
      return window.matchMedia(DARK_THEME_MATCHER).matches
    }
    return false
  }

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(getSystemTheme())

  useEffect(() => {
    const hasDarkThemeString: string | null =
      localStorage.getItem('isDarkTheme')

    if (hasDarkThemeString) {
      const hasDarkTheme: boolean = JSON.parse(hasDarkThemeString)
      setIsDarkTheme(hasDarkTheme)
    }
  }, [])

  function handleChangeDarkTheme() {
    const isNewDarkTheme = !isDarkTheme

    localStorage.setItem('isDarkTheme', JSON.stringify(isNewDarkTheme))
    setIsDarkTheme(isNewDarkTheme)
  }

  return { isDarkTheme, handleChangeDarkTheme }
}
