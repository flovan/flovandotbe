import { Link } from 'gatsby'

import Blob from '../components/Blob'
import Container from '../components/layout/Container'
import Layout from '../components/layout/Layout'
import Heading from '../components/ui/Heading'
import PointyLink from '../components/ui/PointyLink'
import CommandmentsVisual from '../images/illustration-commandments.svg'
import DesignDevelopmentVisual from '../images/illustration-design-development.svg'
import WebAppsVisual from '../images/illustration-web-applications.svg'

const InfoPage = () => {
  return (
    <Layout>
      <Container className="relative grid grid-cols-1 gap-flovan-lg md:grid-cols-3 md:gap-flovan-base lg:gap-flovan-md">
        <div className="relative z-10 col-span-2">
          <Heading level={2}>Here&rsquo;s how I can help</Heading>
          <div className="prose">
            <p className="text-flovan-lg font-normal">
              The A to Z partner for digital projects.
            </p>
            <p className="text-flovan-lg font-normal">
              Let&rsquo;s create something you and your customers will love.
            </p>
            <p>
              A solid strategy starts with clearly defined goals—both yours and
              those of your potential customers. Together with the right tools
              for the job, we can make everyone a happy camper.
            </p>
            <p>
              There is no one-size-fits-all, so I won&rsquo;t bring out the
              proverbial hammer unless I have to.
            </p>
          </div>
        </div>
        <div className="relative z-10">
          <Heading level={2}>Capabilities</Heading>
          <div className="prose">
            <ul>
              <li>Web design</li>
              <li>Websites and web applications</li>
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
          <PointyLink to="/contact?type=webapp">I need a web app</PointyLink>
        </div>
      </Container>
      <Container className="relative grid grid-cols-1 gap-flovan-base sm:grid-cols-2 lg:grid-cols-3 lg:gap-flovan-sm xl:gap-flovan-md">
        <div className="prose">
          <Heading level={3}>Personal service, without any overhead.</Heading>
          <p>
            Don&rsquo;t worry about having to speak to different members of a
            team—any communication and decision making will be between you and
            me. A single hotline for all your needs.
          </p>
        </div>
        <div className="prose">
          <Heading level={3}>
            No endless waiting on a planning schedule.
          </Heading>
          <p>
            Unexpected changes or requests usually don&rsquo;t make it into the
            planning of larger agencies. Having only my own schedule to manage,
            I can be quite flexible to accommodate your demands.
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
          <Heading level={3}>I shall not&hellip;</Heading>
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
    </Layout>
  )
}

export default InfoPage
