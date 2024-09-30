import { graphql, Link } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { IGatsbyImageData } from 'gatsby-plugin-image/dist/src/components/gatsby-image.browser'

import { getProjects } from '../_temporay_data'
import Blob from '../components/Blob'
import Container from '../components/layout/Container'
import Layout from '../components/layout/Layout'
import Heading from '../components/ui/Heading'
import PointyLink from '../components/ui/PointyLink'
import ProjectCard from '../components/ui/ProjectCard'
import CommandmentsVisual from '../images/illustration-commandments.svg'
import DesignDevelopmentVisual from '../images/illustration-design-development.svg'
import WebAppsVisual from '../images/illustration-web-applications.svg'

const InfoPage = props => {
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
      <Container className="relative grid grid-cols-1 gap-flovan-lg md:grid-cols-3 md:gap-flovan-base lg:gap-flovan-md">
        <div className="relative z-10 col-span-2">
          <Heading level={2} as="h1">
            What I bring to the table
          </Heading>
          <div className="prose">
            <Heading level={1} as="h2">
              Meaningful web products that are conversion-focused,
              brand-accurate & people-friendly.
            </Heading>
            <p>
              Everything starts with clearly defined goals&mdash;both yours and
              those of your potential customers. The resulting strategy,
              together with the right tools for the job&mdash;and nothing
              more&mdash;will put your business on the map.
            </p>
          </div>
        </div>
        <div className="relative z-10">
          <Heading level={2}>Capabilities</Heading>
          <div className="prose">
            <ul>
              <li>Websites</li>
              <li>Web applications</li>
              <li>Branding</li>
              <li>Photography</li>
              <li>Copyrighting</li>
            </ul>
          </div>
        </div>
        <Blob
          id="info-hero-blob"
          className="absolute right-0 top-0 h-[900px] w-[900px] -translate-y-1/2 translate-x-1/3"
        />
      </Container>
      <Container
        className="relative grid grid-cols-1 gap-y-flovan-base md:grid-cols-3 md:gap-flovan-base lg:gap-flovan-md"
        id="web-design-development"
      >
        <div className="flex justify-center md:absolute md:left-0 md:top-1/2 md:w-[calc((100%-8rem)/3)] md:-translate-y-1/2 lg:w-[calc((100%-12rem)/3)]">
          <DesignDevelopmentVisual className="h-auto w-full max-w-80 md:max-w-max" />
          <Blob
            id="design-development-blob"
            className="absolute left-1/2 top-1/4 z-[-1] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 md:top-1/2"
          />
        </div>
        <div className="prose relative z-10 col-span-2 md:col-start-2">
          <Heading level={3}>Webdesign &amp; Development</Heading>
          <p>
            Hand crafted to your taste and fine-tuned for your goals. A rock
            solid and good looking website is an essential tool to help you win
            over potential customers without breaking a sweat.
          </p>
          <p>
            I create both simple static websites, as well as larger ones with a
            content management system. Translations? Check! Selling your
            products online? Check.
          </p>
          <p>So, let&rsquo;s figure out what you need!</p>
          <PointyLink to="/contact?type=website">I need a website</PointyLink>
        </div>
      </Container>
      <Container
        className="relative grid grid-cols-1 gap-y-flovan-base md:grid-cols-3 md:gap-flovan-base lg:gap-flovan-md"
        id="web-application"
      >
        <div className="flex justify-center md:absolute md:right-0 md:top-1/2 md:w-[calc((100%-8rem)/3)] md:-translate-y-1/2 lg:w-[calc((100%-12rem)/3)]">
          <WebAppsVisual className="h-auto w-full max-w-80 md:max-w-max" />
          <Blob
            id="web-apps-blob"
            className="absolute left-1/2 top-1/4 z-[-1] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 md:top-1/2"
          />
        </div>
        <div className="prose relative z-10 col-span-2 col-start-1">
          <Heading level={3}>Web Applications</Heading>
          <p>
            Your product or business needs a solution-driven tool that leads to
            predictable results. A robust and reliable web application that is a
            joy to use and does what it has to do.
          </p>
          <p>
            I can help with full-stack development of your application using
            modern and battle-tested technologies, deployed on an resilient
            infrastructure.
          </p>
          <PointyLink to="/contact?type=webapp">I need a web app</PointyLink>
        </div>
      </Container>
      <Container className="relative grid grid-cols-1 gap-flovan-base sm:grid-cols-2 lg:grid-cols-3 lg:gap-flovan-sm xl:gap-flovan-md">
        <div className="prose">
          <Heading level={3}>Personal service, without any overhead.</Heading>
          <p>
            Don&rsquo;t worry about having to speak to different members of a
            team—any communication and decision making will be between you and
            me. A single contact for all your needs.
          </p>
        </div>
        <div className="prose">
          <Heading level={3}>
            No endless waiting on a planning schedule.
          </Heading>
          <p>
            Unexpected changes or requests can take a while to make it into the
            planning of larger agencies. Having only my own schedule to manage,
            I can be quite flexible to accommodate your wishes.
          </p>
        </div>
        <div className="prose">
          <Heading level={3}>Great ROI at a competitive price.</Heading>
          <p>
            Taking the previous items in consideration, I can offer my services
            at <Link to="/price">a more competitive price</Link>, while still
            delivering high quality work with a quick turnaround.
          </p>
        </div>
        <Blob
          id="selling-points-blob"
          className="absolute right-full top-1/2 -z-[1] h-[900px] w-[900px] -translate-y-2/3 translate-x-1/2"
        />
      </Container>
      <Container className="relative grid grid-cols-1 gap-y-flovan-base md:grid-cols-3 md:gap-flovan-base lg:gap-flovan-md">
        <div className="flex justify-center md:absolute md:left-0 md:top-1/2 md:w-[calc((100%-8rem)/3)] md:-translate-y-1/2 lg:w-[calc((100%-12rem)/3)]">
          <CommandmentsVisual className="h-auto w-full max-w-80 md:max-w-max" />
          <Blob
            id="commandments-blob"
            className="absolute left-1/2 top-1/4 z-[-1] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 md:top-1/2"
          />
        </div>
        <div className="prose relative z-10 col-span-2 md:col-start-2">
          <Heading level={3}>But I will not&hellip;</Heading>
          <ul>
            <li>
              Take on work that I cannot finish confidently for your budget or
              within your requested time frame.
            </li>
            <li>
              Get involved in projects relating to gambling, crypto, NFT&rsquo;s
              or Web3.
            </li>
            <li>Design or apply deceptive techniques or dark patterns.</li>
            <li>
              Advise the use of privacy-invasive analytics, tracking pixels or
              on-by-default cookies.
            </li>
          </ul>
        </div>
      </Container>
      <Container className="relative">
        <Heading level={2}>Common questions</Heading>
        <div className="relative z-10 grid grid-cols-1 gap-flovan-base sm:grid-cols-2 lg:grid-cols-3 lg:gap-flovan-sm xl:gap-flovan-md">
          <div className="prose">
            <Heading level={3}>What is the typical flow of a project?</Heading>
            <p>
              We start by defining the project scope and identifying the
              requirements. I&rsquo;ll then send you a quote and an estimated
              timeline. From there on, we&rsquo;ll head into the design phase
              and then move onto development. And finally, the delivery of the
              end result&mdash;accompanied by a hand-over, if needed.
            </p>
          </div>
          <div className="prose">
            <Heading level={3}>Will I get any support afterwards?</Heading>
            <p>
              Making sure your website of web application continues to function
              smoothly is crucial. The duration and intensity of continued
              support for your project will be tailored to your preference. For
              websites, there&rsquo;s{' '}
              <a href="/pricing#qa">an obligatory monthly fee</a> which comes
              with a guaranteed 24 hours response time.
            </p>
          </div>
          <div className="prose">
            <Heading level={3}>What technologies do you use?</Heading>
            <p>
              Project management and documentation will be shared with you on a
              dedicated Notion space. Design will either be done in Figma or
              Affinity Designer. For development, I will typically write
              Typescript code in a combination of React with either Gatsby,
              Next.js or Remix. Tailwind is my go-to styling library.
            </p>
          </div>
          <div className="prose">
            <Heading level={3}>Can you help me with a no-code project?</Heading>
            <p>
              I take pride in my craft and do not create websites in a no-code
              environment (such as Webflow, for example). Everything is made to
              fit, with the utmost attention to factors like UX, responsiveness
              and load speed. To ensure a high quality end result, I will not be
              cutting any corners.
            </p>
          </div>
          <div className="prose">
            <Heading level={3}>
              Are you available for long-term consultancy?
            </Heading>
            <p>
              Yes, of course. Bigger projects that span a longer
              period&mdash;months or even years&mdash; come with a set of
              challenges that I am no stranger to. I have several years of
              experience working with start-ups and on mature digital projects
              in an agile environment. My rates are mentioned on{' '}
              <a href="/pricing">the pricing page</a>.
            </p>
          </div>
        </div>
        <Blob
          id="info-questions-blob"
          className="absolute right-full top-1/2 -z-[1] h-[900px] w-[900px] -translate-y-1/2 translate-x-1/2"
        />
      </Container>
      <Container className="relative">
        <Heading level={2} className="relative z-10">
          Some other work of mine
        </Heading>
        <div className="relative z-10 grid grid-cols-1 gap-flovan-sm md:grid-cols-2 lg:gap-flovan-md">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project}>
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
    </Layout>
  )
}

export const query = graphql`
  query InfoPage {
    photos: allFile(
      filter: {
        extension: { regex: "/(png)/" }
        name: { regex: "/(project-)(vlaanderen)|(healthysolutions)/" }
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
    #      filter: { ns: { in: ["common", "info"] }, language: { eq: $language } }
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

export default InfoPage
