import React, { useEffect } from "react"
import styled from "styled-components"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "../components/image"
import Carousel from '../components/carousel'
import Layout from "../components/layout"
import Navbar from "../components/navbar"

const headerBackground = require("../images/bluePrint.jpg")

const IndexGsap = props => {

  useEffect(() => {
    gsap.from(".hText", { y: 50, opacity: 0, duration: 1, stagger: 0.3 })
    gsap.from("#headerImage", { x: 200, opacity: 0, duration: 1, delay: 0.5 })
  }, [])
  return (
    <WithLocalStyles>
      <Layout>
        <Navbar />
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
          <section id='About' className=''>
            <div className='container-fluid py-5'>
              <div className='container'>
                <h1>Sobre nós</h1>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4'>
                  <div className='col'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia doloribus illo rem obcaecati, dolor maiores totam hic accusantium eum ad veniam veritatis qui est vero expedita omnis minus fugit quis molestiae repudiandae? Sequi, blanditiis iusto voluptatibus maiores distinctio maxime totam eius sit porro beatae corporis quibusdam laudantium sint obcaecati, nostrum quidem rerum dolor labore accusamus adipisci molestias aliquam ipsa? Assumenda, cum excepturi? Illum magnam ducimus architecto mollitia. Expedita molestiae consequuntur, magni, neque architecto totam, quis iste illum esse consectetur possimus! Accusantium magnam porro molestiae quis incidunt earum architecto expedita, nemo eligendi. Quo error eveniet, recusandae ullam quos illo alias quaerat!</p> 
                  </div>
                  <div className='col'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempora numquam molestiae eos, fugit eveniet dicta itaque molestias modi commodi quos aliquid ab non natus aut laudantium veniam distinctio dolor incidunt optio at soluta ipsa. Laborum numquam veniam distinctio cupiditate nemo. Magnam vitae veniam culpa deleniti eius provident obcaecati pariatur!</p>
                  </div>
                  <div className='col'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero rem, fugit corrupti accusantium quisquam recusandae cupiditate, et, esse inventore dicta voluptatum. Pariatur, qui? Qui, ea suscipit aliquam saepe, animi corrupti enim odit vel quaerat aliquid itaque id iste facilis minima nobis reiciendis magnam soluta velit recusandae officiis? Ad delectus quo vero iste fuga labore velit vel minus accusamus, ex eum, obcaecati saepe aperiam quos impedit reprehenderit ipsum. Aperiam aspernatur qui consectetur amet voluptas sapiente odio.</p>
                  </div>
                  <div className='col'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deserunt aspernatur nisi excepturi, voluptates veniam atque consequatur, explicabo magni eum doloremque quam necessitatibus quae ad quidem repellendus suscipit temporibus maiores tenetur. Corrupti ad ex voluptas praesentium possimus magnam beatae odit consequuntur illo! Veritatis consequatur nihil saepe optio hic alias. Deserunt harum iste facere voluptatem ipsa optio iure accusamus aut culpa repudiandae. Eaque quaerat dolor exercitationem dolorum, dolore quasi. Sit earum velit maiores nobis voluptates corrupti quis quidem eius commodi harum.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id='Services' className=''>
            <div className='container-fluid py-5'>
              <div className='container'>
                <h1>Nossos Serviços</h1>
                <div className='row row-cols-1 row-cols-md-2'>
                  <div className='col servico-desc'>
                    <icon name='icon-name'></icon>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nemo explicabo commodi laboriosam cum asperiores aut eveniet laborum deserunt ea incidunt unde quas, ab veritatis eligendi placeat</p>
                    <button 
                      className="btn btn-info" 
                      type="button" 
                      data-toggle="collapse" 
                      data-target="#servico1"
                      aria-expanded="false" 
                      aria-controls="servico1">
                        Saiba mais
                      </button>
                      <div id="servico1" className="collapse">
                        <p style={{backgroundColor:"lightsalmon", color: 'maroon'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam rerum suscipit minus ut nam, voluptates cum iste qui ipsum neque saepe ipsa, laboriosam commodi vitae? Recusandae ipsam dolorum, nemo labore id facere ipsa in, commodi consequatur fugit eligendi at vero, eius deleniti. Eius ullam repellendus consequatur, dolor quibusdam alias assumenda, provident neque necessitatibus distinctio totam quis natus molestias cupiditate numquam dolores laudantium labore, soluta doloribus repellat dolorem iure. Doloribus velit non ea ad explicabo commodi hic officiis quia fugit inventore architecto delectus sapiente libero eligendi, sunt placeat ipsam nesciunt necessitatibus numquam animi repudiandae laboriosam temporibus? Vitae rem quasi architecto quos dolores possimus itaque animi amet. Harum quia aspernatur assumenda neque dolores enim impedit nesciunt perspiciatis corporis nobis. Deserunt, odio iure!</p>
                      </div>
                  </div>
                  <div className='col servico-desc'>
                    <icon name='icon-name'></icon>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat deleniti possimus neque voluptate, vel quos modi obcaecati mollitia sit voluptatem provident aperiam ut distinctio iusto ipsa recusandae assumenda explicabo at sapiente aut? Maxime illo et tempora! Expedita qui totam, labore earum, sit, magni inventore itaque iure enim velit ad.</p>
                    <button 
                      className="btn btn-info" 
                      type="button" 
                      data-toggle="collapse" 
                      data-target="#servico2"
                      aria-expanded="false" 
                      aria-controls="servico2">
                        Saiba mais
                      </button>
                      <div id="servico2" className="collapse">
                        <p style={{backgroundColor:"lightsalmon", color: 'maroon'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam rerum suscipit minus ut nam, voluptates cum iste qui ipsum neque saepe ipsa, laboriosam commodi vitae? Recusandae ipsam dolorum, nemo labore id facere ipsa in, commodi consequatur fugit eligendi at vero, eius deleniti. Eius ullam repellendus consequatur, dolor quibusdam alias assumenda, provident neque necessitatibus distinctio totam quis natus molestias cupiditate numquam dolores laudantium labore, soluta doloribus repellat dolorem iure. Doloribus velit non ea ad explicabo commodi hic officiis quia fugit inventore architecto delectus sapiente libero eligendi, sunt placeat ipsam nesciunt necessitatibus numquam animi repudiandae laboriosam temporibus? Vitae rem quasi architecto quos dolores possimus itaque animi amet. Harum quia aspernatur assumenda neque dolores enim impedit nesciunt perspiciatis corporis nobis. Deserunt, odio iure!</p>
                      </div>
                  </div>
                  <div className='col servico-desc'>
                    <icon name='icon-name'></icon>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit assumenda cumque placeat atque soluta exercitationem, excepturi animi tempore nesciunt tempora accusantium voluptatibus ipsa fugit aliquid ipsum doloribus eveniet consequuntur reiciendis asperiores dolorem delectus doloremque nobis? Molestias ad vel nihil eveniet quod accusamus officia vitae velit repellat, delectus quos voluptatibus numquam mollitia dicta? Nesciunt non, quae voluptatibus perspiciatis magni, porro odit expedita ut minima debitis explicabo animi illo libero praesentium eveniet mollitia natus facere itaque!</p>
                    <button 
                      className="btn btn-info" 
                      type="button" 
                      data-toggle="collapse" 
                      data-target="#servico3"
                      aria-expanded="false" 
                      aria-controls="servico3">
                        Saiba mais
                      </button>
                      <div id="servico3" className="collapse">
                        <p style={{backgroundColor:"lightsalmon", color: 'maroon'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam rerum suscipit minus ut nam, voluptates cum iste qui ipsum neque saepe ipsa, laboriosam commodi vitae? Recusandae ipsam dolorum, nemo labore id facere ipsa in, commodi consequatur fugit eligendi at vero, eius deleniti. Eius ullam repellendus consequatur, dolor quibusdam alias assumenda, provident neque necessitatibus distinctio totam quis natus molestias cupiditate numquam dolores laudantium labore, soluta doloribus repellat dolorem iure. Doloribus velit non ea ad explicabo commodi hic officiis quia fugit inventore architecto delectus sapiente libero eligendi, sunt placeat ipsam nesciunt necessitatibus numquam animi repudiandae laboriosam temporibus? Vitae rem quasi architecto quos dolores possimus itaque animi amet. Harum quia aspernatur assumenda neque dolores enim impedit nesciunt perspiciatis corporis nobis. Deserunt, odio iure!</p>
                      </div>
                  </div>
                  <div className='col servico-desc'>
                    <icon name='icon-name'></icon>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolore aliquid aliquam vitae repellat minus labore recusandae ullam corrupti! Qui, porro facilis nesciunt ipsum voluptate eveniet quidem doloremque inventore provident.</p>
                    <button 
                      className="btn btn-info" 
                      type="button" 
                      data-toggle="collapse" 
                      data-target="#servico4"
                      aria-expanded="false" 
                      aria-controls="servico4">
                        Saiba mais
                      </button>
                      <div id="servico4" className="collapse">
                        <p style={{backgroundColor:"lightsalmon", color: 'maroon'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam rerum suscipit minus ut nam, voluptates cum iste qui ipsum neque saepe ipsa, laboriosam commodi vitae? Recusandae ipsam dolorum, nemo labore id facere ipsa in, commodi consequatur fugit eligendi at vero, eius deleniti. Eius ullam repellendus consequatur, dolor quibusdam alias assumenda, provident neque necessitatibus distinctio totam quis natus molestias cupiditate numquam dolores laudantium labore, soluta doloribus repellat dolorem iure. Doloribus velit non ea ad explicabo commodi hic officiis quia fugit inventore architecto delectus sapiente libero eligendi, sunt placeat ipsam nesciunt necessitatibus numquam animi repudiandae laboriosam temporibus? Vitae rem quasi architecto quos dolores possimus itaque animi amet. Harum quia aspernatur assumenda neque dolores enim impedit nesciunt perspiciatis corporis nobis. Deserunt, odio iure!</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="Parceiros">
            <div className="container-fluid">
              <div className="container">
              <h1 className="py3">Nossos Parceiros</h1>
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

          <section id='Cases' className=''>
            <div className='container-fluid py-5'>
              <div className='container'>
                <h1>Cases do Portfolio</h1>
                <div className='row'>
                  <Carousel images={[
                    'slides/case-slide-1.jpg',
                    'slides/case-slide-2.jpg',
                    'slides/case-slide-3.jpg',
                    'slides/case-slide-4.jpg',
                    'slides/case-slide-5.jpg',
                    'slides/case-slide-6.jpg'
                  ]
                  }/>

                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className="container-fluid">
            <div className="container">
              <div className="row">
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
          </div>
        </footer>
      </Layout>
    </WithLocalStyles>
  )
}
export default IndexGsap

const WithLocalStyles = styled.div`
 
  header,
  footer {
    height: 100vh;
    background-color: #f2f2f2;
    position: relative;
  }

  main {
    background-color: #999999;
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
`
