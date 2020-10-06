import React from "react"

const Header = ({children}) => {
  return (
  <header id="header">
    {children}
  </header>
)
}
export default Header

export const HeroHeader = () => {
  return (
  <header id="heroheader">
    <div className="container">
      <h3>Simple Subtitle Text</h3>
    <h1>The big message is here, use with inteligence</h1>
    <button className="btn btn-primary">Call to action</button>
    <div className="video-container">
      <video
          playsInline="playsinline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
          poster="./mobile-no-movie.jpg"
        >
          <source
            src="https://forle.uxdir.com/wp-content/uploads/2020/03/Hero-Movie.mp4"
            type="video/mp4"
          />
          <track></track>
        </video>
      </div>
  </div>
</header>
)} 

//Hero header with video as background
export const HeroVideoBackground = (props) => (
<>
</>
)