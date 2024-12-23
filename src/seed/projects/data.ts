import path from 'path'
import { RequiredDataFromCollectionSlug } from 'payload'

export type ProjectDataType = RequiredDataFromCollectionSlug<'projects'>
export type ProjectImageType = {
  alt: string
  filePath: string
}

export const projectsData: ProjectDataType[] = [
  {
    projectType: 'major',
    color: '#f78d36',
    projectName: 'CKRET',

    projectImage: 0,
    summary:
      'Ckret is an anonymous messaging platform. Exchange anonymous questions, feedback, suggestions, dares, and challenges with your friends, families, and coworkers.',

    projectLinks: [
      {
        serviceIcon: 0,
        serviceName: 'Github',
        projectServiceLink: '/',
      },

      {
        serviceIcon: 0,
        serviceName: 'Live',
        projectServiceLink: '/',
      },
    ],

    features: [
      {
        feature: 'Exchange messages with friends and families anonymously.',
      },

      {
        feature: 'Create account anonymously or with gmail to get messages.',
      },

      {
        feature:
          'Send secret messages using ckret link without even creating account.',
      },

      {
        feature:
          'Share ckret link to social media platforms in one click to receive messages.',
      },

      {
        feature: 'Highly customizable settings for the best user experience.',
      },
    ],

    techStacks: [
      {
        techStack: 'Next.js',
      },

      {
        techStack: 'TypeScript',
      },

      {
        techStack: 'TailwindCSS',
      },

      {
        techStack: 'React Query',
      },
    ],
    slug: 'ckret',
    _status: 'published',
  },
  {
    projectType: 'minor',
    color: '#6dca9a',
    projectName: 'SCRENOO',

    projectImage: 0,
    summary:
      'Screnoo is a PC Screen recorder which helps to record desktop or laptop screen along with system or user audio.',

    projectLinks: [
      {
        serviceIcon: 0,
        serviceName: 'Github',
        projectServiceLink: '/',
      },

      {
        serviceIcon: 0,
        serviceName: 'Live',
        projectServiceLink: '/',
      },
    ],

    features: [
      {
        feature: ' Record PC / Laptop screen',
      },

      {
        feature: 'Record system or user audio',
      },

      {
        feature: ' Download recording in .mp4 format',
      },
    ],

    techStacks: [
      {
        techStack: 'Html',
      },

      {
        techStack: 'Tailwind CSS',
      },

      {
        techStack: 'JavaScript',
      },
    ],
    slug: 'screnoo',
    _status: 'published',
  },
]
export const projectsImagesData: ProjectImageType[] = [
  {
    alt: 'Project 1',
    filePath: path.join(process.cwd(), '/public/images/seed/project-1.png'),
  },
  {
    alt: 'Github',
    filePath: path.join(process.cwd(), '/public/images/seed/github.png'),
  },
  {
    alt: 'WebIcon',
    filePath: path.join(process.cwd(), '/public/images/seed/web.png'),
  },
  {
    alt: 'Project 2',
    filePath: path.join(process.cwd(), '/public/images/seed/project-2.png'),
  },
  {
    alt: 'Github',
    filePath: path.join(process.cwd(), '/public/images/seed/github.png'),
  },
  {
    alt: 'WebIcon',
    filePath: path.join(process.cwd(), '/public/images/seed/web.png'),
  },
]
