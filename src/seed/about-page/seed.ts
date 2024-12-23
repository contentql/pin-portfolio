import configPromise from '@payload-config'
import { Ora } from 'ora'
import { RequiredDataFromCollectionSlug, getPayload } from 'payload'

import { aboutPageData, aboutPageProfileImageData } from './data'

const payload = await getPayload({ config: configPromise })

const seed = async (spinner: Ora): Promise<any> => {
  try {
    spinner.start(`Started created home-page...`)
    const aboutHeroProfileSeedResult = await payload.create({
      collection: 'media',
      data: { alt: aboutPageProfileImageData?.alt },
      filePath: aboutPageProfileImageData?.filePath,
    })

    const aboutResult: RequiredDataFromCollectionSlug<'pages'> = {
      ...aboutPageData,
      layout: aboutPageData?.layout?.map((block, idx) => {
        if (block?.blockType === 'About') {
          return {
            ...block,
            profilePicture: aboutHeroProfileSeedResult.id,
          }
        }

        return block
      }),
    }
    const result = await payload.create({
      collection: 'pages',
      data: aboutResult,
    })
    spinner.succeed(`Successfully created about-page`)
    return result
  } catch (error) {
    spinner.succeed(`Failed to create about-page`)
    throw error
  }
}

export default seed
