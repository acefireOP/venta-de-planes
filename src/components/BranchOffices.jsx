import React from 'react'
import styled from 'styled-components'

const WrapperOffices = styled.div`
  width: 100%;
  margin-top: 35px;
  .office-title{
    color: #7C6C8A;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    border-bottom: 1px solid #E6E2E8;
    padding-bottom: 10px;
    span{
      font-weight: 700;
    }
  }
  .offices{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px dashed #E6E2E8;
    padding: 15px 0;
    @media(max-width: 480px){
      flex-direction: column;
    }
    div{
      @media(max-width: 480px){
        width: 100%;
        &:first-child{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
        }
      }
    }
    hgroup{
      margin-bottom: 10px;
      h3{
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        color: #2D1441;
      }
      h4{
        font-size: 14px;
        line-height: 16px;
        color: #381451;
      }
    }
    span{
      font-size: 14px;
      line-height: 16px;
      text-transform: uppercase;
      color: #76489B;
      @media(max-width: 480px){
        line-height: 25px;
      }
    }
    .btn-offices{
      display: block;
      padding: 10px 20px;
      border-radius: 8px;
      font-weight: 700;
      line-height: 20px;
      font-size: 16px;
      text-transform: uppercase;
      text-align: center;
      border: 1px solid #381451;
      background-color: transparent;
      text-decoration: none;
      color: #2D1441;
      cursor: pointer;
      transition: background-color .3s, color .3s;
      @media(max-width: 480px){
        width: 100%;
      }
      &:hover{
        background-color: #381451;
        color: #ffffff;
      }
    }
  }
`

const BranchOffices = () => {
  return (
    <WrapperOffices>
      <h2 className="office-title"><span>5</span> tiendas encontradas</h2>
      <div className="offices">
        <div>
          <hgroup>
            <h3>Sucursal General Mackenna </h3>
            <h4>Av. General Mackena 1369, Santiago, RM</h4>
          </hgroup>
          <span>GRATIS</span>
        </div>
        <div><button className="btn-offices">elegir tienda</button></div>
      </div>
      <div className="offices">
        <div>
          <hgroup>
            <h3>Sucursal General Mackenna </h3>
            <h4>Av. General Mackena 1369, Santiago, RM</h4>
          </hgroup>
          <span>GRATIS</span>
        </div>
        <div><button className="btn-offices">elegir tienda</button></div>
      </div>
      <div className="offices">
        <div>
          <hgroup>
            <h3>Sucursal General Mackenna </h3>
            <h4>Av. General Mackena 1369, Santiago, RM</h4>
          </hgroup>
          <span>GRATIS</span>
        </div>
        <div><button className="btn-offices">elegir tienda</button></div>
      </div>
      <div className="offices">
        <div>
          <hgroup>
            <h3>Sucursal General Mackenna </h3>
            <h4>Av. General Mackena 1369, Santiago, RM</h4>
          </hgroup>
          <span>GRATIS</span>
        </div>
        <div><button className="btn-offices">elegir tienda</button></div>
      </div>

    </WrapperOffices>
  )
}

export default BranchOffices