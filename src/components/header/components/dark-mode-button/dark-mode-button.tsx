'use client'
import { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from '@phosphor-icons/react'

const DEFAULT_SIZE = 28

enum Themes {
  light = 'light',
  dark = 'dark'
}

export default function DarkModeButton() {
  const { theme, setTheme } = useTheme()
  const isDarkMode = theme === Themes.dark

  useEffect(() => {
    const hasDarkThemeString: string | null = localStorage.getItem('darkTheme')

    if (hasDarkThemeString) {
      const darkTheme: string = JSON.parse(hasDarkThemeString)
      setTheme(darkTheme)
    }
  }, [])

  function renderIcon() {
    if (isDarkMode) {
      return <Sun className="text-gray-200" size={DEFAULT_SIZE} />
    }
    return <Moon className="text-gray-800" size={DEFAULT_SIZE} />
  }

  function handleChangeDarkTheme() {
    setTheme(isDarkMode ? Themes.light : Themes.dark)
  }

  return (
    <button className="cursor-pointer" onClick={handleChangeDarkTheme}>
      {renderIcon()}
    </button>
  )
}
