import { createContext, PropsWithChildren, useContext } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import { Project, PropsWithClassName } from '../../types/types'
import Heading from './Heading'

const ProjectCardContext = createContext<Project | undefined>(undefined)

const useProjectCardContext = () => {
  const context = useContext(ProjectCardContext)
  if (context === undefined) {
    throw new Error(
      'Component must be used as a child of the ProjectCard component.',
    )
  }
  return context
}

type ProjectCardProps = PropsWithChildren<
  PropsWithClassName<{ project: Project }>
>

const ProjectCard = ({ project, children, className }: ProjectCardProps) => {
  return (
    <ProjectCardContext.Provider value={project}>
      <div className={className}>{children}</div>
    </ProjectCardContext.Provider>
  )
}

const ProjectCardImage = () => {
  const { image } = useProjectCardContext()
  return (
    <div className="mb-flovan-sm overflow-hidden rounded-default bg-highlight shadow-lg">
      <GatsbyImage
        image={image}
        alt="Project"
        sizes="(min-width: 768px) 500px, (min-width: 1024px) 600px, 100vw"
      />
    </div>
  )
}

const ProjectCardTitle = () => {
  const { title } = useProjectCardContext()
  return (
    <Heading level={3} className="mb-flovan-xs">
      {title}
    </Heading>
  )
}

const ProjectCardTags = () => {
  const { title, tags } = useProjectCardContext()
  return (
    <ul className="flex flex-wrap items-center gap-flovan-stroke">
      {tags.map((tag, index) => (
        <li key={`${title}_tag_${index}`} className="leading-none">
          <span className="border-px inline-flex rounded-full border px-2 py-0.5 text-flovan-xs uppercase tracking-wider">
            {tag}
          </span>
        </li>
      ))}
    </ul>
  )
}

ProjectCard.Image = ProjectCardImage
ProjectCard.Title = ProjectCardTitle
ProjectCard.Tags = ProjectCardTags

export default ProjectCard
