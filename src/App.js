import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
  font-family: ´Permanent Marker´;
}``

export const App = () => {
  return (
    <>
    <GlobalStyle />
      Find me in src/app.js!
    </>
  )
}
