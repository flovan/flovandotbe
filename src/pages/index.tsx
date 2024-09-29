import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { IGatsbyImageData } from 'gatsby-plugin-image/dist/src/components/gatsby-image.browser'

import { getProjects } from '../_temporay_data'
import Blob from '../components/Blob'
import Container from '../components/layout/Container'
import Layout from '../components/layout/Layout'
import Heading from '../components/ui/Heading'
import PointyLink from '../components/ui/PointyLink'
import ProjectCard from '../components/ui/ProjectCard'
import HeroVisual from '../images/illustration-digital-touch.svg'
import ClientsVisual from '../images/illustration-hands-hold-up-heart.svg'

const HomePage = props => {
  const projects = getProjects(
    props.data.photos.edges.reduce<Map<string, IGatsbyImageData>>(
      (map, edge) => {
        map.set(edge.node.name, getImage(edge.node))
        return map
      },
      new Map(),
    ),
  )

  return (
    <Layout>
      <Container className="relative">
        <div className="relative z-10 flex flex-col items-center gap-flovan-sm lg:flex-row xl:gap-flovan-md">
          <div className="flex-1">
            <Heading level={1} className="title-line">
              Impactful web creations for businesses like yours.
            </Heading>
            <div className="prose">
              <p>
                Flovan is a web development studio specializing in designing and
                building websites and web applications, tailored to your
                specific needs.
              </p>
              <p>
                Come get some <em>www-wow</em> to tell your story, engage your
                audience, and drive your business forward.
              </p>
              <PointyLink to="/info">More on my services</PointyLink>
            </div>
          </div>
          <HeroVisual className="hidden flex-1 lg:block" />
        </div>
        <Blob
          id="home-hero-blob"
          className="absolute left-0 top-0 h-[900px] w-[900px] -translate-x-1/3 -translate-y-1/2"
        />
      </Container>
      <Container className="relative">
        <Heading level={2} className="relative z-10">
          The latest work I did
        </Heading>
        <div className="relative z-10 grid grid-cols-1 gap-flovan-sm md:grid-cols-2 lg:gap-flovan-md">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              className={
                index % 2 === 0 ? 'md:scroll-slide-up' : 'md:scroll-slide-down'
              }
            >
              <ProjectCard.Image />
              <ProjectCard.Title />
              <ProjectCard.Tags />
            </ProjectCard>
          ))}
        </div>
        <Blob
          id="projects-blob"
          className="absolute left-full top-0 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/3"
        />
      </Container>
      <Container className="relative">
        <div className="relative z-10">
          <Heading level={2}>I happily worked for these clients</Heading>
          <div className="relative grid grid-cols-1 gap-y-flovan-md md:grid-cols-3 md:gap-flovan-base lg:gap-flovan-md">
            <p className="relative z-10 col-span-2 text-flovan-md font-light">
              In The Pocket, Actes, Telenet, Bakermat Architectuur, icapps, The
              Reference, Vlaamse Overheid
            </p>
            <div className="flex justify-center md:absolute md:right-0 md:top-1/2 md:w-[calc((100%-8rem)/3)] md:-translate-y-1/2 lg:w-[calc((100%-12rem)/3)]">
              <ClientsVisual className="h-auto w-full max-w-80 md:max-w-max" />
              <Blob
                id="clients-visual-blob"
                className="absolute left-1/2 top-1/2 z-[-1] hidden h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 md:block"
              />
            </div>
          </div>
        </div>
        <Blob
          id="clients-blob"
          className="absolute right-full top-1/2 h-[900px] w-[900px] -translate-y-1/2 translate-x-1/2"
        />
      </Container>
      <Container>
        <Heading level={2}>Here&rsquo;s what I can do for you</Heading>
        <div className="grid grid-cols-1 gap-flovan-md lg:grid-cols-2">
          <div>
            <div className="prose">
              <Heading level={3}>Web design &amp; development</Heading>
              <p>
                When you combine friendly, modern design with web development
                best practices, the result is a well-performing website that
                sells your business while you focus on your craft. A great{' '}
                <em>google&rsquo;ability</em>, fast loading times and standing
                out from your competition are all part of the deal.
              </p>
              <PointyLink to="/info#web-design-development">
                More on websites
              </PointyLink>
            </div>
          </div>
          <div>
            <div className="prose">
              <Heading level={3}>Web Applications</Heading>
              <p>
                Businesses often need help digitalizing their processes with
                custom web software. Building robust and reliable solutions is
                beneficial for both your customers and your business goals.
                Already got a team working on your digital products? I am open
                to long-term consultancy collaboration as well.
              </p>
              <PointyLink to="/info#web-application">
                More on web apps
              </PointyLink>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    photos: allFile(
      filter: {
        extension: { regex: "/(png)/" }
        name: { regex: "/(project-)(actes)|(tpvision)/" }
      }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              width: 915
              backgroundColor: "transparent"
            )
            fluid(maxWidth: 915, quality: 80) {
              aspectRatio
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default HomePage
