import React, { useEffect } from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contactform"
import styled from "styled-components"
// js libs
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// components
import Navbar from "../components/navbar"
import Image from "../components/image"
import { CardDeck, ServiceCard } from "../components/cards"

// this page elelemns
const headerBackground = require("../images/bluePrint.jpg")

// page component
const Index = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  useEffect(() => {
    gsap.from("#about-text", {
      scrollTrigger: {
        trigger: "#about-text",
        toggleActions: "play reverse play reverse",
        start: "top bottom",
      },
      x: -200,
      opacity: 0,
      duration: 1,
    })
    gsap.from("#about-image", {
      scrollTrigger: {
        trigger: "#about-image",
        toggleActions: "play reverse play reverse",
        start: "top bottom",
      },
      x: 200,
      opacity: 0,
      duration: 1,
    })
  })

  return (
    <WithStyle>
      <Layout>
        <Navbar
          useGsap
          menu={[
            { label: "Home", to: "#PageTop" },
            { label: "Areas", to: "#Areas" },
            { label: "Formação", to: "#Formacao" },
            { label: "Publicação", to: "#Publicacao" },
            { label: "Atendimento", to: "#Atendimento" },
            { label: "Contact", to: "#Footer" },
          ]}
        />

        <header>
          <div className="container h-75">
            <div className="row h-100 align-items-center">
              <div className="col-sm-12 col-md-6">
                <h1>Dr Rafael Engelbrecht</h1>
                <h2>Cirurgião Vascular e Endovascular</h2>
                <p>
                  Rafael Engelbrecht é formado em Medicina pela Escola Paulista
                  de Medicina - Universidade Federal de São Paulo e possui
                  residência médica nas áreas de Cirurgia Geral, Cirurgia
                  Vascular e Cirurgia Endovascular pela mesma Universidade.
                </p>
                <button className="btn btn-primary">Saiba Mais</button>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="header__image">
                  <Image src="header__image.png" />
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <section id="Areas">
            <div className="container">
              <h1>Áreas de atuação</h1>
              <h2>
                PRINCIPAIS ATUAÇÕES, TÉCNICAS E ÁREAS DE ATENDIMENTO
                ESPECIALIZADO
              </h2>
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <h3>Cirurgia Vascular e Endovascular</h3>
                  <ul>
                    <li>&nbsp;Cirurgia Endovascular (minimamente invasiva)</li>
                  </ul>
                  <h3>Doen&ccedil;a venosas</h3>
                  <ul>
                    <li> Insufici&ecirc;ncia venosa</li>
                    <li>
                      &nbsp;Varizes, vasinhos - tratamento cir&uacute;rgico e
                      escleroterapia
                    </li>
                    <li>&nbsp;Trombose venosa profunda (TVP), tromboflebite</li>
                  </ul>
                  <h3>Doen&ccedil;a arteriais</h3>
                  <ul>
                    <li>&nbsp;Oclus&atilde;o arterial cr&ocirc;nica e aguda</li>
                    <li>&nbsp;Feridas/&uacute;lceras</li>
                  </ul>
                  <h3>Infec&ccedil;&otilde;es</h3>
                  <ul>
                    <li>&nbsp;Erisipela</li>
                    <li>&nbsp;Celulite</li>
                  </ul>
                  <h3>Outras &aacute;reas</h3>
                  <ul>
                    <li> Cateteres: Port-o-cath, Permcath, PICC</li>
                    <li>
                      &nbsp;F&iacute;stula arteriovenosa para hemodi&aacute;lise
                    </li>
                    <li>
                      &nbsp;Doen&ccedil;as linf&aacute;ticas (cong&ecirc;nitas,
                      adquiridas e p&oacute;s-infecciosas)
                    </li>
                    <li>
                      &nbsp;Doen&ccedil;as/S&iacute;ndromes
                      reumatol&oacute;gicas e auto-imunes com acometimento
                      vascular
                    </li>
                    <li>&nbsp;Check-up vascular</li>
                  </ul>
                  <button className="link">
                    <img src={require("../images/pack/icon__linkedin.svg")} />
                    <a
                      href="https://www.linkedin.com/in/rafael-engelbrecht-ba271961"
                      target="_blank"
                    >
                      Veja Mais no Linkedin
                    </a>
                  </button>
                </div>
                <div className="col-sm-12 col-md-6">
                  <Image src="section_areas__composition-of-images.png" />
                </div>
              </div>
            </div>
          </section>
          <section id="Formacao">
            <div className="container">
              <h1 className="text-center">Formação Acadêmica</h1>
              <h2 className="text-center">
                CURSOS DE GRADUAÇÃO, PÓS GRADUAÇÃO, ESPECIALIZAÇÕES E
                RESIDÊNCIAS
              </h2>
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="row">
                    <div className="col">
                      <Image src="marca__unifesp.png" />
                    </div>
                    <div className="col">
                      <Image src="marca__epm.png" />
                    </div>
                  </div>
                  <ul>
                    <li>Graduação em Medicina</li>
                    <li>Residência em Cirurgia Geral</li>
                    <li>Residência em Cirurgia Vascular</li>
                    <li>Residência em Cirurgia Endovascular</li>
                  </ul>
                </div>
                <div className="col-sm-12 col-md-6">
                  <p>
                    Ganhador do &nbsp;
                    <strong>
                      2&ordm; Pr&ecirc;mio Emil Burihan da Sociedade Brasileira
                      de Angiologia e Cirurgia Vascular
                    </strong>{" "}
                    no ano de 2016 (3&ordm; lugar).
                  </p>
                  <p>
                    Possui experi&ecirc;ncia de trabalho no
                    <strong>&nbsp;Hospital do Rim</strong>, com pacientes
                    transplantados renais em vias de acesso para
                    hemodi&aacute;lise.
                  </p>
                  <p>
                    Atualmente, trabalha como{" "}
                    <strong>
                      Cirurgi&atilde;o Vascular e Endovascular no Hospital 9 de
                      Julho
                    </strong>{" "}
                    com pacientes internados, retaguarda de Pronto Socorro,
                    cirurgias eletivas e consultas ambulatoriais.
                  </p>
                  <button className="link">
                    <img
                      src={require("../images/pack/icon__lattes.svg")}
                      alt="Icone da Plataforma Lattes"
                    />
                    <a href="lattes.org" target="_blank">
                      Curriculum Lattes
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section id="Publicacao">
            <div className="container">
              <h1 className="text-center">Publicação</h1>
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <Image src="livro.png" style={{ maxWidth: 350 }} />
                  <button className="link">
                    <img
                      src={require("../images/pack/icon__book.svg")}
                      alt="icone de um livro fechado"
                    />
                    <a href="amazon.com" target="_blank">
                      Amazon
                    </a>
                  </button>
                  <button className="link">
                    <img
                      src={require("../images/pack/icon__book.svg")}
                      alt="icone de um livro fechado"
                    />
                    <a href="amazon.com" target="_blank">
                      Amazon
                    </a>
                  </button>
                </div>
                <div className="col-sm-12 col-md-6">
                  <h3>
                    Manual de Angiologia e Cirurgia Vascular e Endovascular
                    (2020)
                    <br />- Editora Manole
                  </h3>
                  <p>Participa&ccedil;&atilde;o:</p>
                  <ul>
                    <li>
                      Cap&iacute;tulo 6: Proped&ecirc;utica linf&aacute;tica ao
                      lado de Luis Carlos Uta Nakano
                    </li>
                    <li>
                      Cap&iacute;tulo 74: Complica&ccedil;&otilde;es das
                      angioplastias de car&oacute;tida ao lado de Luis Carlos
                      Uta Nakano
                    </li>
                    <li>
                      Cap&iacute;tulo 84: Angioplastia da veia cava inferior e
                      do segmento ileofemoral na insufici&ecirc;ncia venosa
                      cr&ocirc;nica, ao lado de Samuel Tomaz Ara&uacute;jo e
                      Ronald Luiz Gomes Flumignan.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section id="Atendimento">
            <div className="container">
              <h1 className="text-center">Locais de Atendimento</h1>
              <h2 className="text-center">
                Acesse os links para mais informações
              </h2>
              <div className="row">
                <div className="col-sm-6 col-md-3">
                  <img
                    src={require("../images/pack/logo__haoc.svg")}
                    alt="marca do Hospital Alemão Oswaldo Cruz"
                  />
                  <p>Hospital Alemão Oswaldo Cruz</p>
                </div>
                <div className="col-sm-6 col-md-3">
                  <img
                    src={require("../images/pack/logo__hospital-sirio-libanes.svg")}
                    alt="marca do Hospital Alemão Oswaldo Cruz"
                  />
                  <p>Hospital Sírio Libanês</p>
                </div>
                <div className="col-sm-6 col-md-3">
                  <img
                    src={require("../images/pack/logo__hospital-9-de-julho.svg")}
                    alt="marca do Hospital Alemão Oswaldo Cruz"
                  />
                  <p>Hospital 9 de Julho</p>
                </div>
                <div className="col-sm-6 col-md-3">
                  <img
                    src={require("../images/pack/logo__consultorio.svg")}
                    alt="marca do Hospital Alemão Oswaldo Cruz"
                  />
                  <p>Consultorio Particular</p>
                </div>
              </div>
              <div className="row calltoaction p-4">
                <div className="col-sm-6 col-md-2">
                  <Image src="cta__contact.png" style={{ maxWidth: 120 }} />
                </div>
                <div className="col-sm-6 col-md-5">
                  <p>
                    Por favor, sinta-se a vontade para ligar em nossa clínica e
                    conversar com o pessoal da recepção. Seu atendimento será
                    rápido e atencioso. <strong>11 3995-9852</strong>
                  </p>
                </div>
                <div className="col-sm-6 col-md-2">
                  <img
                    src={require("../images/pack/icon__place.svg")}
                    alt="icone de uma marcador de localização no mapa"
                  />

                  <spam>
                    Rua Pamplona, 145 cj 134 Jardim Paulista São Paulo SP
                  </spam>
                </div>
                <div className="col-sm-6 col-md-3">
                  <button className="btn btn-primary">
                    <img
                      src={require("../images/pack/icon__arrow-right-squared.svg")}
                      alt="icone de uma marcador de localização no mapa"
                    />
                    <spam>Marque sua consulta</spam>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div id="Footer">
            <div className="logo">
              <Image src="brand__white.png" alt="marca completa da clinica na cor branca"/>
            </div>
            <p className="text-center"><small>Esse site e seu conteúdo estão protegidos por leis de deireito autoral, tanto no brasil quanto no exterior. Antes de reproduzí-lo, no todo ou em parte, por favor entre em contato.</small></p>
          </div>
        </footer>
      </Layout>
    </WithStyle>
  )
}
export default Index

