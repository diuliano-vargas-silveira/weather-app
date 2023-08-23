'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from '@phosphor-icons/react'

const DEFAULT_SIZE = 28

enum Themes {
  light = 'light',
  dark = 'dark'
}

export default function DarkModeButton() {
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const isDarkMode = theme === Themes.dark

  useEffect(() => {
    const hasDarkThemeString: string | null = localStorage.getItem('darkTheme')

    if (hasDarkThemeString) {
      const darkTheme: string = JSON.parse(hasDarkThemeString)
      setTheme(darkTheme)
    }
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return
  }

  function renderIcon() {
    if (isDarkMode) {
      return <Sun size={DEFAULT_SIZE} />
    }
    return <Moon size={DEFAULT_SIZE} />
  }

  function handleChangeDarkTheme() {
    setTheme(isDarkMode ? Themes.light : Themes.dark)
  }

  return <button onClick={handleChangeDarkTheme}>{renderIcon()}</button>
}
