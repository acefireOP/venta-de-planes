import React from 'react'
import styled from 'styled-components'

const Item = styled.li`
  list-style: none;
  padding: 0 10px 10px;
  font-size: 14px;
  line-height: 18px;
  color: #24152F;
  p{
    font-size: 13px;
    line-height: 17px;
    color: #24152F;
    margin-bottom: 10px;
    &.last-child{
      margin-bottom: 0;
    }
  }
`

const AccordionItem = ({texto, id}) => {

  return (
    <Item key={id}>
     {
        texto.map((tx,i) =>
          <p key={i}>{tx}</p>
        )
     } 
    </Item>
  )

}

export default AccordionItem