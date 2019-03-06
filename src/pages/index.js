import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`rhanel`, `candia`, `software`, `engineer`, `full`, `stack`, `web`, `application`, `developer`, `react`, `vue`, `javascript`, `php`, `mysql`, `gatsby`]} />
    <h1>Rhanel Candia</h1>
    <h3>Web Developer | Software Engineer</h3>
    <p>Web is here to stay. Reach me at <a href="mailto:rhan@candia.dev">rhan@candia.dev</a>. Let's get in touch.</p>
  </Layout>
)

export default IndexPage
