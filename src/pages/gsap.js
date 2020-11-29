import React, { useEffect } from "react"
import Layout from "../components/layout"
import ContactForm from '../components/contactform'
import styled from "styled-components"
// js libs
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// components
import Navbar from "../components/navbar"
import Image from "../components/image"
import Carousel from '../components/carousel'
import { CardDeck,ServiceCard } from '../components/cards'

// this page elelemns
const headerBackground = require("../images/bluePrint.jpg")

// page component
const IndexGsap = () => {

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
  }, [])

  useEffect(() => {
    gsap.from ("#about-text",  {
            scrollTrigger: {
                trigger: "#about-text",
                toggleActions: "play reverse play reverse",
                start: "top bottom"
              }, x: -200, opacity: 0, duration: 1})
    gsap.from ("#about-image", {scrollTrigger: {
                                  trigger: "#about-image",
                                  toggleActions: "play reverse play reverse",
                                  start: "top bottom"
                                }, x: 200, opacity: 0, duration: 1})
    ScrollTrigger.create ({
         trigger: "#Portfolio",
         start: "top top",
         pin: true,
         pinSpacing: false
      }
    )
  })

  return (
    <UseLocalStyles>
      <Layout>
        <Navbar useGsap menu={[ 
          { label: "Home",     to: "#PageTop" },
          { label: "About",    to: "#About" },
          { label: "Services", to: "#Services" },
          { label: "Parceiros",to: "#Parceiros" },
          { label: "Portfolio",to: "#Portfolio" },
          { label: "Contact",  to: "#Footer" },
        ]}/>

        <header>
            <div id="videoBG">
                <video autoPlay muted loop>
                    <source
                    src="https://uxdir.com/assets/movies/homepage-movie.mp4"
                    type="video/mp4"
                />
                </video>
            </div>
            <div className="container p-5 align-items-center justify-content-center">
            <div
              className="row justify-content-center align-items-center h-100"
              
              style={{border: "5px solid red"}}
            >
              <div className="col-sm-12 col-md-6">
                <h1 className="hText">BGA PROJETO</h1>

                <button className="btn btn-dark" id="headerButton">
                  Say Hello
                </button>
              </div>
              <div className="col-sm-12 col-md-6">
                <div id="headerImage">
                  <Image src="header-illustration.png"></Image>
                </div>
              </div>
            </div>
          </div>
          <div id="headerBox"></div>
        </header>

        <main>
        <section id='About'>
            <div className='container-fluid py-5'>
              <div className='container'>
                <h1>Sobre nós</h1>
                <div className='row'>
                  <div className='col-sm-12 col-md-6' id="about-text">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia doloribus illo rem obcaecati, dolor maiores totam hic accusantium eum ad veniam veritatis qui est vero expedita omnis minus fugit quis molestiae repudiandae? Sequi, blanditiis iusto voluptatibus maiores distinctio maxime totam eius sit porro beatae corporis quibusdam laudantium sint obcaecati, nostrum quidem rerum dolor labore accusamus adipisci molestias aliquam ipsa? Assumenda, cum excepturi? Illum magnam ducimus architecto mollitia. Expedita molestiae consequuntur, magni, neque architecto totam, quis iste illum esse consectetur possimus! Accusantium magnam porro molestiae quis incidunt earum architecto expedita, nemo eligendi. Quo error eveniet, recusandae ullam quos illo alias quaerat!</p> 
                  </div>
                  <div className='col-sm-12 col-md-6' id="about-image">
                    <img src={headerBackground} alt="dummy" style={{height: 500}}/>
                  </div>
                </div>
              </div>
            </div>

            <div id='Services' className='container-fluid py-5'>
              <div className='container'>
                <h1 className='text-center py-3'>Section Title</h1>
                <CardDeck>
                  <ServiceCard
                    image="slides/case-slide-1.jpg"
                    title="Projetos BIM"
                    subtitle="Desenvolvimento"
                    text="Consequat duis ea anim duis aliquip eu cupidatat aliqua eu."
                  />
                  <ServiceCard
                    image="slides/case-slide-2.jpg"
                    title="Projetos BIM"
                    subtitle="Desenvolvimento"
                    text="Incididunt adipisicing ullamco reprehenderit exercitation. Consequat duis ea anim duis aliquip eu cupidatat aliqua eu."
                  />
                  <ServiceCard
                    image="slides/case-slide-3.jpg"
                    title="Projetos BIM"
                    subtitle="Desenvolvimento de qualidade"
                    text="Veniam proident laboris veniam eu cillum nulla. Consequat duis ea anim duis aliquip eu cupidatat aliqua eu."
                  />
                </CardDeck>
              </div>
            </div>

            <div id="Parceiros" className="container-fluid">
              <div className="container">
              <h1 className="text-center py-4">Nossos Parceiros</h1>
              <div className="row logos">
                  <Image src="partners-logos/partner_logo_1.png" alt="partner symbol" />              
                  <Image src="partners-logos/partner_logo_2.png" alt="partner symbol" />              
                  <Image src="partners-logos/partner_logo_3.png" alt="partner symbol" />              
                  <Image src="partners-logos/partner_logo_4.png" alt="partner symbol" />              
                  <Image src="partners-logos/partner_logo_5.png" alt="partner symbol" />              
                  <Image src="partners-logos/partner_logo_6.png" alt="partner symbol" />              
                  <Image src="partners-logos/partner_logo_7.png" alt="partner symbol" />              
                  <Image src="partners-logos/partner_logo_8.png" alt="partner symbol" />              
                  <Image src="partners-logos/partner_logo_9.png" alt="partner symbol" />              
                  <Image src="partners-logos/partner_logo_10.png" alt="partner symbol" />              
                  <Image src="partners-logos/partner_logo_11.png" alt="partner symbol" />              
                  <Image src="partners-logos/partner_logo_12.png" alt="partner symbol" />              
                  <Image src="partners-logos/partner_logo_13.png" alt="partner symbol" />   
                </div>           
              </div>
            </div>
          </section>

          <section id='Portfolio' className='portfolio'>
          <h1 className="text-center py-4">Cases do Portfolio</h1>
              <div className='container'>
                
                <div className='row p-2'>
                  <Carousel 
                    images={[
                      'slides/case-slide-1.jpg',
                      'slides/case-slide-2.jpg',
                      'slides/case-slide-3.jpg',
                      'slides/case-slide-4.jpg',
                      'slides/case-slide-5.jpg',
                      'slides/case-slide-6.jpg'
                    ]}
                    settings={{
                      autoplay: true,
                      autoplaySpeed: 500,
                    }}
                  />
                </div>
              </div>
          </section>

        </main>

        <footer>
          <div className="container-fluid" id="Footer">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-sm-12">
                  <Image src="general-google-maps.png" alt="mapa da area em nossa localização" className="footermap"/>
                </div>
                <div className="col-sm-12 col-md-6 align-self-center">
                  <ContactForm subject="WEBSITE CONTACT" />                
                </div>
              </div>
              <div className="row justify-content-center p-5">
                <div className="col-sm-12 col-md-4">  
                <h3>Titulo</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem reprehenderit debitis quasi similique eveniet
                    omnis itaque soluta officiis, explicabo vero!
                  </p>
                </div>
                <div className="col-sm-12 col-md-4">
                  <h3>Titulo</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus eaque provident totam consequatur! Dignissimos
                    eveniet rem nulla rerum aut. Excepturi!
                  </p>
                </div>
                <div className="col-sm-12 col-md-4">
                  <h3>Titulo</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    similique facilis officia, incidunt cupiditate commodi
                    tenetur. Inventore quod eaque suscipit!
                  </p>
                </div>
              </div>
            </div>
            <p className="last-line"><small>Este site e todo o seu conteúdo estão protegidos por leis de direito autoral nacionais e internacionais. Por favor, antes de reproduzi-los em todo ou em parte, entre em contato.</small></p>
          </div>
          
        </footer>
      </Layout>
    </UseLocalStyles>
  )
}
export default IndexGsap

