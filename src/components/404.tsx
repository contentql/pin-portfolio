'use client'

import { usePathname } from 'next/navigation'

import { trpc } from '@/trpc/client'

import ErrorComponent from './ErrorComponent'
import Spinner from './common/Spinner'
import Button from './ui/button'

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
            : 'Click below👇 to instantly load demo projects and pages'}
        </p>

        <Button
          disabled={isPending}
          onClick={() => {
            runSeedMutation()
          }}>
          {isPending ? <Spinner /> : 'Load Demo Data'}
        </Button>
      </section>
    )
  }

  return <ErrorComponent />
}

export default PageNotFound
