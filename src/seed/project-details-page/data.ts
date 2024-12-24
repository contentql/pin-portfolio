import { Page } from 'payload-types'

export type ProjectDetailsPageDataType = Omit<
  Page,
  'id' | 'createdAt' | 'updatedAt'
>

export const projectDetailsPageData: ProjectDetailsPageDataType = {
  title: 'Project Details',

  layout: [
    {
      collectionSlug: 'projects',
      blockName: null,
      blockType: 'Details',
    },
  ],

  isHome: false,
  isDynamic: true,
  slugMode: 'generate',
  slug: 'project-details',
  pathMode: 'generate',
  path: '/project/[project-details]',
  parent: 0,

  _status: 'published',
}
