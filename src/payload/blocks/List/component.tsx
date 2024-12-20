import { Params } from '../types'
import configPromise from '@payload-config'
import { ListType } from '@payload-types'
import { unstable_cache } from 'next/cache'
import { getPayload } from 'payload'
import React from 'react'

import ProjectsList from './components/ProjectsList'

interface ListProps extends ListType {
  params: Params
}

const List: React.FC<ListProps> = async ({ params, ...block }) => {
  const payload = await getPayload({
    config: configPromise,
  })

  switch (block?.collectionSlug) {
    case 'projects': {
      const { docs: projects = [] } = await unstable_cache(
        async () =>
          await payload.find({
            collection: 'projects',
            depth: 5,
            draft: false,
            limit: 1000,
          }),
        ['list', 'projects'],
        { tags: ['list-projects'] },
      )()

      return <ProjectsList projects={projects} title={block['title']} />
    }
  }
}

export default List
