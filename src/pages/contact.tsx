import Blob from '../components/Blob'
import Container from '../components/layout/Container'
import Layout from '../components/layout/Layout'
import Heading from '../components/ui/Heading'
import { Icon } from '../components/ui/Icon'
import IdeaVisual from '../images/illustration-idea.svg'

const ContactPage = () => {
  return (
    <Layout>
      <Container className="relative grid grid-cols-1 gap-flovan-lg md:grid-cols-2 md:gap-flovan-base lg:gap-flovan-md">
        <div className="relative z-20">
          <Heading level={2}>Get in touch</Heading>
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
                <a href="TODO">Schedule a meeting</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="z-10 flex justify-center md:absolute md:right-0 md:top-1/2 md:w-[calc((100%-8rem)/2)] md:-translate-y-1/2 lg:w-[calc((100%-12rem)/2)]">
          <IdeaVisual className="h-auto w-full max-w-80 md:max-w-max" />
          <Blob
            id="web-apps-blob"
            className="absolute left-1/2 top-1/4 z-[-1] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 md:top-1/2"
          />
        </div>
        <Blob
          id="contact-hero-blob"
          className="absolute left-0 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/3"
        />
      </Container>
      <Container className="relative z-10">
        <Heading level={2}>Connect with me</Heading>
        <div className="flex gap-flovan-base">
          <a
            href="todo"
            className="gap-flovan-xs inline-flex items-center justify-start no-underline"
          >
            <Icon name="linkedin" width={28} height={28} />
            <span>Linkedin</span>
          </a>
          <a
            href="todo"
            className="gap-flovan-xs inline-flex items-center justify-start no-underline"
          >
            <Icon name="x" width={28} height={28} />
            <span>@flovan_</span>
          </a>
          <a
            href="todo"
            className="gap-flovan-xs inline-flex items-center justify-start no-underline"
          >
            <Icon name="github" width={28} height={28} />
            <span>Github</span>
          </a>
        </div>
      </Container>
    </Layout>
  )
}

export default ContactPage
