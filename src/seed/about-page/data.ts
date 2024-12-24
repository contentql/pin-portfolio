import path from 'path'
import { Page } from 'payload-types'

export type AboutPageDataType = Omit<Page, 'id' | 'createdAt' | 'updatedAt'>
export type AboutImageType = {
  alt: string
  filePath: string
}
export const aboutPageData: AboutPageDataType = {
  title: 'About',

  layout: [
    {
      aboutHeading: 'About Me',
      aboutDescription:
        'Get to know me better - my story, interests, and aspirations',

      profileImage: 0,
      aboutYourSelf: 'Currently CTO at ContentQL',
      button: 'Say Hi!',
      buttonPath: 'contact',
      blockName: null,

      Details: [
        {
          detailsTitle: 'Summary',

          detailsPoints: [
            {
              detailPoint:
                "Hi, I'm Akhil Naidu. I'm an open source contributor and fullstack developer from Vizag, India.",
            },
          ],
        },

        {
          detailsTitle: 'Education',

          detailsPoints: [
            {
              detailPoint:
                "I completed my schooling from Dr. KKR's Gowtham Concept School.",
            },

            {
              detailPoint: "I'm a B.Tech. graduate from IIT Guwahati",
            },
          ],
        },

        {
          detailsTitle: 'Interests',

          detailsPoints: [
            {
              detailPoint:
                'My primary interest lies in software development, especially web and mobile.',
            },

            {
              detailPoint:
                'Apart from that, I enjoy competitive programming and teaching.',
            },

            {
              detailPoint:
                'I take an active interest in technology, business, and geo-politics, as well as how they intersect to affect society.',
            },
          ],
        },
      ],

      codeProfiles: [
        {
          Heading: 'Coding Profiles',

          codeProfile: [
            {
              codeProfileTitle: 'Leet Code',
              codeProfileUrl: '/',

              codeProfileImage: 0,
              color: '#dacb2b',
            },

            {
              codeProfileTitle: 'Code Chef',
              codeProfileUrl: '/',

              codeProfileImage: 0,
              color: '#f9f1f1',
            },
          ],
        },
      ],
      blockType: 'About',
    },
  ],

  isHome: false,
  isDynamic: false,
  slugMode: 'generate',
  slug: 'about',
  pathMode: 'generate',
  path: '/about',
  parent: null,

  _status: 'published',
}

export const aboutPageImageData: AboutImageType[] = [
  {
    alt: 'Profile',
    filePath: path.join(process.cwd(), '/public/images/seed/profile.png'),
  },
  {
    alt: 'Leetcode',
    filePath: path.join(process.cwd(), '/public/images/seed/leetcode.png'),
  },
  {
    alt: 'Codechef',
    filePath: path.join(process.cwd(), '/public/images/seed/codechef.png'),
  },
]
