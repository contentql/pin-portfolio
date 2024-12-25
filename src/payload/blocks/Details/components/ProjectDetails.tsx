'use client'

import { Media, Project } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Fragment, useEffect, useState } from 'react'

import PageWrapper from '@/components/common/page-wrapper'
import AnimatedBorderCard from '@/components/ui/animated-border-card'
import Card from '@/components/ui/card'
import IconList from '@/components/ui/icon-list'
import PageHeading from '@/components/ui/page-heading'
import TagList from '@/components/ui/tag-list'
import { getRandomGradient } from '@/lib/card-hover-gradients'

const ProjectDetails = ({ projects }: { projects: Project[] }) => {
  const router = useRouter()
  const pathname = usePathname()
  const [loading, setLoading] = useState(true)
  const [project, setProject] = useState<Project | undefined>()
  const [prevProject, setPrevProject] = useState<{
    slug: string | null | undefined
    name: string | null | undefined
  }>()
  const [nextProject, setNextProject] = useState<{
    slug: string | null | undefined
    name: string | null | undefined
  }>()

  function getProjectData(projectSlug: string) {
    if (!projectSlug) return

    const project = projects.find(project => project?.slug === projectSlug)
    return project
  }

  function getPreviousAndNextProjectData(projectSlug: string) {
    if (!projectSlug) return

    const allProjectsLength = projects?.length

    const currentProjectIndex = projects.findIndex(
      project => project?.slug === projectSlug,
    )

    if (currentProjectIndex === -1) {
      return null
    }

    const prevIndex =
      currentProjectIndex === 0
        ? allProjectsLength - 1
        : currentProjectIndex - 1

    const nextIndex =
      currentProjectIndex + 1 === allProjectsLength
        ? 0
        : currentProjectIndex + 1

    return {
      prev: {
        slug: projects[prevIndex]?.slug,
        name: projects[prevIndex]?.projectName,
      },
      next: {
        slug: projects[nextIndex]?.slug,
        name: projects[nextIndex]?.projectName,
      },
    }
  }

  useEffect(() => {
    const projectSlug = pathname?.split('/')?.pop()
    const projectDetails = getProjectData(projectSlug!)
    if (projectDetails) {
      setProject(projectDetails)
      const response = getPreviousAndNextProjectData(projectSlug!)
      setPrevProject(response?.prev!)
      setNextProject(response?.next)
    }
    setLoading(false)
  }, [router, pathname])

  if (!project && !loading) {
    router.replace('/projects')
    return null
  }

  return (
    <PageWrapper>
      <div className='flex items-center justify-between gap-5'>
        <Link
          className='grid place-items-center rounded-lg bg-bg-lighter transition-opacity hover:opacity-75 dark:bg-bg-dark'
          href={'/project/' + prevProject?.slug}>
          <span className='sr-only'>Previous: {prevProject?.name}</span>
          <i className='bx bx-chevron-left bx-lg' />
        </Link>
        <PageHeading
          className='mb-0 uppercase md:mb-0'
          dot={false}
          heading={project?.projectName!}
        />
        <Link
          className='grid place-items-center rounded-lg bg-bg-lighter transition-opacity hover:opacity-75 dark:bg-bg-dark'
          href={'/project/' + nextProject?.slug}>
          <span className='sr-only'>Next: {nextProject?.name}</span>
          <i className='bx bx-chevron-right bx-lg' />
        </Link>
      </div>

      {project && (
        <AnimatedBorderCard>
          <Image
            alt={project?.projectName!}
            className='h-auto w-full object-cover'
            height={400}
            src={(project?.projectImage as Media)?.url!}
            style={{ borderColor: project?.color! }}
            width={800}
          />
        </AnimatedBorderCard>
      )}

      <Card hoverGradient={getRandomGradient()} i={1} title='Summary'>
        <div className='indent-3'>{project?.summary}</div>
      </Card>

      <Card hoverGradient={getRandomGradient()} i={2} title='Project Links'>
        <div className='grid grid-cols-[auto_1fr] items-center gap-2'>
          {project?.projectLinks?.map((link, i) => (
            <Fragment key={i}>
              <div className='flex h-full items-center gap-2 rounded-lg bg-bg-light px-3 py-1 dark:bg-bg-darker'>
                {/* <i className={`${getBoxIcon(iconId)} bx-sm pt-px`} /> */}
                <Image
                  src={(link?.serviceIcon as Media)?.url!}
                  alt='Icon'
                  className='bx-sm h-6 w-6 pt-px dark:invert'
                  width={24}
                  height={24}
                  priority // Optional: For optimizing loading
                />
                <p className='hidden font-medium capitalize sm:block'>
                  {link?.serviceName}
                </p>
              </div>
              <a
                className='line-clamp-1 flex w-fit max-w-full items-center gap-2 truncate rounded-lg bg-bg-light px-3 py-1 hover:text-primary dark:bg-bg-darker dark:hover:text-secondary'
                href={link?.projectServiceLink!}
                target='_blank'>
                <code className='line-clamp-1'>{link?.projectServiceLink}</code>
              </a>
            </Fragment>
          ))}
        </div>
      </Card>

      {project && (
        <Card hoverGradient={getRandomGradient()} i={3} title='Features'>
          <IconList
            animation
            boxIcon='bxs-magic-wand'
            data={
              project?.features
                ?.map(item => item?.feature)
                .filter((point): point is string => !!point) || []
            }
          />
        </Card>
      )}

      {project && (
        <Card hoverGradient={getRandomGradient()} i={4} title='Tech Stack'>
          <TagList
            animation
            data={
              project?.techStacks
                ?.map(item => item?.techStack)
                .filter((point): point is string => !!point) || []
            }
          />
        </Card>
      )}
    </PageWrapper>
  )
}

export default ProjectDetails
