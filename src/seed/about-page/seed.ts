import configPromise from '@payload-config'
import { Ora } from 'ora'
import { RequiredDataFromCollectionSlug, getPayload } from 'payload'

import { aboutPageData, aboutPageImageData } from './data'

const payload = await getPayload({ config: configPromise })

const seed = async (spinner: Ora): Promise<any> => {
  try {
    spinner.start(`Started created home-page...`)
    const aboutPageImageSeedResult = await Promise.allSettled(
      aboutPageImageData.map(image =>
        payload.create({
          collection: 'media',
          data: {
            alt: image.alt,
          },
          filePath: image.filePath,
        }),
      ),
    )

    const formattedImagesResult = aboutPageImageSeedResult
      .map(result =>
        result.status === 'fulfilled'
          ? result.value
          : `Failed to seed: ${result.reason}`,
      )
      .filter(result => typeof result !== 'string')

    let imageIndex = 0

    const aboutResult: RequiredDataFromCollectionSlug<'pages'> = {
      ...aboutPageData,
      layout: aboutPageData?.layout?.map((block, idx) => {
        if (block?.blockType === 'About') {
          return {
            ...block,
            profileImage: formattedImagesResult.at(imageIndex)?.id,
            codeProfiles: block?.codeProfiles?.map(codeProfileData => ({
              ...codeProfileData,
              codeProfile: codeProfileData?.codeProfile?.map(profile => {
                imageIndex++
                return {
                  ...profile,
                  codeProfileImage: formattedImagesResult.at(imageIndex)?.id,
                }
              }),
            })),
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
