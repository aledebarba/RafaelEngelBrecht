import React from "react"
import Disclaimer from './disclaimer'
import Image from './image'
import ContactForm from './contactform'
import SocialNetworks from './socialnetworks'

const Footer = () => {
  
  const onSubmit = () => false;
  const handleSubmit = (data) => false;
  const register = (data) => false;

  return (
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
                instagram="https://instagram.com/"
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
)}

export default Footer
