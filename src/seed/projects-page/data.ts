import { Page } from 'payload-types'

export type ProjectPageDataType = Omit<Page, 'id' | 'createdAt' | 'updatedAt'>

export const projectsPageData: ProjectPageDataType = {
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
}
