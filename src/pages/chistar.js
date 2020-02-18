import React, { Component } from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import AlexNemo from '../images/alex-nemo.jpg';



const Nemo= styled.div`
img {
  width:100px;
}
`

export default class chistar extends Component {
    render() {
        return (
           
           <Layout>
           <Nemo>
                <img src={AlexNemo} alt="chistar"/>
            </Nemo>
            </Layout>
        )
    }
}
