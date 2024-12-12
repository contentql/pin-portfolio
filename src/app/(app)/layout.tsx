import type { Viewport } from 'next'
import { Outfit } from 'next/font/google'
import { ReactNode } from 'react'

import { colors } from '@/lib/theme'
import LayoutProvider from '@/providers/layout-provider'

import './globals.css'

const outfit = Outfit({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  preload: true,
  adjustFontFallback: false,
})

export const viewport: Viewport = {
  themeColor: colors.primary,
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body className={outfit.className}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  )
}

export default RootLayout
