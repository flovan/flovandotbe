import { lazy, Suspense } from 'react'
import { Trans, useTranslation } from '@herob191/gatsby-plugin-react-i18next'
import { graphql } from 'gatsby'

import FlovanHead from '../components/Head'
import Container from '../components/layout/Container'
import Layout from '../components/layout/Layout'
import Heading from '../components/ui/Heading'
import { Icon } from '../components/ui/Icon'
import { ReactComponent as IdeaVisual } from '../images/illustration-idea.svg'
import { mergeClassName } from '../lib/class-name'
import { PropsWithClassName } from '../types/types'

// eslint-disable-next-line
const Blob = lazy(() => import('../components/Blob'))

const SeeAlsoBlock = ({ className }: PropsWithClassName) => {
  const { t } = useTranslation('contact')

  return (
    <div
      className={mergeClassName(
        'slide-shadow sticky bottom-0 z-10 -mb-flovan-sm rounded-bl-default rounded-br-default bg-on-background pb-flovan-lg pt-[11.5rem]',
        className,
      )}
    >
      <Container>
        <Heading level={2} className="title-line">
          {t('Also check out')}
        </Heading>
        <div className="prose">
          <ul>
            <li>
              <Trans>
                The <a href="/pricing">rates</a> for which I work
              </Trans>
            </li>
            <li>
              <Trans>
                What you can expect when <a href="/info">working with me</a>
              </Trans>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

const ContactPage = props => {
  const { t } = useTranslation('contact')

  return (
    <Layout footerComponent={SeeAlsoBlock}>
      <Container className="relative z-10 grid grid-cols-1 items-center gap-y-flovan-md lg:grid-cols-3 lg:gap-flovan-md xl:grid-cols-2">
        <div className="relative z-20 md:col-span-2 xl:col-span-1">
          <Heading level={2} className="visually-hidden">
            {t('Get in touch')}
          </Heading>
          <div className="prose">
            <p className="text-flovan-lg font-normal">
              {t(
                'Tell me about your vision or your needs, and let’s take it from there.',
              )}
            </p>
            <ul className="text-flovan-md">
              <li>
                <a href="mailto:hello@flovan.be">hello@flovan.be</a>
              </li>
              <li>
                <a href="https://calendar.app.google/W5pG4bLAJH9re5j37">
                  {t('Schedule a meeting')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative z-10 flex justify-center self-stretch">
          <IdeaVisual className="h-auto w-full max-w-96 lg:max-w-max" />
          <Suspense fallback={null}>
            <Blob
              id="idea-blob"
              className="absolute left-1/2 top-1/2 z-[-1] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2"
            />
          </Suspense>
        </div>
        <Suspense fallback={null}>
          {' '}
          <Blob
            id="contact-hero-blob"
            className="absolute left-0 top-0 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/3 lg:top-1/2"
          />
        </Suspense>
      </Container>
      <Container className="relative z-10">
        <Heading level={2} className="title-line">
          {t('Connect with me')}
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

export const Head = ({ data }) => (
  <FlovanHead namespace="contact" localeEdges={data?.locales.edges} />
)

export const query = graphql`
  query ContactPage($language: String!) {
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
`

export default ContactPage
