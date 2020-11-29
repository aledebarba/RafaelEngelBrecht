import React from "react"
import styled from "styled-components"
import {StarFill} from "@styled-icons/bootstrap/StarFill"
import {Cubes} from "@styled-icons/fa-solid/Cubes"

const Flipcard = props => {

  const FrontImage = props.frontImage ? props.frontImage : Cubes; 
  const BackImage  = props.backImage ? props.backImage : StarFill; 
  const randomId = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10)
  return (
    <WithStyle style={{...props.style}}>
      <div className="card">
        <input
          type="checkbox"
          id={randomId}
          className="rotate"
          aria-hidden="true"
        />
        <div className="card-body">
          <div className="front">
            <div className="card-image">
              {!props.frontImage && <FrontImage/>}
              {!!props.frontImage && <img src={props.frontImage} />}
            </div>
            {!!props.frontTitle && <h1>{props.frontTitle}</h1>}
            <div className="text">
                {!!props.frontText && props.frontText }
            </div>
            <div className="card-footer">
                <label for={randomId} aria-hidden="true" className="button">
                    {!!props.frontButton && <>props.frontButton</>}
                    {!props.frontButton && <>More Info</>}
                </label>
            </div>
          </div>
          <div className="back">
            <div className="card-image">
              {!props.backImage && <BackImage/>}
              {!!props.backImage && <img src={props.backImage} />}
            </div>
            { props.backTitle && <h1>{props.backTitle}</h1> }
            { props.backText && <div className="text">{props.backText}</div> }
            <div className="card-footer">
                <label for={randomId} className="button-return">
                  <svg viewBox="0 0 51 54" xmlns="http://www.w3.org/2000/svg" role="img" title="touch this arrow to flip the card">
                      <path d="M16 16V26.6667L0 13.3333L16 0V10.6667H29.3333C34.9913 10.6667 40.4175 12.9143 44.4183 16.9151C48.4191 20.9158 50.6667 26.342 50.6667 32C50.6667 37.658 48.4191 43.0842 44.4183 47.0849C40.4175 51.0857 34.9913 53.3333 29.3333 53.3333H5.33333V48H29.3333C33.5768 48 37.6465 46.3143 40.647 43.3137C43.6476 40.3131 45.3333 36.2435 45.3333 32C45.3333 27.7565 43.6476 23.6869 40.647 20.6863C37.6465 17.6857 33.5768 16 29.3333 16H16Z" style={{fill:"var(--back-button-icon-color)"}}/>
                  </svg>
                </label>
            </div>
          </div>
        </div>
      </div>
    </WithStyle>
  )
}

export default Flipcard

const WithStyle = styled.div`

    /* custom properties */
  --front-background: linear-gradient(135deg, #f8f8f8 35%, #c2c2c2);
  --front-text-color: #000000dd;
  --front-button-background: #000000dd;
  --front-button-text-color: #ffffff;
  --front-icon-color: #1f1f1f;
  --front-inset: 9px;
  --front-inset-border: 2px solid #ffffff88;
  --front-border-radius: 4px;

  --back-background: linear-gradient(135deg,#d9f4ff, #bbdfee 35%);
  --back-text-color: #2d2d2d;
  --back-button-background: #13305c;
  --back-button-text-color: #13305c;
  --back-button-icon-color: #ffffffcc;
  --back-icon-color: #3f3f3f;
  --back-inset: 9px;
  --back-inset-border: 2px solid #ffffff88;
  --back-border-radius: 4px;

    background-color: rgba(0,0,0,0);
    box-sizing: border-box;
    margin: 16px;
    display: inline-block;
    letter-spacing: -0.5px;
    line-height: 1.2rem;

    div {
        background-color: rgba(0, 0, 0, 0);
        border: none;
    }

    input.rotate {
        display: none;
        &:checked ~ .card-body {
        transform: rotateY(180deg);
        }
        &:checked ~ .card-body .front .rating {
        transition: all 0.2s ease;
        color: yellow;
        }
    }

    .card-body {
        position: relative;
        width: 300px;
        height: 438px;
        transform-style: preserve-3d;
        transition: transform 0.8s cubic-bezier(0.74, 0.04, 0.72, 0.83);
        
        .button,
        .button-return {
        padding: 12px 16px;
        background-color: var(--front-button-background);
        color: var(--front-button-text-color);
        border: none;
        border-radius: 6px;
        display: inline-block;
        transition: all 0.3s ease;
        margin-right: 8px;
        box-shadow: 1px 1px 2px 0px #00000088;
        max-width: 160px;
        &:hover {
              background-color: #888;
              color: black;
        }

        svg {
          min-width: 32px;
          fill: white;
          color: white;

        }
        }
        h1, h2, h3, h4, h5, h6, p, span, li, a, button {
          font-family: Montserrat, "Open+Sans", Arial, Helvetica, sans-serif;
        }
        h1 {
            margin: 0 0 16px 0;
            padding: 0;
            text-align: center;
            line-height: 1.6rem;
            font-size: 1.5rem;
            font-weight: normal;
        }

        .front,
        .back {
        perspective: 1000px;
        transform-style: preserve-3d;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
        flex-direction: column;
        } 
        .card-image {
          align-self: center;
          min-width: 64px; 

          img {
            padding: 0;
            margin: 0;
            max-height: 140px;
            width: auto;
          }
        }
        
        .text {
              overflow-y: scroll;
              overflow-x: hidden;
              margin: 8px 24px;
          }
          .rating {
            height: 48px;
            width: 100%;
            transform: translateZ(80px);
            text-align: center;
            
            svg {
                height: 32px;
                fill: var(--front-icon-color);
            }
        }

        
        .front {
          background: var(--front-background);
          transform: translateZ(-1px);
          border-radius: var(--front-border-radius);

          p, h1, h2, h3, li, .text {
                color: var(--front-text-color);
                transform: translate3d(0px, 0px, 40px) scale(0.96);
          }

          h1 { transform: translate3d(0px, calc(8px + var(--front-inset)), 40px) scale(0.96);}
          
          .card-image {
            color: var(--front-icon-color);
            margin-top: var(--front-inset);
            transform: translate3d(0px, calc(4px + var(--front-inset)), 40px);
          }

          &:after {
            content: '';
            position: absolute;
            top: var(--front-inset); 
            bottom: var(--front-inset); 
            right: var(--front-inset); 
            left: var(--front-inset);
            border: var(--front-inset-border);
            border-radius: var(--front-border-radius);
            z-index: 0;
          }          
        }

        .back {
        color: white;
        background:var(--back-background);
        transform: rotateY(180deg);
        border-radius: var(--back-border-radius);

        p, h1, h2, h3, li, .text { 
              color: var(--back-text-color);
              transform: translateZ(50px) scale(0.96);
        }

        h1 { transform: translate3d(0px, calc(8px + var(--front-inset)), 40px) scale(0.96);}

        .card-image {
          color: var(--front-icon-color);
          margin-top: var(--front-inset);
          transform: translate3d(0px, calc(4px + var(--back-inset)), 40px);
        }

        &:after {
            content: '';
            position: absolute;
            top: var(--back-inset); 
            bottom: var(--back-inset); 
            right: var(--back-inset); 
            left: var(--back-inset);
            border: var(--back-inset-border);
            border-radius: var(--back-border-radius);
            z-index: 0;
          }        
        }

        .card-footer {
            margin-top: auto;
            align-self: center;
            margin-bottom: 16px;
            transform: translateZ(80px) scale(0.8) translateY(-8px);
            z-index: 1;
        }
      }
`

