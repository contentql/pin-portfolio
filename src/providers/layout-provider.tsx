'use client'

import { motion } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

import { pageTransition } from '@/animation/framer'
import FocusLight from '@/components/common/focus-light'
import NavBar from '@/components/nav-bar'

const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()

  return (
    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
      <motion.main
        animate='animate'
        className='max-w-portfolio relative mx-auto size-full pt-9 md:pt-36'
        exit='exit'
        initial='initial'
        variants={pageTransition}>
        <FocusLight />

        <NavBar />

        {children}

        {pathname !== '/' && <p className='h-20 md:h-10' />}
      </motion.main>

      <Toaster
        position='bottom-center'
        toastOptions={{
          style: {
            color: '#111',
            background: '#fff',
            maxWidth: '500px',
          },
          duration: 2000,
        }}
      />
    </ThemeProvider>
  )
}

export default LayoutProvider