const WithStyle = styled.div`
  section {
    height: 100vh;
    background-color: var(--brand-white);
    padding: 64px 16px;
  }

  .link {
    color: var(--brand-black);
    background-color: rgba(0, 0, 0, 0);
    border: none;
    outline: none;
    text-decoration: underline;
    a {
      color: var(--link-color);
      &:hover {
        color: var(--link-color-hover);
      }
    }
    img {
      width: 24px;
      height: auto;
      margin-right: 8px;
    }
  }

  header {
    height: 100vh;
    background-color: var(--brand-white);
    padding-top: 80px;

    .btn {
      border-radius: 100px;
      padding: 8px 24px;
      background-color: var(--button-primary-background);
      color: var(--button-primary-text);
    }
  }

  #Areas {
    height: 100vh;
    padding: 64px 0px;
    background-color: var(--brand-white);
    box-shadow: inset 0px 4.40159px 165.059px #edd5c5;

    h1,
    h2 {
      text-align: center;
    }
  }

  #Formacao {
    background-image: url(${require("../images/pack/section_formacao_background.jpg")});
    background-size: cover;
    background-attachment: fixed;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        color: var(--brand-dark);
        &:before {
          content: "🎓";
        }
      }
    }
  }

  #Footer {
    .logo {
      width: 50%;
      max-width: 360px;
      margin: 64px auto;
    }
  }
`
