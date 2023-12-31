import Header from '@/components/header/header'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { Ubuntu } from 'next/font/google'
import Providers from './providers'

import './globals.css'

const lato = Lato({
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-lato'
})
const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu'
})

export const metadata: Metadata = {
  title: 'Weather',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link href="/sun.icon.svg" rel="shortcut icon" type="image/x-icon" />
      </head>
      <body
        className={`${ubuntu.variable} font-sans ${lato.variable} font-extrabold h-[100vh]`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
