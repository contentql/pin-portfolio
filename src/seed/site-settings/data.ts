import path from 'path'
import { DataFromGlobalSlug } from 'payload'

export type siteSettingsDataType = Omit<
  DataFromGlobalSlug<'site-settings'>,
  'id'
>

export type ImageType = {
  alt: string
  filePath: string
}

export const siteSettingsData: siteSettingsDataType = {
  general: {
    title: 'Akhil Naidu',
    description: 'This is my portfolio',
    faviconUrl: 0,
    ogImageUrl: 0,
  },
  navbar: {
    logo: {
      imageUrl: 0,
      height: null,
      width: null,
    },
    menuLinks: [
      {
        group: false,
        menuLink: {
          type: 'reference',
          newTab: null,
          icon: 0,
          label: 'Projects',
          page: {
            relationTo: 'pages',
            value: 0,
          },
          url: null,
        },
      },
      {
        group: false,
        menuLink: {
          type: 'reference',
          newTab: null,
          icon: 0,
          label: 'Experiences',
          page: {
            relationTo: 'pages',
            value: 0,
          },
          url: null,
        },
      },
      {
        group: false,
        menuLink: {
          type: 'reference',
          newTab: null,
          icon: 0,
          label: 'Stacks',
          page: {
            relationTo: 'pages',
            value: 0,
          },
          url: null,
        },
      },
      {
        group: false,
        menuLink: {
          type: 'reference',
          newTab: null,
          icon: 0,
          label: 'About',
          page: {
            relationTo: 'pages',
            value: 0,
          },
          url: null,
        },
      },
    ],
  },
  footer: {
    logo: {
      imageUrl: 0,
      height: null,
      width: null,
      description: null,
    },
    footerLinks: [],
    socialLinks: [],
    copyright: null,
  },
  redirectionLinks: {},
  monetization: {
    adSenseId: null,
    measurementId: null,
  },
  stripeConnect: {
    country: null,
    currency: null,
    stripeUserId: null,
    stripeAdminDashboard: null,
  },
  theme: {
    light: {
      primaryColor: '#cb83fb',
      backgroundColor: '#F8FAFC',
      foregroundColor: '#E2E8F0',
      textColor: '#0F0F0F',
    },
    dark: {
      primaryColor: '#60b8fb',
      backgroundColor: '#0F172A',
      foregroundColor: '#1E293B',
      textColor: '#FFFAFA',
    },
  },
  // globalType: 'site-settings',
}

export const siteSettingsImages: ImageType[] = [
  {
    alt: 'Logo',
    filePath: path.join(process.cwd(), '/public/images/seed/logo.png'),
  },
  {
    alt: 'Link1',
    filePath: path.join(process.cwd(), '/public/images/seed/link-1.png'),
  },
  {
    alt: 'Link2',
    filePath: path.join(process.cwd(), '/public/images/seed/link-2.png'),
  },
  {
    alt: 'Link3',
    filePath: path.join(process.cwd(), '/public/images/seed/link-3.png'),
  },
  {
    alt: 'Link4',
    filePath: path.join(process.cwd(), '/public/images/seed/link-4.png'),
  },
]
