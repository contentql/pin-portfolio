import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { publicProcedure, router } from '@/trpc'

const payload = await getPayload({
  config: configPromise,
})
export const projectRouter = router({
  getAllProjects: publicProcedure.query(async () => {
    try {
      const { docs } = await payload.find({
        collection: 'projects',
        depth: 5,
        draft: false,
      })

      return docs
    } catch (error: any) {
      console.log(error)
      throw new Error(error.message)
    }
  }),
})
