'use client'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'next-themes'

class ProvidersProps {
  children!: React.ReactNode | JSX.Element | JSX.Element[]
}

export default function Providers({ children }: ProvidersProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  )
}
