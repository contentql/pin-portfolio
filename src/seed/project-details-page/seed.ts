import configPromise from '@payload-config'
import { Page } from '@payload-types'
import { Ora } from 'ora'
import { getPayload } from 'payload'

import { projectDetailsPageData } from './data'

const payload = await getPayload({ config: configPromise })

const seed = async (spinner: Ora): Promise<Page> => {
  try {
    spinner.start(`Started created project-details-page...`)
    const { docs: pages } = await payload.find({
      collection: 'pages',
    })

    const pageId = pages?.find(page => page?.slug === 'projects')?.id
    const result = await payload.create({
      collection: 'pages',
      data: { ...projectDetailsPageData, parent: pageId },
    })

    spinner.succeed(`Successfully created project-details-page`)
    return result
  } catch (error) {
    spinner.succeed(`Failed to create project-details-page`)
    throw error
  }
}

export default seed
