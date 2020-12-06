import React from 'react'
import styled from 'styled-components'
import Carousel from './carousel'

const CarouselCard = () => {
    return(
        <WithStyle>
        <div className="card card--custom-background">
        <div className="card__info">
            <div className="card__body">
            <h6><span className='card__emoji'>⭐ </span>SERVIÇOS LOCAIS</h6>
            <h1>BIM área elétrica</h1>
            <div className="card__text">
                <p>In egestas ut eu semper scelerisque quam eget tincidunt rhoncus, nec viverra sed sed parturient gravida cursus nulla integer ipsum aliquam, magna ultrices varius velit quam velit ac ut pretium nec auctor nulla ultrices eget massa morbi fames faucibus aliquam. Magna ultrices varius velit quam velit ac ut pretium nec auctor nulla ultrices eget massa morbi fames faucibus aliquam.</p>
            </div>
            <div className="card__footer">
                <button>Hire Us</button>
                <button>More About</button>
            </div>
            </div>
        </div>
        <div className="card__slides">
            <div className="card__slides__item">
            <img src="https://www.bgaprojeto.com/figma-assets/slide-image-0.jpg" alt="slide images" />
            </div>
            <div className="card__slides__item">
            <img src="https://www.bgaprojeto.com/figma-assets/slide-image-1.jpg" alt="slide images" />
            </div>
            <div className="card__slides__item">
            <img src="https://www.bgaprojeto.com/figma-assets/slide-image-2.jpg" alt="slide images" />
            </div>
            <div className="card__slides__item">
            <img src="https://www.bgaprojeto.com/figma-assets/slide-image-3.jpg" alt="slide images" />
            </div>
        </div>
        </div>
    </WithStyle>
    )
}

export default CarouselCard

