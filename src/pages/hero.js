import React from 'react'
import styled from 'styled-components'
import staryQueen from '../images/staryqueen.jpg'


const HeroImage = styled.div`

img {
   width: 100%;
   height: 100%; 

} 

/* Center and scale the image nicely */
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`
const Hero = () => (
    <HeroImage> 
        <img src={staryQueen} alt='Blackqueen'/>
    </HeroImage>
)

export default Hero 