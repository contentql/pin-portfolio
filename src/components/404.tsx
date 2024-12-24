'use client'

import { usePathname } from 'next/navigation'

import { trpc } from '@/trpc/client'

import ErrorComponent from './ErrorComponent'
import Button from './common/Button'

const PageNotFound: React.FC = () => {
  const pathname = usePathname()

  const { mutate: runSeedMutation, isPending } = trpc.seed.runSeed.useMutation({
    onSuccess: () => {
      window.location.reload()
    },
  })

  if (pathname === '/') {
    return (
      <section className='flex min-h-screen flex-col items-center justify-center'>
        <h1 className='text-4xl font-semibold'>Welcome to Portfolio Theme</h1>

        <p className='my-4 p-2 text-center'>
          {isPending
            ? '⏰please hold-on this process might take some time'
            : 'Click below👇 to instantly load demo content-blogs, authors, tags, and pages'}
        </p>

        <Button
          isLoading={isPending}
          disabled={isPending}
          onClick={() => {
            runSeedMutation()
          }}>
          Load Demo Data
        </Button>
      </section>
    )
  }

  return <ErrorComponent />
}

export default PageNotFound
