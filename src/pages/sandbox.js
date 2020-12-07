import React from "react"
import FlipCard from '../components/flipcard'
import cardBG from "../images/bluePrint.jpg"

const SandBox = () => {

    const frontBG =  `linear-gradient(#7FAEFFEE, #7FAEFFAA), url('${cardBG}')`;
    const backBG = `linear-gradient(#FFEAB5EE, #FFEAB5AA), url('${cardBG}')`;

    const frontImage = require("../images/header-illustration.png");
    const backImage  = require("../images/footer-illustration.png");

    return (
    <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
                <FlipCard 
                    // card front
                    frontImage={frontImage}
                    frontTitle="Card front title"
                    frontText={
                        <p>This is the text on <strong>card front</strong>. It will scroll if bigger then text area Elit aliqua eu cupidatat ut sit ullamco esse dolore anim ipsum. Sit enim ipsum velit enim cupidatat nostrud officia nulla irure amet pariatur ad.Dolor in nisi aute anim qui voluptate. Nostrud amet nostrud ipsum excepteur et nisi et duis eiusmod quis culpa exercitation ut enim.</p>}
                    // card back
                    backImage={backImage}
                    backTitle="Card back title"
                    backText={<>
                    <h3 style={{textAlign: "center"}}>Title</h3>
                    <p>This is awsome details</p>
                    <p>Lorem voluptate ex sunt pariatur elit tempor irure aute anim incididunt laboris nulla sunt nisi. Ex nostrud consequat duis qui qui fugiat nostrud minim. Ad laboris voluptate incididunt ullamco consectetur quis ea. Pariatur officia esse culpa deserunt sit qui ex sint incididunt occaecat nisi pariatur voluptate ad.</p>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                    </>}
                    style={{"--front-background":frontBG, "--back-background": backBG}}
                />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <FlipCard 
                    // card front
                    frontImage={frontImage}
                    frontTitle="Card front title"
                    frontText={
                        <p>This is the text on <strong>card front</strong>. It will scroll if bigger then text area Elit aliqua eu cupidatat ut sit ullamco esse dolore anim ipsum. Sit enim ipsum velit enim cupidatat nostrud officia nulla irure amet pariatur ad.Dolor in nisi aute anim qui voluptate. Nostrud amet nostrud ipsum excepteur et nisi et duis eiusmod quis culpa exercitation ut enim.</p>}
                    // card back
                    backImage={backImage}
                    backTitle="Card back title"
                    backText={<>
                    <h3 style={{textAlign: "center"}}>Title</h3>
                    <p>This is awsome details</p>
                    <p>Lorem voluptate ex sunt pariatur elit tempor irure aute anim incididunt laboris nulla sunt nisi. Ex nostrud consequat duis qui qui fugiat nostrud minim. Ad laboris voluptate incididunt ullamco consectetur quis ea. Pariatur officia esse culpa deserunt sit qui ex sint incididunt occaecat nisi pariatur voluptate ad.</p>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                    </>}
                    style={{"--front-background":frontBG, "--back-background": backBG}}
                />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <FlipCard 
                    // card front
                    frontImage={"https://images.pexels.com/photos/1144176/pexels-photo-1144176.jpeg?auto=compress&cs=tinysrgb&h=140&w=300"}
                    frontTitle="Image from URL"
                    frontText={
                        <p>The font of this card is customized <strong>via custom properties</strong>. It will scroll if bigger then text area Elit aliqua eu cupidatat ut sit ullamco esse dolore anim ipsum. Sit enim ipsum velit enim cupidatat nostrud officia nulla irure amet pariatur ad.Dolor in nisi aute anim qui voluptate. Nostrud amet nostrud ipsum excepteur et nisi et duis eiusmod quis culpa exercitation ut enim.</p>}
                    // card back
                    backImage={"https://images.pexels.com/photos/9242/light-sunset-water-boat.jpg?auto=compress&cs=tinysrgb&dpr=1&w=400"}
                    backTitle="Card back title"
                    backText={<>
                    <p><strong>Some important notes</strong>
                    <br/>Lorem voluptate ex sunt pariatur elit tempor irure aute anim incididunt laboris nulla sunt nisi. Ex nostrud consequat duis qui qui fugiat nostrud minim. Ad laboris voluptate incididunt ullamco consectetur quis ea. Pariatur officia esse culpa deserunt sit qui ex sint incididunt occaecat nisi pariatur voluptate ad.</p>
                    <ul style={{listStyle:"square inside", padding:"0px 0px 4px 0px"}}>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                    </>}
                    style={{"--front-background":"white", "--back-background": backBG, "--card-font": "Arial, sans-serif", "--back-inset-border:": "0px", "--front-inset-border": "0px"}}
                />
            </div>
        </div>
    </div>)
} 

export default SandBox