import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Can We Live? </h1>
    <p>We are being hunted, killed, exploited.   Black people are mightly.  We are the choosen people.  
    </p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/about/">About</Link>
    <Link to="/blacklove/">Blacklove</Link>
  </Layout>
)

export default IndexPage
