import configPromise from '@payload-config'
import { Ora } from 'ora'
import { RequiredDataFromCollectionSlug, getPayload } from 'payload'

import { StacksTechnologiesImageData, stacksPageData } from './data'

const payload = await getPayload({ config: configPromise })

const seed = async (spinner: Ora): Promise<any> => {
  try {
    spinner.start(`Started creating stacks-page...`)

    const stacksLanguagesImagesSeedResult = await Promise.allSettled(
      StacksTechnologiesImageData.map(image =>
        payload.create({
          collection: 'media',
          data: {
            alt: image.alt,
          },
          filePath: image.filePath,
        }),
      ),
    )

    let imageIndex = 0

    const stacksResult: RequiredDataFromCollectionSlug<'pages'> = {
      ...stacksPageData,
      layout: stacksPageData?.layout?.map(block => {
        if (block?.blockType === 'Stacks') {
          return {
            ...block,
            technologies: block.technologies?.map(technology => ({
              ...technology,
              techStacks: technology.techStacks?.map(techStack => {
                const imageResult = stacksLanguagesImagesSeedResult[imageIndex]

                imageIndex++

                if (imageResult.status === 'fulfilled') {
                  return { ...techStack, techImage: imageResult.value.id }
                }

                return techStack
              }),
            })),
          }
        }

        return block
      }),
    }

    const result = await payload.create({
      collection: 'pages',
      data: stacksResult,
    })

    spinner.succeed(`Successfully created stacks-page`)
    return result
  } catch (error) {
    spinner.fail(`Failed to create stacks-page`)
    throw error
  }
}

export default seed
