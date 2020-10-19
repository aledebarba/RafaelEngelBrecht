import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from './image';

const Carousel = (props) => {

    const defaultSettings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        easing: 'ease',
        fade: false,
        vertical: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }
          ]
      };

      var settings = props.settings ? {...defaultSettings, ...props.settings} : defaultSettings;
      var labelStyles = {
        position: 'absolute',
        bottom: 0,
        margin: '0 0 -8px 0',
        padding: '4px 16px',
        borderRadius: 50,
        backgroundColor: '#2d2d2d',
        color: 'navajowhite',
        fontSize: '0.7rem',
        display: 'none'
      }
      const images = props.images.map((imageName, index) => {
        return(
          <div key={`key${imageName}_${index}`} style={{position: 'relative'}}>
              <Image src={imageName} alt="slide image" />
          </div>)
      })

      return (
        <Slider {...settings} >
            {images}
        </Slider>
      );
    }
  
  export default Carousel