const WithStyle = styled.div`
  .card {
    --border-radius: 32px;
    --card-background: #ffffff99;
    --card-icon-background: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
    --box-shadow: 2px 2px 10px 0px rgba(48, 48, 48, 0.25),
      -2px -2px 10px 0px rgba(48, 48, 48, 0.25);
    --button-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.2);
    --card-body-background: linear-gradient(147deg, #ffe49b 0%, #ffc69b 74%);
    --card-body-shadow: 0px 25px 10px 3px #00000033, -10px 10px 10px 3px #00000033,
      10px 10px 10px 3px #00000033;
    --text-color: #444;
    --title-color: var(--text-color);
    --button-radius: 50px;
    --button-text-color: #ffdead;
    --button-text-color-hover: black;
    --button-background: #3d3d3d;
    --button-background-hover: linear-gradient(147deg, #ffe53b 0%, #fd3838 74%);
  }
  
  .card {
    position: relative;
    width: 92vw;
    max-width: 360px;
    margin: 32px auto;
    display: flex;
    flex-direction: column;
    color: var(--text-color);
  
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--card-background);
      background-size: 35%;
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
      z-index: 0;
    }
  
    @media (min-width: 768px) {
      max-width: 740px;
      box-shadow: none;
      flex-direction: row;
  
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 340px;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
      }
    }
  
    &__emoji {
      color: #00000000;
      text-shadow: 0px 0px 0px black;
      filter: grayscale(100%) brightness(0);
      opacity: 0.5;
    }
  
    &__body {
      position: relative;
      margin: -16px 24px 24px;
      padding: 32px;
      border-radius: var(--border-radius);
      flex-direction: column;
      background: var(--card-body-background);
      box-shadow: var(--card-body-shadow);
      z-index: 3;
      @media (min-width: 768px) {
        margin: 64px 32px 32px;
      }
      h6 {
        padding: 0;
        margin: 0px 0px 12px 0px;
      }
  
      h1 {
        margin: 0;
        padding: 0;
        width: 80%;
        color: var(--title-color);
        font-size: 1.5rem;
        @media (min-width: 768px) {
          width: 100%;
        }
      }
  
      .card__text {
        height: 280px;
        margin: 16px 0px;
        overflow-y: auto;
        p {
          margin: 0px;
          padding: 0px;
        }
      }
      .card__footer {
        justify-self: end;
        margin: 16px 0 0 0;
  
        button {
          background: var(--button-background);
          box-shadow: var(--button-shadow);
          color: var(--button-text-color);
          border-radius: var(--button-radius);
          transition: all 600ms ease;
          border: 0px;
          padding: 8px 16px;
          margin: 4px;
          &:hover {
            background: var(--button-background-hover);
            color: var(--button-text-color-hover);
            transition: all 300ms ease;
            box-shadow: var(--button-shadow), var(--button-shadow);
          }
        }
      }
    }
    &__info {
      background-color: var(--main-bg-color);
      border-radius: var(--border-radius);
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      order: 2;
      width: 330px;
      @media (min-width: 768px) {
        order: 1;
        width: 380px;
        min-height: 480px;
      }
    }
  
    .card__slides {
      order: 1;
      z-index: 1;
      position: relative;
      width: 80%;
      border-radius: var(--border-radius);
      overflow: hidden;
      box-shadow: var(--box-shadow);
      margin-left: auto;
      margin-right: auto;
      margin-top: -32px;
      @media (min-width: 768px) {
        margin-left: -150px;
        margin-top: 32px;
        margin-bottom: auto;
      }
  
      .card__slides__item {
        width: 100%;
      }
      img {
        width: 100%;
      }
    }
  }
  
  //slick carousel custom css
  .slick-prev {
    left: 16px;
    z-index: 1;
  }
  .slick-next {
    right: 16px;
    z-index: 1;
  }
  .slick-dots {
    z-index: 1;
    bottom: 8px;
  }
  
  .card--custom-background:after {
    background-image: url("data:image/svg+xml;utf8,%3Csvg%20width%3D%22799%22%20height%3D%22725%22%20viewBox%3D%220%200%20799%20725%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%22138%22%20y%3D%22240.001%22%20width%3D%22347.039%22%20height%3D%2286.3292%22%20rx%3D%2243.1646%22%20transform%3D%22rotate(-31.0506%20138%20240.001)%22%20fill%3D%22%23ABD7FF%22%2F%3E%0A%3Crect%20x%3D%22435%22%20y%3D%22202.001%22%20width%3D%22347.039%22%20height%3D%2286.3292%22%20rx%3D%2243.1646%22%20transform%3D%22rotate(-31.0506%20435%20202.001)%22%20fill%3D%22%23ABD7FF%22%2F%3E%0A%3Crect%20x%3D%2274%22%20y%3D%22438.001%22%20width%3D%22347.039%22%20height%3D%2286.3292%22%20rx%3D%2243.1646%22%20transform%3D%22rotate(-31.0506%2074%20438.001)%22%20fill%3D%22%23ABD7FF%22%2F%3E%0A%3Crect%20x%3D%22457%22%20y%3D%22364.001%22%20width%3D%22347.039%22%20height%3D%2286.3292%22%20rx%3D%2243.1646%22%20transform%3D%22rotate(-31.0506%20457%20364.001)%22%20fill%3D%22%23CDE7FF%22%2F%3E%0A%3Crect%20x%3D%22412%22%20y%3D%22577.001%22%20width%3D%22347.039%22%20height%3D%2286.3292%22%20rx%3D%2243.1646%22%20transform%3D%22rotate(-31.0506%20412%20577.001)%22%20fill%3D%22%23CDE7FF%22%2F%3E%0A%3Crect%20y%3D%22651.001%22%20width%3D%22347.039%22%20height%3D%2286.3292%22%20rx%3D%2243.1646%22%20transform%3D%22rotate(-31.0506%200%20651.001)%22%20fill%3D%22%23CDE7FF%22%2F%3E%0A%3Ccircle%20cx%3D%22526.5%22%20cy%3D%2246.5%22%20r%3D%2246.5%22%20fill%3D%22%23CDE7FF%22%2F%3E%0A%3Ccircle%20cx%3D%22388.5%22%20cy%3D%22444.5%22%20r%3D%2246.5%22%20fill%3D%22%23ABD7FF%22%2F%3E%0A%3C%2Fsvg%3E%0A");
    background-size: 40%;
  }  
` 