const UseLocalStyles = styled.div`
 
  header,
  footer {
    height: 100vh;
    background-color: #f2f2f2;
    position: relative;
  }

  main {
    background-color: #999999;
    overflow-x: hidden;
  }

  header {

    position: relative;
    height: 100vh;
    width: 100%;
    max-width: 100vw;
    overflow: hidden;
    #videoBG {
      position: absolute;
      height: 100vh;
      max-width: 100vw;
      overflow: hidden;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
        video {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: 106vh;
          width: auto;
        }
    }

    #headerText {
      button {
        width: 150px;
      }
    }
    #headerBox {
      position: absolute;
      border: 15px solid lightseagreen;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 320px;
      height: 240px;
      opacity: 1;
    }
    #headerButton {
    }
    #headerImage {
      opacity: 1;
    }
  }
  #Parceiros {
    padding-top: 80px; 
    min-height: 30vh;

    .logos {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      padding: 16px;
    }
    .logos div {
      width: 100px;
    }
  }

  .servico-desc {
    margin-bottom: 16px;
  }

  #Portfolio {
    background-color: #d2d2d2;
    min-height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    
  }

  #Footer {
    position: relative;
    min-height: 100vh;
    padding-top: 90px;
    padding-bottom: 32px;
    box-shadow: 0px -15px 32px 5px rgba(0,0,0,0.5);


    .last-line {
      position: absolute;
      bottom: 0;
      width: 100%;
      max-width: 960px;
      left: 50%; transform: translateX(-50%);
      text-align: center;
      padding-top: 32px;
      padding-bottom: 8px;
      color: rgba(0,0,0,0.5);
    }
  }

  #About {
    position: relative;
    background-color: #d2d2d2;
  }

  #About:before {
    position: absolute;
    content: '';
    top: 0; left: 0; bottom: 0; right: 0;
    background-image: url(${require('../images/wireframe-building.png')});
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: 150%;
    opacity: 0.3;
  }
`