import { Project } from '@payload-types'
import { revalidateTag } from 'next/cache'
import type { CollectionAfterChangeHook } from 'payload'

export const revalidateProjects: CollectionAfterChangeHook<Project> = async ({
  doc,
}) => {
  // if page is published & their is no dynamic block directly revalidating the page
  if (doc._status === 'published') {
    revalidateTag('list-projects')
    console.log(`list-projects at ${new Date().getTime()}`)
  }
}
