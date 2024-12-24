import path from 'path'
import { Page } from 'payload-types'

export type ExperiencesPageDataType = Omit<
  Page,
  'id' | 'createdAt' | 'updatedAt'
>
export type ExperienceImageType = {
  alt: string
  filePath: string
}
export const experiencesPageData: ExperiencesPageDataType = {
  title: 'Experiences',

  layout: [
    {
      experiencesHeading: 'My Experiences',
      experiencesDescription:
        'Know about my professional journey and learnings',
      achievementsHeading: 'Notable Achievements',
      achievementsDescription:
        'Some of my noteworthy accomplishments to shout about',
      blockName: null,

      experiences: [
        {
          designation: 'CTO',
          location: 'Hyderabad',
          tenure: 'Jan 2021 - Present',
          companyName: 'ContentQL',

          companyLogo: 0,
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
          achievement: 'Qualified for prestigious ACM ICPC 2023 regionals.',
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
  _status: 'published',
}

export const companyLogoImageData: ExperienceImageType = {
  alt: 'CompanyLogo',
  filePath: path.join(process.cwd(), '/public/images/seed/contentql-logo.png'),
}
