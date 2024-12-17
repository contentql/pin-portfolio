'use client'

import { Project } from '@payload-types'
import { useEffect } from 'react'

import PageWrapper from '@/components/common/page-wrapper'
import Button from '@/components/ui/button'
import PageHeading from '@/components/ui/page-heading'
import {
  MAJOR_PROJECT_HEADER,
  MINOR_PROJECT_HEADER,
} from '@/constants/projects'
import useOpenClose from '@/payload/hooks/use-open-close'

import ProjectCard from './project-card'

const ProjectsList = ({
  projects,
  title,
}: {
  projects: Project[]
  title: string | null | undefined
}) => {
  const { isOpen: isMinorProjectsOpen, open: openMinorProjects } =
    useOpenClose()

  const majorProjects = projects.filter(
    project => project?.projectType === 'major',
  )
  const minorProjects = projects.filter(
    project => project?.projectType === 'minor',
  )

  // Automatically open minor projects if no major projects exist
  useEffect(() => {
    if (!(majorProjects?.length >= 1)) {
      openMinorProjects()
    }
  }, [majorProjects, openMinorProjects])

  return (
    <PageWrapper>
      {majorProjects?.length >= 1 && (
        <>
          <PageHeading header={MAJOR_PROJECT_HEADER} />

          <div className='relative grid size-full gap-6 md:grid-cols-2'>
            {majorProjects?.map((project, i) => (
              <ProjectCard key={project.id} i={i} project={project} />
            ))}
          </div>
        </>
      )}

      {!isMinorProjectsOpen && minorProjects?.length >= 1 && (
        <Button
          icon='bx-plus'
          wrapperClassName='mx-auto mb-4 mt-16 w-fit rounded-full px-3'
          onClick={openMinorProjects}
        />
      )}

      {isMinorProjectsOpen && (
        <>
          <PageHeading className='mt-20' header={MINOR_PROJECT_HEADER} />

          <div className='relative grid size-full gap-6 md:grid-cols-2'>
            {minorProjects.map((project, i) => (
              <ProjectCard key={project.id} i={i} project={project} />
            ))}
          </div>
        </>
      )}
    </PageWrapper>
  )
}

export default ProjectsList
