import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Listing from "../components/listing"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`thinknews`, `think`, `news`]} />
     <Listing />
      <Image />
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/about/">About</Link>
      <Link to="/blacklove/">Blacklove</Link>
      <Link to="/hero/">Hero</Link>
    </Layout>
)

export default IndexPage
