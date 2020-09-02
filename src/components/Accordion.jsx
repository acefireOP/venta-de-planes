import React from 'react'
import styled from 'styled-components'

import AccordionItem from './AccordionItem'

const ContentAcc = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  h2{
    font-size: 20px;
    line-height: 24px;
    color: #21102E;
    font-weight: 700;
    margin-left: 12px;
    margin-bottom: 5px;
    @media (max-width: 820px){
      align-self: center;
    }
  }
  p{
    font-size: 16px;
    line-height: 20px;
    color: #7C6C8A;
    font-weight: 300;
    margin-left: 12px;
    @media (max-width: 820px){
      align-self: center;
    }
  }
  .acc-lista{
    width: 100%;
    max-width: 700px;
    margin-top: 40px;
    @media (max-width: 640px){
      padding: 0;
    }
  }
`

const Accordion = () => {
  return (
    <ContentAcc>
    </ContentAcc>
  )
}

export default Accordion