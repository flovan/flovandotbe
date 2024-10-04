import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { IGatsbyImageData } from 'gatsby-plugin-image/dist/src/components/gatsby-image.browser'

import { getProjects } from '../_temporay_data'
import Blob from '../components/Blob'
import Container from '../components/layout/Container'
import Layout from '../components/layout/Layout'
import SEO from '../components/Seo'
import Heading from '../components/ui/Heading'
import PointyLink from '../components/ui/PointyLink'
import ProjectCard from '../components/ui/ProjectCard'
import { ReactComponent as HeroVisual } from '../images/illustration-digital-touch.svg'
import { ReactComponent as ClientsVisual } from '../images/illustration-hands-hold-up-heart.svg'

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
        <div className="relative z-10 grid grid-cols-1 items-center gap-flovan-lg md:gap-flovan-base lg:grid-cols-2 lg:gap-flovan-md">
          <div>
            <div className="prose mb-flovan-base flex flex-col">
              <Heading level={1}>
                <span className="font-semibold">D*mn good web creations</span>{' '}
                for businesses like yours.
              </Heading>
              <HeroVisual className="max-w-96 self-center sm:max-w-[36rem] lg:hidden" />
              <p>
                Flovan is a web development studio specializing in designing and
                building websites and web applications, tailored to your
                specific needs.
              </p>
              <p>
                Come get some <em>www-wow</em> to tell your story, engage your
                audience, and drive your business forward.
              </p>
            </div>
            <PointyLink to="/info">More on my services</PointyLink>
          </div>
          <HeroVisual className="hidden h-auto w-full lg:block" />
        </div>
        <Blob
          id="home-hero-blob"
          className="scale-y-130 scale-x-115 absolute left-0 top-0 h-full w-full"
          type="rectangle"
        />
      </Container>
      <Container className="relative z-10 grid grid-cols-1 items-center gap-flovan-lg md:grid-cols-2 md:gap-flovan-base lg:gap-flovan-md">
        <div>
          <Heading level={2} className="title-line">
            In a nutshell
          </Heading>
          <div className="prose mb-flovan-base">
            <Heading level={3}>Web design &amp; development</Heading>
            <p>
              Friendly, modern designs combined with web development best
              practices, rolled up into a well-performing website that sells
              your business while you focus on your craft. A great{' '}
              <em>google&rsquo;ability</em>, fast loading times and standing out
              from your competition are all part of the deal.
            </p>
          </div>
          <div className="prose mb-flovan-base">
            <Heading level={3}>Web Applications</Heading>
            <p>
              Businesses often need help digitalizing their processes with
              custom web software. Building robust and reliable solutions is
              beneficial for both your customers and your business goals.
              Already got a team working on your digital products? I am open to
              long-term consultancy collaboration as well.
            </p>
          </div>
          <PointyLink to="/info">Continue reading</PointyLink>
        </div>
        <div className="relative flex flex-col text-center">
          <Heading level={2} className="mb-flovan-base">
            I happily worked for these clients
          </Heading>
          <p className="relative z-10 mb-flovan-base text-flovan-md font-light">
            In The Pocket, Actes, Telenet, Bakermat Architectuur, icapps, The
            Reference, Vlaamse Overheid
          </p>
          <ClientsVisual className="h-auto w-full max-w-80 self-center" />
          <Blob
            id="clients-visual-blob"
            className="absolute left-1/2 top-1/2 z-[-1] h-[700px] w-[600px] -translate-x-1/2 -translate-y-1/2"
            outline
          />
        </div>
      </Container>
      <Container className="relative">
        <Heading level={2} className="title-line relative z-10">
          The latest work I did
        </Heading>
        <div className="relative z-10 grid grid-cols-1 gap-y-flovan-base md:grid-cols-2 md:gap-flovan-sm lg:gap-flovan-md">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              className={
                index % 2 === 0 ? 'md:scroll-slide-down' : 'md:scroll-slide-up'
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
          className="absolute left-0 top-0 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/3"
        />
      </Container>
    </Layout>
  )
}

export const Head = () => <SEO />

export const query = graphql`
  query IndexPage {
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

    #    locales: allLocale(
    #      filter: { ns: { in: ["common", "index"] }, language: { eq: $language } }
    #    ) {
    #      edges {
    #        node {
    #          ns
    #          data
    #          language
    #        }
    #      }
    #    }
  }
`

export default HomePage
