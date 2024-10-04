import Blob from '../components/Blob'
import Container from '../components/layout/Container'
import Layout from '../components/layout/Layout'
import SEO from '../components/Seo'
import Heading from '../components/ui/Heading'
import { Icon } from '../components/ui/Icon'
import { ReactComponent as IdeaVisual } from '../images/illustration-idea.svg'
import { mergeClassName } from '../lib/class-name'
import { PropsWithClassName } from '../types/types'

const SeeAlsoBlock = ({ className }: PropsWithClassName) => {
  return (
    <div
      className={mergeClassName(
        'slide-shadow sticky bottom-0 z-10 -mb-flovan-sm rounded-bl-default rounded-br-default bg-on-background pb-flovan-lg pt-[11.5rem]',
        className,
      )}
    >
      <Container>
        <Heading level={2} className="title-line">
          Also check out
        </Heading>
        <p className="prose">
          <ul>
            <li>
              The <a href="/pricing">rates</a> for which I work
            </li>
            <li>
              What you can expect when <a href="/info">working with me</a>
            </li>
          </ul>
        </p>
      </Container>
    </div>
  )
}

const ContactPage = props => {
  return (
    <Layout footerComponent={SeeAlsoBlock}>
      <Container className="relative z-10 grid grid-cols-1 items-center gap-y-flovan-md lg:grid-cols-3 lg:gap-flovan-md xl:grid-cols-2">
        <div className="relative z-20 md:col-span-2 xl:col-span-1">
          <Heading level={2} className="visually-hidden">
            Get in touch
          </Heading>
          <div className="prose">
            <p className="text-flovan-lg font-normal">
              Tell me about your vision or your needs, and let&rsquo;s take it
              from there.
            </p>
            <ul className="text-flovan-md">
              <li>
                <a href="mailto:hello@flovan.be">hello@flovan.be</a>
              </li>
              <li>
                <a href="https://calendar.app.google/W5pG4bLAJH9re5j37">
                  Schedule a meeting
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative z-10 flex justify-center self-stretch">
          <IdeaVisual className="h-auto w-full max-w-96 lg:max-w-max" />
          <Blob
            id="idea-blob"
            className="absolute left-1/2 top-1/2 z-[-1] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <Blob
          id="contact-hero-blob"
          className="absolute left-0 top-0 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/3 lg:top-1/2"
        />
      </Container>
      <Container className="relative z-10">
        <Heading level={2} className="title-line">
          Connect with me
        </Heading>
        <div className="flex flex-col gap-flovan-base md:flex-row">
          <a
            href="https://www.linkedin.com/in/flovan"
            className="inline-flex items-center justify-start gap-flovan-xs no-underline"
          >
            <Icon name="linkedin" width={28} height={28} />
            <span>Linkedin</span>
          </a>
          <a
            href="https://x.com/flovan_"
            className="inline-flex items-center justify-start gap-flovan-xs no-underline"
          >
            <Icon name="x" width={28} height={28} />
            <span>@flovan_</span>
          </a>
          <a
            href="https://github.com/flovan"
            className="inline-flex items-center justify-start gap-flovan-xs no-underline"
          >
            <Icon name="github" width={28} height={28} />
            <span>Github</span>
          </a>
        </div>
      </Container>
    </Layout>
  )
}

export const Head = () => <SEO title="Flovan — Get in touch" />

/* export const query = graphql`
  query ContactPage {
    locales: allLocale(
      filter: { ns: { in: ["common", "contact"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`*/

export default ContactPage
