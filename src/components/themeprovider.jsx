import React from 'react'
import {ThemeProvider } from 'styled-components'

// theme content available via context
export const customTheme = {
}

// high order component encapsulate everything
export const UsingCustomTheme = ({children}) =>
<ThemeProvider theme={customTheme}>
    <>
        {children}
    </>
</ThemeProvider>

//Other simple styled components 
export const Section = (props) => 
<div className='container-fluid'>
    <div className={`container ${props.className}`}>
        {props.children}
    </div>
</div>
