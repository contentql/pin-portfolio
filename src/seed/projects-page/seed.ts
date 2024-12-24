import configPromise from '@payload-config'
import { Page } from '@payload-types'
import { Ora } from 'ora'
import { getPayload } from 'payload'

import { projectsPageData } from './data'

const payload = await getPayload({ config: configPromise })

const seed = async (spinner: Ora): Promise<Page> => {
  try {
    spinner.start(`Started created projects-page...`)
    const result = await payload.create({
      collection: 'pages',
      data: projectsPageData,
    })

    spinner.succeed(`Started created project-page...`)
    return result
  } catch (error) {
    spinner.succeed(`Failed to create project-page`)
    throw error
  }
}

export default seed
