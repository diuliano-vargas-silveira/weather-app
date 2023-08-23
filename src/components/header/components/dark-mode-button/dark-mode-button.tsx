'use client'
import { UseTheme, useTheme } from '@/hooks'
import { Moon, Sun } from '@phosphor-icons/react'

export function DarkModeButton() {
  const { isDarkTheme, handleChangeDarkTheme }: UseTheme = useTheme()

  return (
    <button onClick={handleChangeDarkTheme}>
      {isDarkTheme ? <Sun /> : <Moon />}
    </button>
  )
}
