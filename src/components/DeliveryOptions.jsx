import React, { Fragment } from 'react'
import TitleBlock from './TitleBlock'
import styled from 'styled-components'

import IcoEditar from '../images/ico_editar.svg'
import IcoGps from '../images/ico_gps.svg'
import IcoLocation from '../images/open_in_new.svg'

const WrapperDelivery= styled.div`
  width: 100%;
  .delivery-edit{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #F4F4F7;
    border-radius: 8px;
    padding: 18px 15px;
    margin-top: 35px;
    margin-bottom: 30px;
    @media(max-width: 480px){
      flex-wrap: wrap;
      justify-content: space-around;
    }
    p{
      color: #381451;
      font-size: 14px;
      line-height: 16px;
    }
    h3{
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      color: #381451;
    }
    .edit{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      @media(max-width: 480px){
        width: 100%;
        margin-top: 10px;
      }
      p{
        color: #E92070;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        @media(max-width: 480px){
          font-size: 12px;
        }
      }
      img{
        margin-left: 5px;
      }
    }
  }
  .delivery-body{
    width: 100%;
    max-width: 560px;
    margin: 0 auto;
    h3{
      color: #7C6C8A;
      font-size: 16px;
      line-height: 20px;
      border-bottom: 1px dashed #CCC4D2;
      padding-bottom: 10px;
    }
    .e-locker{
      width: 100%;
      margin: 20px 0;
      padding: 0 20px;
      @media(max-width: 480px){
        padding: 0;
      }
      h4{
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        color: #381451;
      }
      .locker-text{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        p{
          color: #381451;
          font-size: 14px;
          line-height: 16px;
        }
      }
      .locker-location{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
        p{
          color: #381451;
          font-size: 16px;
          line-height: 20px;
          margin: 0 10px 0 8px;
        }
      }
    }
    ul{
      li{
        border-bottom: 1px solid #E6E2E8;
        padding: 10px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        p{
          font-size: 16px;
          line-height: 20px;
          color: #7C6C8A;
        }
        span{
          text-transform: uppercase;
          color: #DD0028;
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }
`

const DeliveryOptions = () => {
  return (
    <Fragment>
      <TitleBlock classAdd="text-center" titulo="Elige tus opciones de despacho"/>
      <WrapperDelivery>
        <div className="delivery-edit">
          <div>
            <p>Región</p>
            <h3>Metropolitana</h3>
          </div>
          <div>
            <p>Comuna</p>
            <h3>Macul</h3>
          </div>
          <div className="edit"><p>MODIFICAR</p> <img src={IcoEditar} alt="editar"/></div>
        </div>
        <div className="delivery-body">
          <h3>Información retiro</h3>
          <div className="e-locker">
            <h4>Sucursal Vicuña Mackenna</h4>
            <div className="locker-text">
              <p>E-lockers</p>
              <p>gratis</p>
            </div>
            <div className="locker-location">
              <img src={IcoGps} alt="gps"/>
              <p>General Mackenna #1369, Santiago, Región Metropolitana</p>
              <img src={IcoLocation} alt="in new"/>
            </div>
          </div>
          <h3>Horarios de atención</h3>
          <ul>
            <li>
              <p>Lunes a viernes</p>
              <p>08:00 a 17:00</p>
            </li>
            <li>
              <p>Sábado</p>
              <p>10:00 a 14:00</p>
            </li>
            <li>
              <p>Domingo</p>
              <span>Cerrado</span>
            </li>
          </ul>
        </div>
      </WrapperDelivery>
    </Fragment>
  )
}

export default DeliveryOptions