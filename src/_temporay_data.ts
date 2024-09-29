import { IGatsbyImageData } from 'gatsby-plugin-image/dist/src/components/gatsby-image.browser'

export interface Project {
  id: string
  title: string
  tags: Array<string>
  image: IGatsbyImageData
}

export const getProjects = (
  imageData: Map<string, IGatsbyImageData>,
): Array<Project> => {
  const actesImage = imageData.get('project-actes')
  const tpvisionImage = imageData.get('project-tpvision')
  const healthySolutionsImage = imageData.get('project-healthysolutions')
  const vlaanderenImage = imageData.get('project-vlaanderen')

  return [
    actesImage === undefined
      ? null
      : {
          id: '4fb406a6-7b44-4045-a3dd-91245bf29192',
          title: 'A new website for Actes',
          image: actesImage,
          tags: ['Design', 'Development', 'CMS', 'Copywriting'],
        },
    tpvisionImage === undefined
      ? null
      : {
          id: 'a885b9bc-a049-4800-8cdf-efc629f82da9',
          title: 'A display management platform for TP Vision',
          image: tpvisionImage,
          tags: ['Design', 'Development', 'CMS', 'Copywriting'],
        },
    healthySolutionsImage === undefined
      ? null
      : {
          id: 'a885b9bc-a049-4800-8cdf-efc629f82da9',
          title: 'A corporate website for HealthySolutions',
          image: healthySolutionsImage,
          tags: ['Design', 'Development'],
        },
    vlaanderenImage === undefined
      ? null
      : {
          id: 'a885b9bc-a049-4800-8cdf-efc629f82da9',
          title:
            'Automated data consolidation for the new Vlaanderen.be website',
          image: vlaanderenImage,
          tags: ['Development'],
        },
  ].filter(entry => entry !== null) as Array<Project>
}
