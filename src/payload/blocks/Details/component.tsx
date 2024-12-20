import { Params } from '../types'
import configPromise from '@payload-config'
import { DetailsType } from '@payload-types'
import { unstable_cache } from 'next/cache'
import { getPayload } from 'payload'

import ProjectDetails from './components/ProjectDetails'

interface DetailsProps extends DetailsType {
  params: Params
}

const Details: React.FC<DetailsProps> = async ({ params, ...block }) => {
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

      return <ProjectDetails projects={projects} />
    }
  }
}

export default Details
