import React from "react"
import GlitchEffect from 'react-glitch-effect'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`rhanel`, `rhan`, `candia`, `software`, `engineer`, `full`, `stack`, `web`, `application`, `developer`, `react`, `vue`, `javascript`, `php`, `mysql`, `gatsby`]} />
    <h1>Rhanel Candia</h1>
    <h3>Web Developer | Software Engineer</h3>
    <p>
      Web is here to stay. 
      Reach me at <a href="mailto:rhan@candia.dev">rhan@candia.dev</a>. 
      Let's get in touch.<br />
      <GlitchEffect className="glitch-effect">
        <span>The site is still under construction.</span>
      </GlitchEffect>
    </p>
  </Layout>
)

export default IndexPage
