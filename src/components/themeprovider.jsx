import React from 'react'
import { ThemeProvider } from 'styled-components'

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
