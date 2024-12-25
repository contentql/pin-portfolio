import path from 'path'
import { Page } from 'payload-types'

export type StacksPageDataType = Omit<Page, 'id' | 'createdAt' | 'updatedAt'>
export type StacksImageType = {
  alt: string
  filePath: string
}
export const stacksPageData: StacksPageDataType = {
  title: 'Stacks',
  isHome: false,
  _status: 'published',
  layout: [
    {
      blockType: 'Stacks',
      stacksHeading: 'Tech Stacks',
      stacksDescription:
        'Peek into my software toolbox and preferred technology stacks',
      technologies: [
        {
          techHeading: 'Languages',
          techStacks: [
            {
              color: '#fcff33',
              techImage: 0,
              techName: 'JavaScript',
            },
            {
              color: '#2aa7e6 ',
              techImage: 0,
              techName: 'CSS',
            },
            {
              color: '#f21907 ',
              techImage: 0,
              techName: 'HTML',
            },

            {
              color: '#07a4f2 ',
              techImage: 0,
              techName: 'TypeScript',
            },
          ],
        },
        {
          techHeading: 'Frameworks & Libraries',
          techStacks: [
            {
              color: '#5dc6fa ',
              techImage: 0,
              techName: 'React.js',
            },
            {
              color: '#5c1ce7 ',
              techImage: 0,
              techName: 'Redux',
            },
            {
              color: '#83e11f ',
              techImage: 0,
              techName: 'Node.js',
            },
            {
              color: '#1ce797 ',
              techImage: 0,
              techName: 'TailwindCSS',
            },
            {
              color: '#060606 ',
              techImage: 0,
              techName: 'Next.js',
            },
          ],
        },
        {
          techHeading: 'Databases',
          techStacks: [
            {
              color: '#ece62e ',
              techImage: 0,
              techName: 'Firebase',
            },
            {
              color: '#41e71c ',
              techImage: 0,
              techName: 'MongoDB',
            },
            {
              color: '#1cc8e7 ',
              techImage: 0,
              techName: 'PostgreSQL',
            },
            {
              color: '#e7971c ',
              techImage: 0,
              techName: 'MySQL',
            },
          ],
        },
      ],
    },
  ],
}

export const StacksTechnologiesImageData: StacksImageType[] = [
  {
    alt: 'Javascript',
    filePath: path.join(process.cwd(), '/public/images/seed/language-1.png'),
  },
  {
    alt: 'CSS',
    filePath: path.join(process.cwd(), '/public/images/seed/language-2.png'),
  },
  {
    alt: 'HTML',
    filePath: path.join(process.cwd(), '/public/images/seed/language-3.png'),
  },
  {
    alt: 'TypeScript',
    filePath: path.join(process.cwd(), '/public/images/seed/language-4.png'),
  },
  {
    alt: 'React.js',
    filePath: path.join(process.cwd(), '/public/images/seed/framework-1.png'),
  },
  {
    alt: 'Redux',
    filePath: path.join(process.cwd(), '/public/images/seed/framework-2.png'),
  },
  {
    alt: 'Node.js',
    filePath: path.join(process.cwd(), '/public/images/seed/framework-3.png'),
  },
  {
    alt: 'TailwindCSS',
    filePath: path.join(process.cwd(), '/public/images/seed/framework-4.png'),
  },
  {
    alt: 'Next.js',
    filePath: path.join(process.cwd(), '/public/images/seed/framework-5.png'),
  },
  {
    alt: 'Firebase',
    filePath: path.join(process.cwd(), '/public/images/seed/database-1.png'),
  },
  {
    alt: 'MongoDB',
    filePath: path.join(process.cwd(), '/public/images/seed/database-2.png'),
  },
  {
    alt: 'PostgreSQL',
    filePath: path.join(process.cwd(), '/public/images/seed/database-3.png'),
  },
  {
    alt: 'MySQL',
    filePath: path.join(process.cwd(), '/public/images/seed/database-4.png'),
  },
]
