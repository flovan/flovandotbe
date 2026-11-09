import { graphql, HeadProps, PageProps } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import Blob from '../components/AsyncBlob'
import FlovanHead from '../components/Head'
import Container from '../components/layout/Container'
import Layout from '../components/layout/Layout'
import Details from '../components/ui/Details'
import Heading from '../components/ui/Heading'
import PointyLink from '../components/ui/PointyLink'
import ProjectCard from '../components/ui/ProjectCard'
import { ReactComponent as CommandmentsVisual } from '../images/illustration-commandments.svg'
import { ReactComponent as DesignDevelopmentVisual } from '../images/illustration-design-development.svg'
import { Project } from '../types/types'

const InfoPage = (props: PageProps<Queries.InfoPageQuery>) => {
  const projects = [
    {
      title: 'A corporate website for HealthySolutions',
      image: getImage(props.data.healthySolutionsImage!.childImageSharp),
      tags: ['Design', 'Development', 'CMS', 'Copywriting'],
    },
    {
      title: 'Automated data consolidation for the new Vlaanderen.be website',
      image: getImage(props.data.vlaanderenImage!.childImageSharp),
      tags: ['Development', 'AWS', 'IoT'],
    },
  ] as Array<Project>

  return (
    <Layout>
      <Container className="relative">
        <div className="relative z-10 grid grid-cols-1 items-center gap-y-flovan-md lg:grid-cols-3 lg:gap-flovan-md xl:grid-cols-2">
          <div className="md:col-span-2 xl:col-span-1">
            <Heading level={1} className="mb-[1em]">
              Meaningful web products that are conversion-focused,
              brand-accurate and people-friendly.
            </Heading>
            <p>
              Hi, I’m <strong>Florian</strong>, and I can help you with{' '}
              <em>www-what</em> you need. Quite the lame pun, but let’s
              continue. Basic <strong>web presence</strong>, a{' '}
              <strong>portfolio</strong> to show off your work, a{' '}
              <strong>store</strong> to sell your goods on, or a complex
              bespoke <strong>web application</strong> for your business
              processes or digital product. The whole lot.
            </p>
          </div>
          <div className="relative flex justify-center self-stretch">
            <DesignDevelopmentVisual className="h-auto w-full max-w-96" />
            <Blob
              id="design-development-blob"
              className="absolute left-1/2 top-1/2 z-[-1] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <Blob
          id="info-hero-blob"
          className="absolute left-0 top-0 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/3"
        />
      </Container>
      <Container className="relative">
        <div className="relative z-10 grid grid-cols-1 gap-y-flovan-base lg:grid-cols-3 lg:gap-flovan-base xl:gap-flovan-md">
          <div>
            <Heading level={2} className="title-line relative z-10">
              End-to-end service
            </Heading>
            <p>
              If you need <em>something</em> for the web, let’s have a chat!
              I’ll give it the looks and make it do its thing.
            </p>
          </div>
          <div className="flex flex-col gap-flovan-xs lg:col-span-2">
            <Details
              title={
                <>
                  <span className="font-bold">Design:</span> making it pretty
                </>
              }
              className="-mb-px"
            >
              <p>
                Timeless and thoughtful <strong>design</strong> goes hand in
                hand with a great <strong>user experience</strong>.
                Purpose-driven, not just adding a cursor effect because we can.
              </p>
              <p>
                We’ll create something that is a reflection of yourself or your
                business. Intentional and refined.
              </p>
              <p>
                I can also help out with <strong>branding</strong> needs—a logo,
                a new font, or some fresh and dazzling colors. If you ran out of
                free Vistaprint business cards or need some other{' '}
                <strong>print work</strong> created, let me know.
              </p>
            </Details>
            <Details
              title={
                <>
                  <span className="font-bold">Development:</span> making it work
                </>
              }
              className="-mb-px"
            >
              <p>
                We’ve made it look the part, but you don’t just want a JPEG that
                opens up a new email when you click it. Let’s make sure you can
                be <strong>found online</strong>, by people and AI alike. And
                let’s have it so you can{' '}
                <strong>manage your own content</strong>, or{' '}
                <strong>sell your products</strong>.
              </p>
              <p>
                Or perhaps your business has outgrown stringing together Excel
                sheets on a shared Dropbox folder. It needs a{' '}
                <strong>custom tool</strong> that calculates stock, prints
                tickets, sends emails or integrates with your bookkeeping
                software? Sounds pretty good right?
              </p>
            </Details>
            <Details
              title={
                <>
                  <span className="font-bold">Content:</span> making it speak
                </>
              }
            >
              <p>
                Having a functional and good looking product only gets you so
                far. Your potential customers or users also need{' '}
                <strong>something to read and look at</strong>, something that
                inspires or informs them.
              </p>
              <p>
                While I clearly wrote my own copy here, I work together closely
                with several talented freelancers that deliver top-notch{' '}
                <strong>photography</strong>, <strong>videography</strong>{' '}
                and <strong>copywriting</strong>. And it’s a small world, so
                any other requirements can be looked into.
              </p>
            </Details>
          </div>
        </div>
      </Container>
      <Container className="relative">
        <Heading level={2} className="title-line">
          Working with me
        </Heading>
        <div className="relative z-10 grid grid-cols-1 gap-flovan-base md:grid-cols-2 lg:gap-flovan-md xl:grid-cols-3">
          <div className="prose">
            <Heading level={3}>Ad hoc & consultancy</Heading>
            <p>
              For any form of project, I prefer working on a{' '}
              <strong>time and materials basis</strong> for an hourly rate.
              Fixed-price projects are of course up for discussion. I have
              several years of experience <strong>working long-term</strong> on
              both young and mature digital projects in an agile environment.
            </p>
          </div>
          <div className="prose">
            <Heading level={3}>Shaped, not slopped</Heading>
            <p>
              Everyone’s become <em>that nephew that knows IT</em> these days,
              but the output quality hasn’t improved, only the threshold to get
              there. Try to polish slop, and it’ll still be slop. I employ an{' '}
              <strong>AI-driven way of working</strong>, and produce qualitative
              output through thoughtful prompting, backed by years of
              experience.
            </p>
          </div>
          <div className="relative flex flex-col items-center justify-center">
            <Heading
              level={1}
              as="p"
              className="mb-flovan-base text-center"
            >
              Convinced?
              <br />
              Tell me about your ideas.
            </Heading>
            <PointyLink to="/contact">Contact me</PointyLink>
            <Blob
              id="info-cta-blob"
              className="absolute left-1/2 top-1/2 z-[-1] h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2"
              outline
            />
          </div>
        </div>
        <Blob
          id="info-questions-blob"
          className="absolute right-full top-1/2 -z-[1] h-[900px] w-[900px] -translate-y-1/2 translate-x-1/2"
        />
      </Container>
      <Container className="relative grid grid-cols-1 items-center gap-y-flovan-base md:grid-cols-2 md:gap-flovan-base lg:grid-cols-3 lg:gap-flovan-md">
        <div className="relative flex justify-center">
          <CommandmentsVisual className="h-auto w-full max-w-96" />
          <Blob
            id="commandments-blob"
            className="absolute left-1/2 top-1/2 z-[-1] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="relative z-10 lg:col-span-2">
          <Heading level={2} className="title-line relative z-10">
            Ethics and values
          </Heading>
          <div className="prose">
            <Heading level={3}>
              I build for an honest and friendly web, so some lines will not be
              crossed. That is why I will not…
            </Heading>
            <ul>
              <li>
                Ignore mobile devices or cut corners when it comes to
                accessibility.
              </li>
              <li>
                Get involved in projects relating to gambling, crypto, NFT’s or
                Web3.
              </li>
              <li>
                Design or apply deceptive techniques or “dark patterns” to sell
                your product or subscribe visitors to your services.
              </li>
              <li>
                Advise the use of privacy-invasive analytics or tracking pixels.
              </li>
              <li>Implement on-by-default cookies.</li>
            </ul>
          </div>
        </div>
      </Container>
      <Container className="relative">
        <Heading level={2} className="title-line relative z-10">
          Some other work of mine
        </Heading>
        <div className="relative z-10 grid grid-cols-1 gap-y-flovan-base md:grid-cols-2 md:gap-flovan-sm lg:gap-flovan-md">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
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
          id="info-projects-blob"
          className="absolute left-full top-0 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/3"
        />
      </Container>
    </Layout>
  )
}

export const Head = ({ location }: HeadProps) => (
  <FlovanHead title="What I do" pathname={location.pathname} />
)

export const query = graphql`
  query InfoPage {
    vlaanderenImage: file(relativePath: { eq: "project-vlaanderen.png" }) {
      id
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }

    healthySolutionsImage: file(
      relativePath: { eq: "project-healthysolutions.png" }
    ) {
      id
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
  }
`

export default InfoPage
