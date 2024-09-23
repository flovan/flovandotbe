import {graphql} from "gatsby"
import {getImage} from "gatsby-plugin-image"

import {getProjects} from "../_temporay_data"
import Container from "../components/layout/Container"
import Layout from "../components/layout/Layout"
import Heading from "../components/ui/Heading"
import PointyLink from "../components/ui/PointyLink"
import ProjectCard from "../components/ui/ProjectCard"
import HeroVisual from '../images/illustration-digital-touch.svg'
import ClientsVisual from '../images/illustration-hands-hold-up-heart.svg'

const HomePage = (props) => {
  const projects = getProjects(props.data.photos.edges.map(edge => getImage(edge.node)))
  console.log(projects)
  return (
    <Layout>
      <Container>
        <div className="flex gap-flovan-md items-center">
          <div>
            <Heading level={1} className="visually-hidden">Flovan, your web development studio.</Heading>
            <p className="title-line text-flovan-lg font-normal">Yes, your business or product deserves a bespoke digital presence.</p>
            <p>Flovan is a web development studio specializing in designing and building websites and web applications, tailored to your specific needs.</p>
          </div>
          <HeroVisual />
        </div>
      </Container>
      <Container>
        <Heading level={2}>Featured work</Heading>
        <div className="grid grid-cols-2 gap-flovan-md">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard key={project.id} project={project} className={index % 2 === 0 ? 'scroll-slide-up' : 'scroll-slide-down'}>
              <ProjectCard.Image />
              <ProjectCard.Title />
              <ProjectCard.Tags />
            </ProjectCard>
          ))}
        </div>
      </Container>
      <Container>
        <Heading level={2}>Trusted by these client</Heading>
        <div className="relative grid grid-cols-3 gap-flovan-md">
          <p className="text-flovan-md font-light col-span-2">In The Pocket, Actes, Telenet, Bakermat Architectuur,  icapps, The Reference, Vlaamse Overheid</p>
          <ClientsVisual className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-auto" />
        </div>
      </Container>
      <Container>
        <Heading level={2}>Services</Heading>
        <div className="grid grid-cols-2 gap-flovan-md">
          <div>
            <div className="prose mb-flovan-base">
              <Heading level={3}>Web design &amp; development</Heading>
              <p>When you combine friendly, modern design with web development best practices, the result is a well-performing website that sells your business while you focus on your craft. A great <em>google&rsquo;ability</em>, fast loading times and standing out from your competition are all part of the deal.</p>
            </div>
            <PointyLink to="/info#web">How I design and develop</PointyLink>
          </div>
          <div>
            <div className="prose mb-flovan-base">
              <Heading level={3}>Web Applications</Heading>
              <p>Businesses often need help digitalizing their processes with custom web software. Building robust and reliable solutions is beneficial for both your customers and your business goals. Already got a team working on your digital products? No problem! I am open to long-term consultancy collaboration as well.</p>
            </div>
            <PointyLink to="/info#web-apps">How I build web apps</PointyLink>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export function Head() {
  return (
    <>
      <html lang="en" id="home-page" />
    </>
  )
}

export const query = graphql`
  query {
    photos: allFile(
      filter: { extension: { regex: "/(png)/" }, name: { regex: "/(project)/"} }
    ) {
      edges {
        node {
          id
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
