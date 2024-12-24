import configPromise from '@payload-config'
import { Ora } from 'ora'
import { RequiredDataFromCollectionSlug, getPayload } from 'payload'

import { companyLogoImageData, experiencesPageData } from './data'

const payload = await getPayload({ config: configPromise })

const seed = async (spinner: Ora): Promise<any> => {
  try {
    spinner.start(`Started created experiences-page...`)
    const experiencesCompanyLogoSeedResult = await payload.create({
      collection: 'media',
      data: { alt: companyLogoImageData?.alt },
      filePath: companyLogoImageData?.filePath,
    })

    const experiencesResult: RequiredDataFromCollectionSlug<'pages'> = {
      ...experiencesPageData,
      layout: experiencesPageData?.layout?.map((block, idx) => {
        if (block?.blockType === 'Experience') {
          return {
            ...block,
            experiences: block?.experiences?.map(experience => ({
              ...experience,
              companyLogo: experiencesCompanyLogoSeedResult?.id,
            })),
          }
        }

        return block
      }),
    }
    const result = await payload.create({
      collection: 'pages',
      data: experiencesResult,
    })
    spinner.succeed(`Successfully created experiences-page`)
    return result
  } catch (error) {
    spinner.succeed(`Failed to create experiences-page`)
    throw error
  }
}

export default seed
