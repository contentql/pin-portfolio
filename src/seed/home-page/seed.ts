import configPromise from '@payload-config'
import { Ora } from 'ora'
import { RequiredDataFromCollectionSlug, getPayload } from 'payload'

import { homePageData, homePageProfileImageData } from './data'

const payload = await getPayload({ config: configPromise })

const seed = async (spinner: Ora): Promise<any> => {
  try {
    spinner.start(`Started created home-page...`)
    const homeHeroProfileSeedResult = await payload.create({
      collection: 'media',
      data: { alt: homePageProfileImageData?.alt },
      filePath: homePageProfileImageData?.filePath,
    })

    const homeResult: RequiredDataFromCollectionSlug<'pages'> = {
      ...homePageData,
      layout: homePageData?.layout?.map((block, idx) => {
        if (block?.blockType === 'Home') {
          return {
            ...block,
            profilePicture: homeHeroProfileSeedResult.id,
          }
        }

        return block
      }),
    }
    const result = await payload.create({
      collection: 'pages',
      data: homeResult,
    })
    spinner.succeed(`Successfully created home-page`)
    return result
  } catch (error) {
    spinner.succeed(`Failed to create home-page`)
    throw error
  }
}

export default seed
