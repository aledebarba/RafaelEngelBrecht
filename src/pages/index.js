import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const Index = (props) => {
    return (
    <Layout>
        <div className="container p-5">
            <h1>Pages and components</h1>
            <h2 className="mt-5">Pages Templates</h2>
            <div className="row g-3">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Link className="btn btn-primary" to="five-sections">Five Sections</Link>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Link className="btn btn-primary" to="gsap">GSAP EXAMPLE</Link>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Link className="btn btn-primary" to="parallax">Parallax LAX.JS</Link>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Link className="btn btn-primary" to="pixi">PIXIJS</Link>
                </div>
                
            </div>
            <h2 className="mt-5">Components</h2>
            <div className="row g-3">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Link className="btn btn-primary" to="sandbox">FlipCard component</Link>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Link className="btn btn-primary" to="carousel-sandbox">Image Carousel component</Link>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Link className="btn btn-primary" to="videoheaderexample">Video Header component</Link>
                </div>
            </div>
        </div>
    </Layout>)
}
export default Index