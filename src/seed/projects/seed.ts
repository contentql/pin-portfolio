import configPromise from '@payload-config'
import { Project } from '@payload-types'
import { Ora } from 'ora'
import { getPayload } from 'payload'

import { ProjectDataType, projectsData, projectsImagesData } from './data'

const payload = await getPayload({ config: configPromise })

const seed = async (spinner: Ora): Promise<(string | Project)[]> => {
  try {
    spinner.start(`Started created projects...`)

    const imagesResult = await Promise.allSettled(
      projectsImagesData.map(projectImageData =>
        payload.create({
          collection: 'media',
          data: {
            alt: projectImageData.alt,
          },
          filePath: projectImageData.filePath,
        }),
      ),
    )

    const formattedImagesResult = imagesResult
      .map(result =>
        result.status === 'fulfilled'
          ? result.value
          : `Failed to seed: ${result.reason}`,
      )
      .filter(result => typeof result !== 'string')

    let imageIndex = 0

    const formattedProjectsData: ProjectDataType[] = projectsData.map(
      project => {
        const formattedProject = {
          ...project,
          projectImage: formattedImagesResult.at(imageIndex)?.id,
          projectLinks: project.projectLinks?.map(projectLink => {
            imageIndex++
            return {
              ...projectLink,
              serviceIcon: formattedImagesResult.at(imageIndex)?.id,
            }
          }),
        }
        imageIndex++
        return formattedProject
      },
    )

    const results = await Promise.allSettled(
      formattedProjectsData.map(projectData =>
        payload.create({
          collection: 'projects',
          data: projectData,
        }),
      ),
    )

    const formattedResults = results.map(result =>
      result.status === 'fulfilled'
        ? result.value
        : `Failed to seed: ${result.reason}`,
    )
    spinner.start(`Successfully created projects.`)
    return formattedResults
  } catch (error) {
    spinner.succeed(`Failed to create projects`)
    throw error
  }
}

export default seed
