'use client'

import { Params } from '../types'
import { AboutType, Media } from '@payload-types'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { fadeIn, slideIn } from '@/animation/framer'
import PageWrapper from '@/components/common/page-wrapper'
import AnimatedBorderCard from '@/components/ui/animated-border-card'
import Button from '@/components/ui/button'
import Card from '@/components/ui/card'
import IconList from '@/components/ui/icon-list'
import PageHeading from '@/components/ui/page-heading'
import { CODING_PROFILES } from '@/constants/coding-profiles'
import { getRandomGradient, gradients } from '@/lib/card-hover-gradients'

interface AboutPage extends AboutType {
  params: Params
}
const About: React.FC<AboutPage> = ({ params, ...block }) => {
  return (
    <PageWrapper>
      <PageHeading
        heading={block?.aboutHeading!}
        subHeading={block?.aboutDescription!}
      />

      <div className='mb-6 flex w-full flex-col items-center gap-3'>
        <AnimatedBorderCard wrapperClassName='aspect-square min-w-[280px] max-w-[325px]'>
          <Image
            priority
            alt={(block?.profileImage as Media)?.alt || 'Profile Image'}
            className='object-cover'
            height={450}
            src={
              (block?.profileImage as Media)?.url ||
              '/images/me/avatar_alt.webp'
            }
            width={450}
          />
        </AnimatedBorderCard>
        <motion.p
          className='mb-4 text-center font-medium'
          variants={fadeIn('down', 'tween', 50, 0.25, 0.25)}>
          {block?.aboutYourSelf}
        </motion.p>
        <Button
          className='px-2'
          icon='bx-paper-plane'
          link={`/${block?.buttonPath}`}>
          {block?.button}
        </Button>
      </div>

      {block?.Details?.map((detail, i) => (
        <Card
          key={i}
          hoverGradient={gradients[i]}
          title={detail?.detailsTitle}
          titleClassName='capitalize'>
          <IconList
            animation
            boxIcon='bx-analyse'
            data={
              detail?.detailsPoints
                ?.map(item => item?.detailPoint) // Extract detailPoint
                .filter((point): point is string => !!point) || [] // Remove null/undefined and narrow type
            }
          />
        </Card>
      ))}

      <Card hoverGradient={getRandomGradient()} title='coding profiles'>
        <div className='flex flex-wrap gap-3'>
          {CODING_PROFILES?.map((profile, i) => (
            <Link key={i} href={'/_' + profile?.source} target='_blank'>
              <motion.div
                className='flex items-center gap-3 rounded-xl border-2 bg-bg-light p-1.5 pr-5 dark:bg-bg-darker'
                style={{ borderColor: profile.color }}
                variants={slideIn('left', 'tween', 50, 0.25 * (i + 1), 0.25)}
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}>
                <div className='rounded-lg bg-white p-1.5'>
                  <profile.Icon
                    className='size-4 sm:size-5'
                    color={profile.color}
                  />
                </div>
                <p className='text-sm font-medium tracking-wide md:text-lg'>
                  {profile?.name}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </Card>
    </PageWrapper>
  )
}

export default About