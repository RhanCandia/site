import React from "react"
import GlitchEffect from 'react-glitch-effect'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`rhanel`, `rhan`, `candia`, `software`, `engineer`, `full`, `stack`, `web`, `application`, `developer`, `react`, `vue`, `javascript`, `php`, `mysql`, `gatsby`]} />
    <GlitchEffect className="glitch-effect">
      <h1>Rhanel Candia</h1>
    </GlitchEffect>
    <h3>Web Developer | Software Engineer</h3>
    <p>
      I code for the web. 
      Reach me at <a href="mailto:rhan@candia.dev">rhan@candia.dev</a>. 
      Let's get in touch.<br />
      I'm still working on the rest of the site.
    </p>
  </Layout>
)

export default IndexPage
