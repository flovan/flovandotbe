import {
  Link,
  Trans,
  useTranslation,
} from '@herob191/gatsby-plugin-react-i18next'
import { graphql, HeadProps } from 'gatsby'

import Blob from '../components/AsyncBlob'
import FlovanHead, { HeadLocales } from '../components/Head'
import Container from '../components/layout/Container'
import Layout from '../components/layout/Layout'
import Heading from '../components/ui/Heading'
import { Icon } from '../components/ui/Icon'
import PointyLink from '../components/ui/PointyLink'
import { ReactComponent as WalletVisual } from '../images/illustration-wallet.svg'

const PricingPage = () => {
  const { t } = useTranslation('pricing')

  return (
    <Layout>
      <Container className="relative">
        <Heading level={1} className="visually-hidden">
          {t('My current rates')}
        </Heading>
        <div className="relative z-10 grid grid-cols-1 items-center gap-y-flovan-md lg:grid-cols-3 lg:gap-flovan-md xl:grid-cols-2">
          <div className="prose md:col-span-2 xl:col-span-1">
            <p className="text-flovan-lg font-normal">
              <Trans i18nKey="rate">
                I work with a rate of <strong>€600/day</strong> or{' '}
                <strong>€75/hour</strong>, preferably on a time and materials
                basis
              </Trans>
              <sup>
                <a href="#footnote-1">
                  <small>*</small>
                </a>
              </sup>
              .
            </p>
            <ul>
              <li>
                {t(
                  'Fixed-price projects are of course up for discussion. An estimate will be made based on the rates mentioned above.',
                )}
              </li>
              <li>
                {t(
                  'Long-term consultancy projects with an existing team get a guaranteed working day of up to 8 hours to allow for proper collaboration.',
                )}
              </li>
              <li>
                <Trans>
                  Start-ups and projects for social good can try persuading me
                  to offer a discounted rate.{' '}
                  <Icon
                    name="emoji-blink"
                    width={28}
                    height={28}
                    className="inline-flex"
                  />
                </Trans>
              </li>
            </ul>
          </div>
          <div className="relative flex justify-center">
            <WalletVisual className="h-auto w-full max-lg:max-w-96" />
            <Blob
              id="wallet-blob"
              className="absolute left-1/2 top-1/2 z-[-1] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <Blob
          id="pricing-hero-blob"
          className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 -translate-y-2/3"
        />
      </Container>
      <Container className="relative flex flex-col items-center">
        <Heading
          level={1}
          as="p"
          className="mb-flovan-base text-center sm:text-left"
        >
          {t('Let’s find out what I can do for you.')}
        </Heading>
        <PointyLink to="/contact">{t('Tell me about your ideas')}</PointyLink>
        <Blob
          id="pricing-cta-blob"
          className="absolute left-1/2 top-1/2 z-[-1] h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2"
          outline
        />
      </Container>
      <Container className="relative">
        <Heading level={2} id="qa" className="title-line">
          {t('Common questions about my pricing')}
        </Heading>
        <div className="grid grid-cols-1 gap-flovan-base md:grid-cols-2 lg:gap-flovan-md xl:grid-cols-3">
          <div className="prose">
            <Heading level={3}>
              {t('How much will my project cost me?')}
            </Heading>
            <p>
              <Trans>
                Very fair question, but without a defined scope, a tough
                question to answer. Designing and developing a website for
                example can start at around €3000{' '}
                <sup>
                  <a href="#footnote-1">
                    <small>*</small>
                  </a>
                </sup>
                . If you already have something in mind,{' '}
                <Link to="/contact">send me some details</Link> and I will do my
                best to give you a ballpark figure.
              </Trans>
            </p>
          </div>
          <div className="prose">
            <Heading level={3}>
              {t('What are my reoccurring costs for a website?')}
            </Heading>
            <p>
              <Trans>
                The bare minimum cost is{' '}
                <strong>
                  65 euros
                  <sup>
                    <a href="#footnote-1">
                      <small>*</small>
                    </a>
                  </sup>{' '}
                  per month
                </strong>
                . This includes your hosting and a guaranteed fixing of any
                issues with your website within 24 hours. Other recurring fees
                could include the costs of a domain name, higher traffic
                hosting, or for example a subscription to a third-party service.
              </Trans>
            </p>
          </div>
          <div className="prose">
            <Heading level={3}>
              {t('Do you work with other freelancers?')}
            </Heading>
            <p>
              {t(
                'A different professional—say, a photographer or copywriter—might need to step in, depending on the scope. The costs will be communicated transparently in advance, and their work will be listed separately on your invoice.',
              )}
            </p>
          </div>
        </div>
        <Blob
          id="pricing-questions-blob"
          className="absolute right-full top-1/2 -z-[1] h-[900px] w-[900px] -translate-y-2/3 translate-x-1/2"
        />
      </Container>
      <Container>
        <p className="text-flovan-sm">
          <sup id="footnote-1">*</sup> {t('Mentioned price is without VAT.')}
        </p>
      </Container>
    </Layout>
  )
}

export const Head = ({ data }: HeadProps<HeadLocales>) => (
  <FlovanHead namespace="pricing" localeEdges={data.locales.edges} />
)

export const query = graphql`
  query PricingPage($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common", "pricing"] }, language: { eq: $language } }
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

export default PricingPage
