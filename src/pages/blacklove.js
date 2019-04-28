import React from 'react'   

import styled from 'styled-components'


import juliahLove from '../images/juliahlove.jpg'
import starQueen from '../images/staryqueen.jpg'
import cloudyChi from '../images/cloudychi.jpg'

const ImageGalley = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 10px;
  grid-auto-rows: 150px;

img {
  width:100px;
}

`



const BlackLove = () => (
    <ImageGalley>
     <a href="https://www.theroot.com/"><img src={juliahLove} alt="blacklove"/></a>
     <a href='http://yourblackworld.net/'><img src={starQueen} alt="blacklove"/></a>
     <a href='https://chicagoist.com/'><img src={cloudyChi} alt="blacklove"/></a>
    </ImageGalley>
)

export default BlackLove 
