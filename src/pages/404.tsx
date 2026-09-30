import { HeadProps, Link } from 'gatsby'

import FlovanHead from '../components/Head'
import Container from '../components/layout/Container'
import Layout from '../components/layout/Layout'
import Heading from '../components/ui/Heading'

const NotFoundPage = () => {
  return (
    <Layout>
      <Container className="relative grid grid-cols-1 gap-flovan-lg md:grid-cols-3 md:gap-flovan-base lg:gap-flovan-md">
        <div className="relative z-10 col-span-2">
          <div className="prose">
            <Heading level={1}>
              Hmm, looks like the page you are trying to access does not exist.
            </Heading>
            <p>
              I’m afraid that you will have to{' '}
              <Link to="/">go back to the homepage</Link>.
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export const Head = ({ location }: HeadProps) => (
  <FlovanHead title="Page not found" pathname={location.pathname} />
)

export default NotFoundPage
