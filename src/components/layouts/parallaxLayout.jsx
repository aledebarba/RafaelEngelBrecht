import React from 'react';
import { withPrefix } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { useLaxElement } from 'use-lax';
import styled from 'styled-components'

import SEO from "../seo"
import Layout from '../layout'
import Section from '../sections'
import Header from '../headers'
import Navbar from '../navbar'
import Footer from '../content/footer-animated-vs1'
import Image from '../image'
import bgImage from '../../images/backgrounds/bettedaviseyes.png'



const ParallaxLayout = () => {
    
    const menu = [
        { label: "Home", to: "/index-parallax/#PageTop" }, // default pagetop id
        { label: "About", to: "/index-parallax/#About" },
        { label: "Services", to: "/index-parallax/#Services" },
        { label: "Partners", to: "/index-parallax/#Partners" },
        { label: "Contact", to: "/index-parallax/#Footer" } // when contact form is in the footer
    ]
    
    const refContent = useLaxElement();

return (
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
                    <AnchorLink to={withPrefix("/#About")} className="m-auto m-md-0">
                        <p className='btn btn-primary'>More about us</p>
                    </AnchorLink>
                </div>
                <div className="col-sm-12 col-md-6 order-first order-md-last p-5 p-md-0">
                    <Image src="header-illustration.png" alt="illustrated woman holding phone" />
                </div>
            </div>
        </div>
    </Header>

    <WithLocalStyles
        servicesBg={bgImage}
    >
        <div ref={refContent} 
            data-lax-translate-y="0 0, vh -400" 
            className="parallaxContent"
            >
            <Section id="About">
                <div className="py-5" id="about-scroll-target">
                    <h1 className="mb-5">About</h1>
                    <div className="row">
                        <div 
                            data-lax-translate-y = "vh 50, (vh*0.5) -20"
                            data-lax-opacity_sm = "vh 0, (vh/2) 1"
                            data-lax-opacity = "vh 0, (vh*0.7) 1" 
                            data-lax-anchor="#about-scroll-target"
                            className="col-sm-12 col-md-6 col-lg-3 lax">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut neque in corrupti fugit molestiae deleniti minus iure alias laborum atque.
                        </div>
                        <div
                            data-lax-opacity = "vh 0, (vh*0.7) 1" 
                            data-lax-opacity_sm = "vh 0, (vh/6) 1"
                            data-lax-translate-y = "vh 100, (vh*0.5) -20"
                            data-lax-anchor="#about-scroll-target"
                            className="col-sm-12 col-md-6 col-lg-3 lax"> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem cum ducimus accusamus ea iusto ullam quaerat? Vero eaque unde dolorum, laboriosam quidem fugiat nemo recusandae! Architecto, odio?
                        </div>
                        <div
                            data-lax-opacity = "vh 0, (vh*0.7) 1"
                            data-lax-translate-y = "vh 150, (vh*0.5) -20"
                            data-lax-anchor="#about-scroll-target"
                            className="col-sm-12 col-md-6 col-lg-3 lax"> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, illo tempora repellendus blanditiis consequatur repudiandae!
                        </div>
                        <div
                            data-lax-opacity = "vh 0, (vh*0.7) 1" 
                            data-lax-translate-y = "vh 200, (vh*0.5) -20"

                            data-lax-anchor="#about-scroll-target"
                            className="col-sm-12 col-md-6 col-lg-3 lax"> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, illo tempora repellendus blanditiis consequatur repudiandae!
                        </div>
                        
                    </div>
                </div>
            </Section>

            <div className="container-fluid p-0 m-0 moving-bg">
              <div className="h-moving-bg lax"
                    data-lax-translate-x="vh 0, 0 -1500" 
                    data-lax-anchor="self">
                </div> 
            </div>

                <div className="arrow-down lax"
                    data-lax-scale="vh 1.2, (vh/1.2) 1"
                    data-lax-opacity="vh 1, (vh/1.5) 1, 0 0"
                    data-lax-anchor="self"
                >
                    <Image src="arrows/popart-arrowdown.png"/>
                </div>

            <div className="container-fluid m-0 p-0">
                <div className="container lax"
                    data-lax-anchor="self"
                    data-lax-translate-y="vh 0"
                    >
                    <h1 className="text-center">Services</h1>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore delectus, assumenda expedita beatae quasi dolore esse magni explicabo reprehenderit consequatur. Deleniti, nulla sequi? Deserunt, optio?</p>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus recusandae eligendi laborum accusantium quidem impedit et assumenda laboriosam aliquam at a eveniet dolore cum expedita, provident nesciunt, optio magni eius culpa ipsam. Ipsa inventore molestiae optio! Reprehenderit ad dolorum quae explicabo magnam sunt porro perferendis quas iure iusto! Quos, iste!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore delectus, assumenda expedita beatae quasi dolore esse magni explicabo reprehenderit consequatur. Deleniti, nulla sequi? Deserunt, optio?</p>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus recusandae eligendi laborum accusantium quidem impedit et assumenda laboriosam aliquam at a eveniet dolore cum expedita, provident nesciunt, optio magni eius culpa ipsam. Ipsa inventore molestiae optio! Reprehenderit ad dolorum quae explicabo magnam sunt porro perferendis quas iure iusto! Quos, iste!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore delectus, assumenda expedita beatae quasi dolore esse magni explicabo reprehenderit consequatur. Deleniti, nulla sequi? Deserunt, optio?</p>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus recusandae eligendi laborum accusantium quidem impedit et assumenda laboriosam aliquam at a eveniet dolore cum expedita, provident nesciunt, optio magni eius culpa ipsam. Ipsa inventore molestiae optio! Reprehenderit ad dolorum quae explicabo magnam sunt porro perferendis quas iure iusto! Quos, iste!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </WithLocalStyles>
    <Footer/>
  </Layout>
)}

export default ParallaxLayout;


// local CSS
const WithLocalStyles = styled.div`
    .parallaxContent {
        background-color: var(--page-background-hex);
    }
    .arrow-down {
        width: 320px;
        height: 320px;
        margin: 0 auto;
    }
    .moving-bg {
        --height: 30vh;
        overflow: hidden;
        position: relative;
        box-shadow: inset 0 15px 35px black;
        background-color: #6a9ef7;
        height: var(--height);

        .h-moving-bg {
            position: absolute;
            top: 0;
            left: 0;
            background-image: url(${props => props.servicesBg});
            background-repeat: repeat;
            background-size: auto var(--height);
            height: 512px;
            width: 400vw;
            opacity: 0.5;

        }
    }
`