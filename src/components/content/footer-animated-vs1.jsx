import React from "react"
import Disclaimer from '../disclaimer'
import Image from '../image'
import ContactForm from '../contactform'
import SocialNetworks from '../socialnetworks'
import styled, { keyframes } from 'styled-components'
import waveBack from '../../images/backgrounds/waveback.svg'
import waveMiddle from '../../images/backgrounds/wavemiddle.svg'
import waveFront from '../../images/backgrounds/wavefront.svg'

const Footer = () => {
  return (
  <div classNme="container-fluid m-0 p-0" style={{overflow: "hidden", width: "100vw"}} >
  <FluidAnimation waveBack={waveBack} waveMiddle={waveMiddle} waveFront={waveFront} />
  <footer id="Footer">
     <div className="container-fluid py-5">
       <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-6 pb-4">
              <Image src="footer-illustration.png" alt="Artistic illustration of a man leaning over a big @ symbol"/>
            </div>
            <div className="col-sm-12 col-md-6">
              <h3 className="text-center text-md-left pb-2">
                Send us a message!
              </h3>
              <p>You can contact-us by any social network channel or you can send a email message using the form bellow. Feel free to drop us a line!</p>
                <ContactForm subject="WEBSITE CONTACT" />
            </div>
        </div>
        <div className="row">
          <small className="text-center my-4">find us at social networks</small>
          <SocialNetworks size="32" center
                twitter="https://twitter.com/"
                facebook="https://facebook.com/"
                linkedin="https://linkedin.com/"
                instagram="https://instagram.com/"
                youtube="https://youtube.com/"
                tiktok="https://tiktok.com/"
                github="https://github.com/"
                pinterest="https://pinterest.com/"
                whatsapp="https://web.whatsapp.com/"
                telegram="https://telegram.com/"
                skype="https://skype.com/"
                email="https://email.com/"
              />
        </div>
      </div>
    </div>
    <div className="container-fluid py-4 disclaimer">
      <div className="container">
        <div className="row">
          <small className="text-left">
            <Disclaimer short lang="pt-br" />
          </small>
      </div>
    </div>
    </div>
  </footer>
  </div>
)}

export default Footer


const waveAnimFront = keyframes`
  0 % {
    background-position-x: 0;
  }
  100% {
    background-position-x: 1800px;
  }
`
const waveAnim = keyframes`
  0 % {
    background-position-x: 0;
  }
  100% {
    background-position-x: 3840px;
  }
`

const FluidAnimation =styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 400vw;
  height: 50px;
  background-image: url(${props => props.waveMiddle});
  background-position-y: 0px;
  background-repeat: repeat-x;
  overflow: hidden;
  animation: ${waveAnim} 10s ease-in-out infinite alternate;

  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-repeat: repeat-x;
    width: 400vw;
    height: 200px;
  }

  &:before { //backlayer
    background-image: url(${props => props.waveBack});
    top: 0px;
    animation: ${waveAnim} 15s ease-in-out infinite alternate;
    background-position-y: 0px;
    opacity: 0.7;
  }

  &:after { // uplayer - most in front
    background-image: url(${props => props.waveFront});
    top: 0px;
    animation: ${waveAnimFront} 2800ms cubic-bezier(0.4, 0.02, 0.54, 0.92) infinite alternate;
    background-position-y: 0px;
    opacity: 1;
  }
`
