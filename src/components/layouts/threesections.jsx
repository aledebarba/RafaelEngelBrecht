import React from 'react';
import SEO from "../seo"
import Layout from '../layout'
import Section from '../sections'
import Header from '../headers'
import Navbar from '../navbar'

const menu = [ 
    { label: "Home",     to: "/#PageTop" }, // default pagetop id
    { label: "About",    to: "/#SectionOne" },
    { label: "Services", to: "/#SectionTwo" },
    { label: "Portfolio", to: "/#SectionThree" },
    { label: "Contact",  to: "/#Footer" }, // when contact form is in the footer
]

const ThreeSectionsLayout = () =>
<Layout>
    <SEO title="Landing Page" />
    <Navbar menu={menu}/>
    <Header/>
    <Section id="SectionOne"    title="About"  />
    <Section id="SectionTwo"    title="Services"  />
    <Section id="SectionThree"  title="Portfolio"/>
</Layout>

export default ThreeSectionsLayout;