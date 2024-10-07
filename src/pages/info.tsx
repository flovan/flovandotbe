import { graphql, Link } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { IGatsbyImageData } from 'gatsby-plugin-image/dist/src/components/gatsby-image.browser'

import { getProjects } from '../_temporay_data'
import Blob from '../components/Blob'
import Container from '../components/layout/Container'
import Layout from '../components/layout/Layout'
import SEO from '../components/Seo'
import Details from '../components/ui/Details'
import Heading from '../components/ui/Heading'
import PointyLink from '../components/ui/PointyLink'
import ProjectCard from '../components/ui/ProjectCard'
import StepTabs from '../components/ui/StepTabs'
import { ReactComponent as CommandmentsVisual } from '../images/illustration-commandments.svg'
import { ReactComponent as DesignDevelopmentVisual } from '../images/illustration-design-development.svg'

const services = [
  {
    title: 'Design',
    content: [
      'We all like eye-catching and shiny things, but user experience and accessibility always need to be taken into consideration when designing for the browser.',
      'I create <strong>timeless designs</strong> for your website, and easy to understand <strong>user interfaces</strong> for your web applications.',
      'I can also help out with basic <strong>branding</strong> needs&mdash;a logo, a new font, or some fresh and dazzling colors.',
    ],
  },
  {
    title: 'Development',
    content: [
      'I create both simple static <strong>websites</strong>, as well as larger ones with a content management system. Translations? Check! Selling your products online? Check.',
      'Your business might also need some custom built internal tools, or perhaps you are creating an in-house product. I am no stranger to working on larger <strong>web applications</strong>, and can help with full-stack development using modern and battle-tested technologies, deployed on a resilient infrastructure.',
    ],
  },
  {
    title: 'Content',
    content: [
      'Having a functional and good looking product only gets you so far. Your potential customers or users also need something to read and look at, something that inspires or informs them.',
      'I work together closely with several talented freelancers that deliver top-notch <strong>photography, videography and copywriting</strong>. And it&rsquo;s a small world, so any other requirements can be looked into.',
    ],
  },
]

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
      <Container className="relative">
        <div className="relative z-10 grid grid-cols-1 items-center gap-y-flovan-md lg:grid-cols-3 lg:gap-flovan-md xl:grid-cols-2">
          <div className="md:col-span-2 xl:col-span-1">
            <Heading level={1} className="mb-[1em]">
              Meaningful web products that are conversion-focused,
              brand-accurate & people-friendly.
            </Heading>
            <StepTabs />
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
        <div className="relative z-10 grid grid-cols-1 gap-y-flovan-base lg:grid-cols-3 lg:gap-flovan-base lg:gap-flovan-md">
          <div>
            <Heading level={2} className="title-line relative z-10">
              Overview of my services
            </Heading>
            <p>
              It might appear simple on the surface, but there are actually a
              number of <em>moving parts</em> to consider when creating products
              for the web.
            </p>
          </div>
          <div className="flex flex-col gap-flovan-xs lg:col-span-2">
            {services.map(({ title, content }) => (
              <Details
                key={title}
                title={title}
                className="[&:not(:last-child)]:-mb-px"
              >
                {content.map((paragraph, index) => (
                  <p
                    key={title + index}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </Details>
            ))}
          </div>
        </div>
      </Container>
      <Container className="relative">
        <Heading level={2} className="title-line relative z-10">
          What you can expect
        </Heading>
        <div className="relative z-10 grid grid-cols-1 gap-flovan-base sm:grid-cols-2 lg:grid-cols-3 lg:gap-flovan-sm xl:gap-flovan-md">
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
              Unexpected changes or requests can take a while to make it into
              the planning of larger agencies. Having only my own schedule to
              manage, I can be quite flexible to accommodate your wishes.
            </p>
          </div>
          <div className="prose">
            <Heading level={3}>Great ROI at a competitive price.</Heading>
            <p>
              Taking the previous items in consideration, I can offer my
              services at <Link to="/price">a more competitive price</Link>,
              while still delivering high quality work with a quick turnaround.
            </p>
          </div>
        </div>
        <Blob
          id="info-services-blob"
          className="absolute left-0 top-0 h-full w-full scale-x-115 scale-y-130 transition-all"
          type="rectangle"
        />
      </Container>
      <Container className="relative grid grid-cols-1 items-center gap-y-flovan-base md:grid-cols-2 md:gap-flovan-base lg:gap-flovan-md">
        <div className="relative flex justify-center">
          <CommandmentsVisual className="h-auto w-full max-w-96" />
          <Blob
            id="commandments-blob"
            className="absolute left-1/2 top-1/2 z-[-1] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="relative z-10">
          <Heading level={2} className="title-line relative z-10">
            Ethics and values
          </Heading>
          <div className="prose">
            <Heading level={3}>
              I build for an honest and friendly web, so some lines will not be
              crossed. That is why I will not&hellip;
            </Heading>
            <ul>
              <li>
                Ignore mobile devices or cut corners when it comes to
                accessibility.
              </li>
              <li>
                Get involved in projects relating to gambling, crypto,
                NFT&rsquo;s or Web3.
              </li>
              <li>
                Design or apply deceptive techniques or dark patterns to sell
                your product or subscribe visitors to your services.
              </li>
              <li>
                Advise the use of privacy-invasive analytics, tracking pixels or
                on-by-default cookies.
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Container className="relative flex flex-col items-center">
        <Heading level={1} as="p" className="mb-flovan-base">
          Let&rsquo;s create something beautiful.
        </Heading>
        <PointyLink to="/contact">Tell me about your ideas</PointyLink>
        <Blob
          id="info-cta-blob"
          className="absolute left-1/2 top-1/2 z-[-1] h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2"
          outline
        />
      </Container>
      <Container className="relative">
        <Heading level={2} className="title-line">
          Common questions
        </Heading>
        <div className="relative z-10 grid grid-cols-1 gap-flovan-base md:grid-cols-2 lg:gap-flovan-md xl:grid-cols-3">
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
        <Heading level={2} className="title-line relative z-10">
          Some other work of mine
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
          id="info-projects-blob"
          className="absolute left-full top-0 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/3"
        />
      </Container>
    </Layout>
  )
}

export const Head = () => <SEO title="Flovan — What I do" />

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
