import React from 'react';
import SEO from "../seo"
import Layout from '../layout'
import Section from '../sections'
import Header from '../headers'
import Navbar from '../navbar'
import About from '../content/about'
import Partners from '../content/partners'
import Portfolio from '../content/portfolio'
import Services from '../content/services'
import Team from '../content/team'
import Image from '../image'
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const menu = [
    { label: "Home", to: "/#PageTop" }, // default pagetop id
    { label: "About", to: "/#About" },
    { label: "Services", to: "/#Services" },
    { label: "Partners", to: "/#Partners" },
    { label: "Portfolio", to: "/#Portfolio" },
    { label: "Team", to: "/#Team" },
    { label: "Contact", to: "/#Footer" } // when contact form is in the footer
]

const FiveSectionsLayout = () => (
  <Layout>
    <SEO title="Landing Page" />
    <Navbar menu={menu} />
    <Header>
        <div className="container">
            <div className="row"> 
                <div className="col-sm-12 col-md-6 mt-5 d-flex flex-column justify-content-center">
                    <h1 className="text-sm-center text-md-left">
                        Titulo da página
                    </h1>
                    <p className="text-center text-md-left">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor iusto a libero labore vitae voluptatibus quod, sed sit doloribus aspernatur, ut impedit, adipisci ex autem?
                    </p>
                    <AnchorLink to="/#About" className="m-auto m-md-0">
                        <p className='btn btn-primary'>More about us</p>
                    </AnchorLink>
                </div>
                <div className="col-sm-12 col-md-6 order-first order-md-last p-4 pb-0 p-md-0">
                    <Image src="header-illustration.png" alt="illustrated woman holding phone" />
                </div>
            </div>
        </div>
    </Header>
    <Section id="About"><About /></Section>
    <Section id="Services"><Services /></Section>
    <Section id="Partners"><Partners /></Section>
    <Section id="Portfolio"><Portfolio /></Section>
    <Section id="Team"><Team /></Section>
  </Layout>
)

export default FiveSectionsLayout;