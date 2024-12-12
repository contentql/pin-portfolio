'use client'

import { Params } from '../types'
import { HomeType, Media } from '@payload-types'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { fadeIn } from '@/animation/framer'
import PageWrapper from '@/components/common/page-wrapper'
import AnimatedBorderCard from '@/components/ui/animated-border-card'
import Button from '@/components/ui/button'
import SocialIcon from '@/components/ui/social-icon'
import { METADATA } from '@/constants/meta'
import { SOCIALS } from '@/constants/socials'
import { cn } from '@/utils/functions'

interface HomeProps extends HomeType {
  params: Params
}

const Home: React.FC<HomeProps> = ({ params, ...block }) => {
  return (
    <PageWrapper className={cn('relative mt-5 items-center pb-5 md:mt-0')}>
      <AnimatedBorderCard wrapperClassName='aspect-square w-1/2 min-w-[280px] max-w-[325px]'>
        <div className='overflow-hidden'>
          <Image
            priority
            alt={(block?.profilePicture as Media)?.alt || 'Profile'}
            className='object-scale-down'
            height={450}
            // src={PROFILE_IMG}
            src={(block?.profilePicture as Media)?.url!}
            width={450}
          />
        </div>
      </AnimatedBorderCard>
      <div className='space-y-1.5 text-center'>
        <motion.h3
          className='text-3xl font-bold tracking-wider md:text-4xl 2xl:text-5xl'
          variants={fadeIn('up', 'tween', 25, 0.1, 0.5)}>
          {block?.greetText}
        </motion.h3>
        <motion.h1
          className='animate-text bg-gradient-to-tr from-primary to-secondary bg-clip-text text-4xl font-bold tracking-wider text-transparent drop-shadow-lg md:text-6xl 2xl:text-7xl'
          variants={fadeIn('up', 'tween', 25, 0.1, 0.5)}>
          {block?.name}
        </motion.h1>
        <motion.h5
          className='font-semibold tracking-wide lg:text-xl 2xl:text-2xl'
          variants={fadeIn('up', 'tween', 25, 0.1, 0.5)}>
          {'{'} {block?.description} {'}'}
        </motion.h5>
      </div>

      <div className='mb-2 space-x-2 sm:space-x-4'>
        {block?.socialLinks?.map((socialLink, index) => {
          const social = SOCIALS.find(s => s.iconId === socialLink?.socialIcon) // Find the matching social object
          return (
            social && ( // Ensure the social object exists before rendering
              <SocialIcon
                key={index}
                index={index}
                social={social}
                path={socialLink?.socialIconLink}
              />
            )
          )
        })}
      </div>

      <Button
        className='px-2'
        icon='bx-paper-plane'
        link={`/${block?.buttonPath}`}>
        {block?.button}
      </Button>

      <span className='sr-only'>{METADATA.description}</span>
    </PageWrapper>
  )
}

export default Home
