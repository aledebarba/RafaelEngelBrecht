import React from 'react'
import ParallaxLayout from '../components/layouts/parallaxLayout'
import { useLax } from 'use-lax'

const IndexParallax = (props) => {
    useLax({
        breakpoints: { sm: 0, md: 768, lg: 992, xl: 1024, k4: 1366 }, 
        classname: "lax"}
        );
    return (<ParallaxLayout />)
}
export default IndexParallax