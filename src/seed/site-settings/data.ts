import path from 'path'
import { SiteSetting } from 'payload-types'

export type siteSettingsDataType = Omit<SiteSetting, 'id'>

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

            value: {
              title: 'Projects',

              layout: [
                {
                  title: null,
                  collectionSlug: 'projects',
                  blockName: null,
                  blockType: 'List',
                },
              ],

              isHome: false,
              isDynamic: false,
              slugMode: 'generate',
              slug: 'projects',
              pathMode: 'generate',
              path: '/projects',
              parent: null,

              _status: 'published',
            },
          },
          url: null,
        },

        menuLinkGroup: {
          groupTitle: null,

          groupLinks: [],
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

            value: {
              title: 'Experiences',

              layout: [
                {
                  experiencesHeading: 'My Experiences.',
                  experiencesDescription:
                    'Know about my professional journey and learnings',
                  achievementsHeading: 'Notable Achievements.',
                  achievementsDescription:
                    'Some of my noteworthy accomplishments to shout about',
                  blockName: null,

                  experiences: [
                    {
                      designation: 'CTO',
                      location: 'Hyderabad',
                      tenure: 'Jan 2021 - Present',
                      companyName: 'ContentQL',
                      companyLogo: 3,
                      companyWebsiteUrl: 'https://contentql.io/',

                      aboutYourWork: [
                        {
                          workDescription:
                            'Developed a ground-up in-platform e-commerce platform tailored for employee needs, integrating GraphQL queries with the PayloadCMS backend, driving a remarkable 400% increase in client onboarding.',
                        },

                        {
                          workDescription:
                            ' Implemented role-based authorization and routing using HOCs, custom hooks, and scalable UI components.',
                        },

                        {
                          workDescription:
                            " Enhanced ContentQL's user dashboard for diverse audience requirements, maintaining mobile-first design, resulting in a notable 470% surge in platform user sessions.",
                        },

                        {
                          workDescription:
                            'Engineered robust REST API views in Django for reward disbursement and store purchases, handling 2000 requests monthly and processing transactions worth 6 crores in total.',
                        },
                      ],

                      techStack: [
                        {
                          techStackName: 'Next.js',
                        },

                        {
                          techStackName: 'React Query',
                        },

                        {
                          techStackName: 'Tailwind Css',
                        },

                        {
                          techStackName: 'Type Script',
                        },

                        {
                          techStackName: 'GraphQL',
                        },
                      ],
                    },
                  ],

                  achievements: [
                    {
                      achievement:
                        'Qualified for prestigious ACM ICPC 2023 regionals.',
                    },

                    {
                      achievement:
                        'Secured 3rd rank in CodeHunt Challenge (College level coding contest).',
                    },

                    {
                      achievement:
                        'Achieved 264th rank in CodeChef Starters 43 (Div. 4) among 10K+ competitors.',
                    },

                    {
                      achievement:
                        'Earned world ranking of 853 (3rd in college) in TCS Codevita (100K+ participants).',
                    },
                  ],
                  blockType: 'Experience',
                },
              ],

              isHome: false,
              isDynamic: false,
              slugMode: 'generate',
              slug: 'experiences',
              pathMode: 'generate',
              path: '/experiences',
              parent: null,

              updatedAt: '2024-12-22T16:23:17.019Z',
              createdAt: '2024-12-22T16:23:16.876Z',
              _status: 'published',
            },
          },
          url: null,
        },

        menuLinkGroup: {
          groupTitle: null,

          groupLinks: [],
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

            value: {
              title: 'Stacks',

              layout: [
                {
                  stacksHeading: 'Tech Stacks.',
                  stacksDescription:
                    'Peek into my software toolbox and preferred technology stacks',
                  blockName: null,

                  technologies: [
                    {
                      techHeading: 'Languages',

                      techStacks: [
                        {
                          color: '#f5ee14',
                          techName: 'Java Script',
                          techImage: 4,
                        },

                        {
                          color: '#e11919',
                          techName: 'HTML',
                          techImage: 5,
                        },

                        {
                          color: '#4e68ef',
                          techName: 'CSS',
                          techImage: 6,
                        },

                        {
                          color: '#3c73e2',
                          techName: 'TypeScript',
                          techImage: 7,
                        },
                      ],
                    },

                    {
                      techHeading: 'Frameworks and Libraries',

                      techStacks: [
                        {
                          color: '#161313',
                          techName: 'Next.js',
                          techImage: 8,
                        },

                        {
                          color: '#95f4a5',
                          techName: 'Tailwind CSS',
                          techImage: 9,
                        },

                        {
                          color: '#d74747',
                          techName: 'React Query',
                          techImage: 10,
                        },

                        {
                          color: '#55ec67',
                          techName: 'Node.js',
                          techImage: 11,
                        },
                      ],
                    },

                    {
                      techHeading: 'Databases',

                      techStacks: [
                        {
                          color: '#4bc242',
                          techName: 'MogoDB',
                          techImage: 12,
                        },

                        {
                          color: '#5dadea',
                          techName: 'PostgreSQL',
                          techImage: 13,
                        },

                        {
                          color: '#75afe6',
                          techName: 'MySQL',
                          techImage: 14,
                        },
                      ],
                    },
                  ],
                  blockType: 'Stacks',
                },
              ],

              isHome: false,
              isDynamic: false,
              slugMode: 'generate',
              slug: 'stacks',
              pathMode: 'generate',
              path: '/stacks',
              parent: null,

              _status: 'published',
            },
          },
          url: null,
        },

        menuLinkGroup: {
          groupTitle: null,

          groupLinks: [],
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

            value: {
              title: 'About',

              layout: [
                {
                  aboutHeading: 'About Me',
                  aboutDescription:
                    'Get to know me better - my story, interests, and aspirations',
                  profileImage: 1,
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
                          detailPoint:
                            "I'm a B.Tech. graduate from IIT Guwahati",
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
                          codeProfileImage: 15,
                          color: '#dacb2b',
                        },

                        {
                          codeProfileTitle: 'Code Chef',
                          codeProfileUrl: '/',
                          codeProfileImage: 16,
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
            },
          },
          url: null,
        },

        menuLinkGroup: {
          groupTitle: null,

          groupLinks: [],
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

  globalType: 'site-settings',
}

export const logo: ImageType = {
  alt: 'footer',
  filePath: path.join(process.cwd(), '/public/images/logo.svg'),
}
export const fullLogo: ImageType = {
  alt: 'header',
  filePath: path.join(
    process.cwd(),
    '/public/assets/images/logos/analytica.png',
  ),
}
