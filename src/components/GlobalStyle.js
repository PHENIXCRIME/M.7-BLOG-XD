import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
${reset}

 html , body , #root {   
  height : 200vh;
  width: 100vw;

  font-family: 'Kanit' , sans-serif ; 
  font-size: 20px ; 

  scroll-behavior : smooth ;
/* 
  @media(max-width : 375px) {
    font-size : 10px ;
  } //responsive */
}

a { 
  text-decoration:none;
  color: inherit;
}
`

export default GlobalStyle
