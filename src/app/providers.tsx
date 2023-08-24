'use client'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'next-themes'
import Loading from '@/components/home/loading'

class ProvidersProps {
  children!: React.ReactNode | JSX.Element | JSX.Element[]
}

export default function Providers({ children }: ProvidersProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <Loading />
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  )
}
