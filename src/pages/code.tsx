import Blob from '../components/Blob'
import Container from '../components/layout/Container'
import Layout from '../components/layout/Layout'
import Heading from '../components/ui/Heading'

const CodePage = () => {
  return (
    <Layout>
      <Container className="relative grid grid-cols-1 gap-flovan-lg md:grid-cols-3 md:gap-flovan-base lg:gap-flovan-md">
        <div className="relative z-10 col-span-2">
          <Heading level={2} as="h1">
            A look underneath the hood
          </Heading>
          <div className="prose">
            <p className="text-flovan-lg font-normal">
              The source code for this website can be found{' '}
              <a href="https://github.com/flovan/flovandotbe">on Github</a>.
            </p>
            <p>
              This website is statically generated with{' '}
              <a href="https://www.gatsbyjs.com">Gatsby</a> and coded in
              <a href="http://typescriptlang.org">Typescript</a> using{' '}
              <a href="https://react.dev">React</a>. I am pretty sure you could
              consider it to be a JAM stack setup. In its current form, it is a
              little over-engineered, but it does give me the freedom to
              experiment, or, at some point, plug in a headless CMS if needed.
              Also, I really like working with React. It&rsquo;s pretty dang
              solid imo.
            </p>
            <p>
              For styling, this website uses{' '}
              <a href="http://tailwindcss.com">Tailwind</a> with a custom color
              scheme. The font in use is the open source{' '}
              <a href="https://fonts.floriankarsten.com/space-grotesk">
                Space Grotesk
              </a>
              , and I opted to use the variable font as this removes the need
              for multiple font files.
            </p>
            <p>
              The pulsing blobs in the background are animated using{' '}
              <a href="http://d3js.org">D3</a> and the shapes where generated
              using the <a href="https://www.blobmaker.app">Blobmaker</a>{' '}
              website.
            </p>
            <p>
              I roughly designed this website in{' '}
              <a href="https://affinity.serif.com/en-us/designer/">
                Affinity Designer
              </a>{' '}
              and then fine-tuned everything during development.
            </p>
            <p>
              As mentioned there is no CMS in use at this time, but for this
              project I would probably implement{' '}
              <a href="https://decapcms.org">Decap CMS</a>. This integrates well
              with the CI/CD deployment from the repository onto{' '}
              <a href="http://netlify.com">Netlify</a>. Netlify is very reliable
              and the user interface is very easy to use. Their generous
              free-tier hosting allows me to have this website up for €0 per
              month.
            </p>
          </div>
        </div>
        <Blob
          id="code-blob"
          className="absolute left-full top-0 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/3"
        />
      </Container>
    </Layout>
  )
}

export default CodePage
