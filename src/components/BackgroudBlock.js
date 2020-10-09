import React from 'react'
import styled from 'styled-components'

const BackgroudImage = styled.div`
  height : 100vh;
  width : auto;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed ; 

  position : relative ;
`
const BackgroudOverylay = styled.div`
  position : absolute;
  width : 100%;
  height : 100%;
  background-color:rgba(0,0,0,0.2);

  display : flex; 
  flex-direction : column;
  justify-content : center; 
  align-items: center;
`
function BackgroundBlock ({ src, height = 100, children }) {
  return (
    <BackgroudImage src={src} height={height}>
      <BackgroudOverylay>
        {children}
      </BackgroudOverylay>
    </BackgroudImage>
  )
}
export default BackgroundBlock
