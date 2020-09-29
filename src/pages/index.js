import React from "react"
import Layout from "../components/layout"
import SectionOne   from '../components/sectionone'
import SectionTwo   from '../components/sectiontwo'
import SectionThree from '../components/sectionthree'
import SectionFour  from '../components/sectionfour'
import SectionFive  from '../components/sectionfive'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout useHeroHeader>
    <SEO title="Landing Page" />
    <SectionOne   title="About"  />
    <SectionTwo   title="Services"  />
    <SectionThree title="Partners"/>
    <SectionFour  title="Portfolio"/>
    <SectionFive  title="Team"/>
  </Layout>
)

export default IndexPage