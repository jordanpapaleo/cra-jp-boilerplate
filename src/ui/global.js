import { injectGlobal } from 'styled-components'

injectGlobal`
  * {
    box-sizing: border-box;
    font-family: arial;
  }

  html, body, #root {
    height: 100%;
  }

  html {
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
