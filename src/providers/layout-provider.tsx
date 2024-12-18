'use client'

import { SiteSetting } from '@payload-types'
import { motion } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

import { pageTransition } from '@/animation/framer'
import Branding from '@/components/Branding'
import FocusLight from '@/components/common/focus-light'
import NavBar from '@/components/nav-bar'
import { MetadataProvider } from '@/utils/metadataContext'

const LayoutProvider = ({
  children,
  siteSettingsData,
}: {
  children: ReactNode
  siteSettingsData: SiteSetting
}) => {
  const pathname = usePathname()
  return (
    <MetadataProvider metadata={siteSettingsData}>
      <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
        <motion.main
          animate='animate'
          className='relative mx-auto size-full max-w-portfolio pt-9 md:pt-36'
          exit='exit'
          initial='initial'
          variants={pageTransition}>
          <FocusLight />

          <NavBar siteSettingsData={siteSettingsData} />

          {children}
          <Branding />
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
    </MetadataProvider>
  )
}

export default LayoutProvider
