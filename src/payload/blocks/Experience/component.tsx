'use client'

import { Params } from '../types'
import { ExperienceType, Media } from '@payload-types'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

import { fadeIn } from '@/animation/framer'
import PageWrapper from '@/components/common/page-wrapper'
import Card from '@/components/ui/card'
import IconList from '@/components/ui/icon-list'
import PageHeading from '@/components/ui/page-heading'
import TagList from '@/components/ui/tag-list'
import { getRandomGradient, gradients } from '@/lib/card-hover-gradients'

interface ExperiencesPage extends ExperienceType {
  params: Params
}
const Experience: React.FC<ExperiencesPage> = ({ params, ...block }) => {
  return (
    <PageWrapper>
      <PageHeading
        heading={block?.experiencesHeading!}
        subHeading={block?.achievementsDescription!}
      />

      <div className='flex w-full flex-col gap-4'>
        {block?.experiences?.map((experience, i) => (
          <Card
            key={i}
            className='py-0 sm:pt-0'
            hoverGradient={gradients[i]}
            i={i}
            title={`${experience?.designation} (at) ${experience?.companyName}`}>
            <div className='flex flex-col gap-6'>
              <div className='flex w-[calc(100%+24px)] -translate-x-3 flex-wrap gap-2 border-b-2 bg-bg-lighter p-4 pt-[calc(1.125rem+0.75rem)] dark:bg-bg-dark sm:pt-[calc(1.375rem+0.75rem)]'>
                <motion.div
                  className='flex items-center gap-2 rounded-full bg-bg-darker/10 px-4 py-1.5 pl-2 dark:bg-bg-light/10'
                  variants={fadeIn('left', 'spring', 50, 0.25, 0.25)}>
                  <p className='grid size-8 place-items-center overflow-hidden rounded-full bg-white'>
                    <i className='bx bx-map text-xl text-primary sm:text-2xl' />
                  </p>
                  <span>{experience?.location}</span>
                </motion.div>

                <motion.div
                  className='flex items-center gap-2 rounded-full bg-bg-darker/10 px-4 py-1.5 pl-2 dark:bg-bg-light/10'
                  variants={fadeIn('left', 'spring', 50, 0.5, 0.25)}>
                  <p className='grid size-8 place-items-center overflow-hidden rounded-full bg-white'>
                    <i className='bx bx-time text-xl text-primary sm:text-2xl' />
                  </p>
                  <span>{experience?.tenure}</span>
                </motion.div>

                <motion.a
                  className='group flex items-center gap-3 rounded-full bg-bg-darker/10 px-4 py-1.5 pl-2 dark:bg-bg-light/10'
                  href={experience?.companyWebsiteUrl!}
                  target='_blank'
                  variants={fadeIn('left', 'spring', 50, 0.75, 0.25)}>
                  <p className='grid size-8 place-items-center overflow-hidden rounded-full bg-white'>
                    <Image
                      alt={
                        (experience?.companyLogo as Media)?.alt ||
                        'Company Logo'
                      }
                      className='size-6'
                      height={50}
                      src={(experience?.companyLogo as Media)?.url!}
                      width={50}
                    />
                  </p>
                  <span className='group-hover:text-primary dark:group-hover:text-secondary'>
                    {experience?.companyName}
                  </span>
                </motion.a>
              </div>

              <IconList
                animation
                boxIcon='bx-bulb'
                data={
                  experience?.aboutYourWork
                    ?.map(item => item?.workDescription)
                    .filter((point): point is string => !!point) || []
                }
              />

              <TagList
                animation
                data={
                  experience?.techStack
                    ?.map(item => item?.techStackName)
                    .filter((point): point is string => !!point) || []
                }
                wrapperClassName='flex w-[calc(100%+24px)] -translate-x-3 flex-wrap gap-2 border-t-2 bg-bg-lighter p-4 dark:bg-bg-dark'
              />
            </div>
          </Card>
        ))}
      </div>

      <PageHeading
        className='mt-20'
        heading={block?.achievementsHeading!}
        subHeading={block?.achievementsDescription!}
      />

      <Card hoverGradient={getRandomGradient()} title='achievements'>
        <IconList
          animation
          boxIcon='bx-trophy'
          data={
            block?.achievements
              ?.map(item => item?.achievement)
              .filter((point): point is string => !!point) || []
          }
        />
      </Card>
    </PageWrapper>
  )
}

export default Experience
