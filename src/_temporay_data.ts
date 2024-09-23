import {IGatsbyImageData} from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"

export interface Project {
  id: string
  title: string
  tags: Array<string>
  image: IGatsbyImageData
}

const getRandomImageData = (imageData: Array<IGatsbyImageData>): IGatsbyImageData => {
  return imageData[Math.floor(Math.random() * (imageData.length - 1))]
}

export const getProjects = (imageData: Array<IGatsbyImageData>): Array<Project> => ([
  {
    id: '4fb406a6-7b44-4045-a3dd-91245bf29192',
    title: 'A new website for Actes',
    image: getRandomImageData(imageData),
    tags: ['Design', 'Development', 'CMS', 'Copywriting'],
  },
  {
    id: 'a885b9bc-a049-4800-8cdf-efc629f82da9',
    title: 'A display management platform for TP Vision',
    image: getRandomImageData(imageData),
    tags: ['Design', 'Development', 'CMS', 'Copywriting'],
  },
])
