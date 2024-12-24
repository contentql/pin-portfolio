import { TRPCError } from '@trpc/server'
import ora from 'ora'

import { seedAboutPage } from '@/seed/about-page'
import { seedContactPage } from '@/seed/contact-page'
import { seedExperiencesPage } from '@/seed/experiences-page'
import { seedHomePage } from '@/seed/home-page'
import { seedProjectDetailsPage } from '@/seed/project-details-page'
import { seedProjects } from '@/seed/projects'
import { seedProjectsPage } from '@/seed/projects-page'
import { seedSiteSettings } from '@/seed/site-settings'
import { seedStacksPage } from '@/seed/stacks-page'
import { publicProcedure, router } from '@/trpc'

export const seedRouter = router({
  runSeed: publicProcedure.mutation(async () => {
    const spinner = ora({
      text: 'Starting the seeding process...',
      color: 'cyan',
      spinner: 'dots',
    }).start()
    try {
      // Ensure that the seeding functions are called in the correct order.
      // The blogs seeding depends on tags and authors being seeded first.
      // Therefore, make sure to seed tags and authors before seeding blogs.

      await seedHomePage(spinner)
      await seedExperiencesPage(spinner)
      await seedAboutPage(spinner)
      await seedStacksPage(spinner)
      await seedContactPage(spinner)
      await seedProjects(spinner)
      await seedProjectsPage(spinner)
      await seedProjectDetailsPage(spinner)
      await seedSiteSettings(spinner)

      return { success: true }
    } catch (error: any) {
      console.error('Error seeding:', error)
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: error.message,
      })
    }
  }),
})
