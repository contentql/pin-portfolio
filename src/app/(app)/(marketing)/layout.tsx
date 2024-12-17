import { headers } from 'next/headers'

import LayoutProvider from '@/providers/layout-provider'
import { serverClient } from '@/trpc/serverClient'
import { getCurrentUser } from '@/utils/getCurrentUser'

const MarketingLayout = async ({ children }: { children: React.ReactNode }) => {
  const siteSettingsData = await serverClient.siteSettings.getSiteSettings()

  const headersList = await headers()
  const user = await getCurrentUser(headersList)
  return (
    <LayoutProvider siteSettingsData={siteSettingsData}>
      {children}
    </LayoutProvider>
  )
}

export default MarketingLayout
