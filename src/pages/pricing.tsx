import { Link } from 'gatsby'

import Blob from '../components/Blob'
import Container from '../components/layout/Container'
import Layout from '../components/layout/Layout'
import Heading from '../components/ui/Heading'
import WalletVisual from '../images/illustration-wallet.svg'

const PricingPage = () => {
  return (
    <Layout>
      <Container className="relative grid grid-cols-1 gap-flovan-lg md:grid-cols-2 md:gap-flovan-base lg:gap-flovan-md">
        <div className="relative z-20">
          <Heading level={2}>What I might charge you</Heading>
          <div className="prose">
            <p className="text-flovan-lg font-normal">
              I prefer working on a time and materials basis, with a rate of
              €600/day or €75/hour.
            </p>
            <ul>
              <li>
                Fixed-price projects are of course up for discussion. An
                estimate will be made based on the rates mentioned above.
              </li>
              <li>
                Long-term consultancy projects with other team members get a
                guaranteed working day of up to 8 hours to allow for proper
                collaboration.
              </li>
              <li>
                Start-ups and projects for social good might persuade me to
                offer a discounted rate.
              </li>
            </ul>
          </div>
        </div>
        <div className="z-10 flex justify-center md:absolute md:right-0 md:top-1/2 md:w-[calc((100%-8rem)/2)] md:-translate-y-1/2 lg:w-[calc((100%-12rem)/2)]">
          <WalletVisual className="h-auto w-full max-w-80 md:max-w-max" />
          <Blob
            id="web-apps-blob"
            className="absolute left-1/2 top-1/4 z-[-1] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 md:top-1/2"
          />
        </div>
        <Blob
          id="pricing-hero-blob"
          className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 -translate-y-2/3"
        />
      </Container>
      <Container className="relative">
        <Heading level={2}>Common questions</Heading>
        <div className="grid grid-cols-1 gap-flovan-base sm:grid-cols-2 lg:grid-cols-3 lg:gap-flovan-sm xl:gap-flovan-md">
          <div className="prose">
            <Heading level={3}>How much will my project cost me?</Heading>
            <p>
              Very fair question, but without a defined scope, a tough question
              to answer. There are some generic examples down below to give you
              an idea. If you{' '}
              <Link to="/contact">supply me with some details</Link>, I will do
              my best to give you a ballpark estimation.
            </p>
          </div>
          <div className="prose">
            <Heading level={3}>What are my monthly fees for a website?</Heading>
            <p>
              The bare minimum monthly cost is{' '}
              <strong>50 euros per month</strong>. This includes a guaranteed
              fixing of any issues with your website within 24 hours. Other
              recurring fees could include the costs of a domain name, or for
              example a subscription to a third-party service.
            </p>
          </div>
          <div className="prose">
            <Heading level={3}>Will I get any support afterwards?</Heading>
            <p>
              Every customer can rest assured that any issues they face will get
              looked at in a timely manner. After-care or continued support for
              your project can be arranged. For website, a guaranteed 24 hours
              response time comes with the monthly fee.
            </p>
          </div>
          <div className="prose">
            <Heading level={3}>Do you work with other freelancers?</Heading>
            <p>
              A different professional&mdash;say, a photographer or
              copywriter&mdash;might need to step in, depending on the scope.
              The costs will be communicated transparently in advance, and their
              work will be listed separately on your invoice.
            </p>
          </div>
        </div>
        <Blob
          id="selling-points-blob"
          className="absolute right-full top-1/2 -z-[1] h-[900px] w-[900px] -translate-y-2/3 translate-x-1/2"
        />
      </Container>
    </Layout>
  )
}

export default PricingPage
