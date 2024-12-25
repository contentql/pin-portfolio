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
        projectServiceLink: 'github.com/akhil-naidu/ckret',
      },

      {
        serviceIcon: 0,
        serviceName: 'Live',
        projectServiceLink: 'akhil-naidu.com',
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
        projectServiceLink: 'github.com/akhil-naidu/screnoo',
      },

      {
        serviceIcon: 0,
        serviceName: 'Live',
        projectServiceLink: 'screnoo.akhil-naidu.dev',
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
  {
    projectType: 'major',
    color: '#3de1ce',
    projectName: 'QUIZZY',

    projectImage: 0,
    summary:
      'Quizzy is a platform for online computer science or coding quizzes, as well as learning new topics by watching video content on the platform.',

    projectLinks: [
      {
        serviceIcon: 0,
        serviceName: 'Github',
        projectServiceLink: ' github.com/akhil-naidu/quizzy',
      },

      {
        serviceIcon: 0,
        serviceName: 'Live',
        projectServiceLink: 'quizzy.akhil-naidu.dev',
      },
    ],

    features: [
      {
        feature: 'User experience-centric, modern and responsive interface',
      },

      {
        feature: 'Dark and Light theme support',
      },

      {
        feature:
          'User authentication by Firebase: Google Signin, Email/Password Signin',
      },

      {
        feature: 'Option to edit profile and reset password',
      },

      {
        feature: 'Marking based quizzes',
      },

      {
        feature: 'Certificate on successful completion',
      },

      {
        feature: 'Quiz submission history',
      },
    ],

    techStacks: [
      {
        techStack: 'React',
      },

      {
        techStack: 'Tailwind CSS',
      },

      {
        techStack: 'Firebase',
      },

      {
        techStack: 'React-router-dom',
      },
    ],
    slug: 'quizzy',
    updatedAt: '2024-12-24T09:24:02.999Z',
    createdAt: '2024-12-24T09:24:02.999Z',
    _status: 'published',
  },
  {
    projectType: 'major',
    color: '#911fc7',
    projectName: 'SUDOKU WIZARD',

    projectImage: 0,
    summary:
      'Sudoku Wizard is an algorithmic project based on Backtracking Algorithm. This project illustrates the operation of the backtracking algorithm, which is used to solve any sudoku puzzle.',

    projectLinks: [
      {
        serviceIcon: 0,
        serviceName: 'Github',
        projectServiceLink: ' github.com/akhil-naidu/sudoku-wizard',
      },

      {
        serviceIcon: 0,
        serviceName: 'Live',
        projectServiceLink: 'sudoku-wizard.akhil-naidu.dev',
      },
    ],

    features: [
      {
        feature: 'Generate sudoku problem',
      },

      {
        feature: ' Solve existing sudoku problem',
      },

      {
        feature: 'Visualize how the backtracking algorithm works in behind',
      },
    ],

    techStacks: [
      {
        techStack: 'Html',
      },

      {
        techStack: 'Css',
      },

      {
        techStack: 'JavaScript',
      },
    ],
    slug: 'sudoku-wizard',
    updatedAt: '2024-12-24T09:30:16.693Z',
    createdAt: '2024-12-24T09:30:16.693Z',
    _status: 'published',
  },
  {
    projectType: 'major',
    color: '#4f82e8',
    projectName: 'CERTIVITA',

    projectImage: 0,
    summary:
      'Certivita is an online tool that helps to generate fully customizable personalized certificates. Summary github',

    projectLinks: [
      {
        serviceIcon: 0,
        serviceName: 'Github',
        projectServiceLink: ' github.com/akhil-naidu/certivita',
      },

      {
        serviceIcon: 0,
        serviceName: 'Live',
        projectServiceLink: ' certivita.akhil-naidu.dev',
      },
    ],

    features: [
      {
        feature: 'Generate customizable certificates',
      },

      {
        feature:
          'List of customizable fields: Certificate Genre, Recipient Name, Certificate Reason, Date of Issue, Signature',
      },

      {
        feature: 'Download certificate in .pdf format',
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
    slug: 'certivita',
    updatedAt: '2024-12-24T09:37:03.438Z',
    createdAt: '2024-12-24T09:37:03.438Z',
    _status: 'published',
  },
  {
    projectType: 'minor',
    color: '#71d17c',
    projectName: 'CALCULATOR',

    projectImage: 0,
    summary: 'This is a simple responsive Calculator.',

    projectLinks: [
      {
        serviceIcon: 0,
        serviceName: 'Github',
        projectServiceLink: ' github.com/akhil-naidu/calculator',
      },

      {
        serviceIcon: 0,
        serviceName: 'Live',
        projectServiceLink: 'calculator.akhil-naidu.dev',
      },
    ],

    features: [],

    techStacks: [],
    slug: 'calculator',
    updatedAt: '2024-12-24T09:43:49.495Z',
    createdAt: '2024-12-24T09:43:49.495Z',
    _status: 'published',
  },
]
export const projectsImagesData: ProjectImageType[] = [
  {
    alt: 'Project 1',
    filePath: path.join(process.cwd(), '/public/images/seed/project-1.png'),
  },

  {
    alt: 'Project 2',
    filePath: path.join(process.cwd(), '/public/images/seed/project-2.png'),
  },
  {
    alt: 'Project 3',
    filePath: path.join(process.cwd(), '/public/images/seed/project-3.png'),
  },
  {
    alt: 'Project 4',
    filePath: path.join(process.cwd(), '/public/images/seed/project-4.png'),
  },
  {
    alt: 'Project 5',
    filePath: path.join(process.cwd(), '/public/images/seed/project-5.png'),
  },
  {
    alt: 'Project 6',
    filePath: path.join(process.cwd(), '/public/images/seed/project-6.png'),
  },
]

export const projectsServicesImageData: ProjectImageType[] = [
  {
    alt: 'Github',
    filePath: path.join(process.cwd(), '/public/images/seed/github.png'),
  },
  {
    alt: 'WebIcon',
    filePath: path.join(process.cwd(), '/public/images/seed/web.png'),
  },
]
