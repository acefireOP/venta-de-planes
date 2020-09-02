import React, { Fragment } from 'react'
import styled from 'styled-components'
import { ContainerAccordion } from './ContainerAccordion'

import IconFrecuent from '../images/icon_chat_big.svg'
import IconCare from '../images/ico_care.svg'
import IcoWhatsappW from '../images/ico_whatsapp_white.svg'

const FrequentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 30px;
  margin-bottom: 30px;
  border-bottom: 1px dashed #D4C6C6;
  padding-bottom: 30px;
  @media(max-width: 640px){
    flex-direction: column;
    align-items: center;
  }
  .frequent{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(max-width: 640px){
      margin-bottom: 30px;
    }
    h2{
      font-weight: 700;
      font-size: 22px;
      line-height: 30px;
      color: #21102E;
    }
    p{
      font-size: 16px;
      line-height: 22px;
      color: #7C6C8A;
    }
    img{
      display: block;
      margin: 10px auto 0;
    }
  }
`
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a{
    text-decoration:none;
  }
  img{
    margin-bottom: 20px;
  }
  p{
    font-size: 16px;
    line-height: 20px;
    color: #381451;
    text-align: center;
    b{
      font-weight: 700;
      display: block;
    }
  }
  .btn-contact{
    width: 100%;
    max-width: 280px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 15px auto 0;
    background-color: #7FBF40;
    border-radius: 8px;
    -webkit-text-decoration: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    padding: 12px 20px;
    border: none;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    -webkit-transition: background-color .3s;
    -webkit-transition: background-color .3s;
    transition: background-color .3s;
    &:hover{
      background-color: #639432;
    }
    img{
      margin: 0;
      margin-right: 10px;
    }
  }
`

const WrapperAcc = styled.div`
  width: 100%;
  max-width: 335px;
`

const FrequentQuestion = () => {
  return (
    <Fragment>
      <FrequentWrapper>
        <div className="frequent">
          <h2>Preguntas frecuentes</h2>
          <p>Te recomendamos lo siguiente</p>
          <img src={IconFrecuent} alt="preguntas frecuentes"/>
        </div>
        <WrapperAcc>
          <ContainerAccordion />
        </WrapperAcc>
      </FrequentWrapper>
      <Contact>
        <img src={IconCare} alt="dudas"/>
        <p>Si tienes dudas con tu orden <b>Contáctanos</b></p>
        <a href="https://api.whatsapp.com/send?phone=56935223070" target="_blank" rel="noopener noreferrer"><button className="btn-contact"><img src={IcoWhatsappW} alt="whatsapp contact"/>+56 9 3522 3070</button></a>
      </Contact>
    </Fragment>
  )
}

export default FrequentQuestion