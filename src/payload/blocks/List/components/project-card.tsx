'use client'

import { Media, Project } from '@payload-types'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { fadeIn } from '@/animation/framer'

const ProjectCard = ({ i, project }: { i: number; project: Project }) => {
  return (
    <motion.div
      key={i}
      className='group relative grid aspect-[1920/940] w-full place-items-center overflow-hidden rounded-xl border-2 drop-shadow-md'
      style={{
        background: `linear-gradient(to bottom right, ${project?.color}, transparent, transparent)`,
        borderColor: project?.color!,
      }}
      variants={fadeIn('left', 'tween', 50, 0.25 * (i + 1), 0.5)}>
      <div className='absolute -bottom-10 flex w-[90%] flex-col items-center justify-center transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:w-full'>
        <p className='pb-1 text-xl font-semibold uppercase tracking-wider text-black transition-all duration-700 ease-in-out group-hover:-translate-y-10 dark:text-white sm:text-2xl'>
          {project?.projectName}
        </p>
        <Image
          alt={(project?.projectImage as Media)?.alt || project?.projectName!}
          className='h-44 w-full rounded-lg object-cover object-top drop-shadow-md'
          height={200}
          src={(project?.projectImage as Media)?.url!}
          width={350}
        />
      </div>
      <Link
        className='absolute mb-5 flex translate-y-16 items-center gap-1 self-end rounded-lg px-3 py-1 text-lg font-medium tracking-wide text-black drop-shadow-lg transition-all delay-200 duration-500 ease-in-out hover:!bg-bg-lighter group-hover:translate-y-0 dark:hover:!bg-bg-lighter'
        href={'/project/' + project?.slug}
        style={{ backgroundColor: project?.color! }}>
        <i className='bx bx-cube-alt text-2xl' />
        See Details
      </Link>
    </motion.div>
  )
}

export default ProjectCard
