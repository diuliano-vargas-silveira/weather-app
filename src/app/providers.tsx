'use client'

import { ThemeProvider } from 'next-themes'

class ProvidersProps {
  children!: React.ReactNode | JSX.Element | JSX.Element[]
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  )
}
