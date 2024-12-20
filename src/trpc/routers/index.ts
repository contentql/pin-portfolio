import { router } from '@/trpc'
import { pageRouter } from '@/trpc/routers/page'
import { siteSettingsRouter } from '@/trpc/routers/site-settings'

import { formRouter } from './form'
import { projectRouter } from './project'
import { searchRouter } from './search'
import { userRouter } from './user/user-route'

export const appRouter = router({
  page: pageRouter,
  siteSettings: siteSettingsRouter,
  user: userRouter,
  project: projectRouter,
  // this is used for global search
  search: searchRouter,
  form: formRouter,
})

export type AppRouter = typeof appRouter
