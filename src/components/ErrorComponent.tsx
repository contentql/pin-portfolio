import Image from 'next/image'

import PageWrapper from './common/page-wrapper'
import Button from './ui/button'

const ErrorComponent = () => {
  return (
    <PageWrapper className='flex h-[calc(100vh-12rem)] flex-col items-center justify-center gap-10'>
      <Image
        alt='404'
        className='aspect-square w-2/3 max-w-xs rounded-2xl'
        src='/images/error.gif'
        height={1000}
        width={1000}
      />
      <div className='space-y-2 text-center'>
        <p className='text-5xl font-semibold md:text-6xl'>404.tsx</p>

        <p className='text-2xl font-medium opacity-75 md:text-3xl'>
          Maybe I have some new bugs to solve...
        </p>
      </div>

      <Button className='px-2' link='/'>
        Home
      </Button>
    </PageWrapper>
  )
}

export default ErrorComponent
