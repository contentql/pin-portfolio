'use client'

import { Params } from '../types'
import { Media, StacksType } from '@payload-types'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

import { fadeIn } from '@/animation/framer'
import PageWrapper from '@/components/common/page-wrapper'
import Card from '@/components/ui/card'
import PageHeading from '@/components/ui/page-heading'
import { gradients } from '@/lib/card-hover-gradients'

interface StacksPage extends StacksType {
  params: Params
}
const Stacks: React.FC<StacksPage> = ({ params, ...block }) => {
  return (
    <PageWrapper>
      <PageHeading
        heading={block?.stacksHeading!}
        subHeading={block?.stacksDescription!}
      />

      {block?.technologies?.map((tech, i) => (
        <Card
          key={i}
          className='w-full'
          hoverGradient={gradients[i]}
          i={i + 0.25}
          title={
            <div className='flex items-center gap-1 font-medium'>
              <i className='bx bx-command text-lg md:text-2xl' />
              <span>{tech?.techHeading}</span>
            </div>
          }>
          <div className='flex flex-wrap gap-2 overflow-hidden'>
            {tech?.techStacks?.map((technology, j) => (
              <motion.div
                key={technology?.techName}
                className='flex items-center gap-3 rounded-xl border-2 bg-bg-light p-1.5 pr-5 dark:bg-bg-darker'
                style={{ borderColor: technology?.color! }}
                variants={fadeIn('left', 'tween', 50, 0.1 * j + i, 0.5)}
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}>
                <div className='rounded-md bg-white p-1 md:rounded-lg md:p-1.5'>
                  <Image
                    height={1000}
                    width={1000}
                    className='size-4 sm:size-5'
                    alt={(technology?.techImage as Media)?.alt! || 'Icon'}
                    src={(technology?.techImage as Media)?.url!}
                  />
                </div>
                <p className='text-sm font-medium tracking-wide md:text-lg'>
                  {technology?.techName}
                </p>
              </motion.div>
            ))}
          </div>
        </Card>
      ))}
    </PageWrapper>
  )
}

export default Stacks
