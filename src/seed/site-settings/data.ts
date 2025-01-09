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
    currency: 'usd',
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

  themeSettings: {
    lightMode: {
      primary: '#cb83fb',
      background: '#F8FAFC',
      foreground: '#E2E8F0',
      text: '#0F0F0F',
      border: '#000000',
      popover: '#000000',
    },
    darkMode: {
      primary: '#60b8fb',
      background: '#0F172A',
      foreground: '#1E293B',
      text: '#FFFAFA',
      border: '#000000',
      popover: '#000000',
    },
    fonts: {
      display: {
        type: 'googleFont',
        customFont: null,
        remoteFont:
          'https://fonts.googleapis.com/css2?family=Chewy&display=swap',
        fontName: 'Chewy',
      },

      body: {
        type: 'googleFont',
        customFont: null,
        remoteFont:
          'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
        fontName: 'Roboto',
      },
    },
    radius: 'none',
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
