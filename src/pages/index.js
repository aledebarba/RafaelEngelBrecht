import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'

const Index = (props) => {
    return (
    <Layout>
        <div className="container p-5">
            <h1>Escolha a página</h1>
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
            <div className="col-sm-12 col-md-6 col-lg-4">
                <Link className="btn btn-primary" to="sandbox">Components Sandbox</Link>
            </div>
        </div>
        </div>
    </Layout>)
}
export default Index