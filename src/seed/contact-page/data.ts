import { Page } from 'payload-types'

export type ContactPageDataType = Omit<Page, 'id' | 'createdAt' | 'updatedAt'>

export const contactPageData: ContactPageDataType = {
  title: 'Contact',

  layout: [
    {
      contactHeading: 'Reach Me Out.',
      contactDescription: 'Please, Select a reason first',

      contactReasons: [
        {
          reason: 'Freelance Development',
          description:
            ' Seeking project specific discussion or tailored software solutions for specific business needs.',
        },

        {
          reason: 'Recruitment Opportunity',
          description:
            ' Interested in discussing employment opportunities or freelance positions.',
        },

        {
          reason: 'Personal Guidence',
          description: 'Seeking personal guidance or mentorship.',
        },

        {
          reason: 'Other',
          description: 'For inquiries related to topics not listed above.',
        },
      ],
      blockType: 'Contact',
    },
  ],

  isHome: false,
  isDynamic: false,
  slugMode: 'generate',
  slug: 'contact',
  pathMode: 'generate',
  path: '/contact',
  parent: null,

  _status: 'published',
}
