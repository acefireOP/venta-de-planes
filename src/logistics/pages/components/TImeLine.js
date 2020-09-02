import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const TimeLineWrapper = styled.ul`
  display: flex;
  width: 100%;
  //justify-content: space-between;
  position: relative;
  margin-top: 50px;
  margin-bottom: 10px;
  @media(max-width: 768px) {
    margin-top: 20px;
  }
  .processItem {
    display: flex;
    flex-basis: 25%;
    padding: 0 2px;
    align-items: center;
    flex-direction: column;
    position: relative;
   
    .line {
      position: absolute;
      top: 11px;
      width: 98%;
      height: 2px;
      background: #CCC4D2;
      left: 50%;
      @media(max-width: 768px) {
        top: 6px;
      }
    }
    &:last-child {
      //flex-basis: 0;
      .line {
        width: 0;
      }
    }

    .circle {
      position: relative;
      z-index: 1;
      width: 22px;
      height: 22px;
      margin-bottom: 12px;
      border-radius: 11px;
      background: #CCC4D2;
      @media(max-width: 768px) {
        width: 12px;
        height: 12px;
        border-radius: 6px;
        margin-bottom: 8px;
      }
    }
    .processTitle {
      font-size: 14px;
      text-align: center;
      font-weight: bold;
      line-height: 16px;
      color: #B3A6BA;
      @media(max-width: 768px) {
        font-size: 12px;
        line-height: 14px;
      }
    }
    .processTime {
      font-size: 14px;
      line-height: 16px;
      color: #7C6C8A;
      text-align: center;
      @media(max-width: 768px) {
        display: none;
      }
    }
    &.through {
      &:nth-child(4) {
        .circle {
            background: linear-gradient(180deg, #E92070 -4.75%, #5C3E8D 88%);
        }
        .processTitle {
          color: #381451;
        }
      }
      .line {
        background: #E92070;
      }
      .circle {
        background: #E92070;
      }
      .processTitle {
        color: #E92070;
      }
    }
    &.return {
      .line {
          width: 100%;
          margin-left: -100%;
          background-color: #E9AC20;
        }
        .circle {
            background: #E9AC20;
        }
        .processTitle {
            color: #381451;
          }
    }
    &.pending {
      .circle {
        background: linear-gradient(180deg, #E92070 -4.75%, #5C3E8D 88%);
      }
      .processTitle {
        color: #381451;
      }
    }
  }
`;


const TimeLine = ({tracking=[], order}) => {
    console.log(order)
    const process = [
        {
            descAtBar: 'Solicitud recibida',
            descAtDetail: 'Solicitud recibida',
            status: 1,
        }, {
            descAtBar: 'Confirmación compra',
            descAtDetail: 'Confirmación de compra',
            status: 2,
        }, {
            descAtBar: 'En tránsito',
            descAtDetail: 'Producto en tránsito',
            status: 3,
        }];
    if(order.dispatchType === "Despacho a domicilio") {
        process.push({
            descAtBar: 'Entregado',
            descAtDetail: 'Producto entregado',
            status: 4,
        })
    }else{
        process.push({
            descAtBar: 'Retirado',
            descAtDetail: 'Producto retirado en E-lockers',
            status: 5,
        })
    }
    tracking.map((item, index)=>{
        process[index].fecha = item.fecha;
        process[index].hora = item.hora;
    });
    if(tracking.length >= 4) {
        process[3] = tracking[tracking.length-1]
    }

    return <TimeLineWrapper>
        {process.map((processItem,index) => {
            let status = '';
            if(processItem.status === 6) {
                status = 'return';
            }else if(index + 1 === tracking.length) {
                status = 'pending'
            }else if(index + 1 < tracking.length) {
                status = 'through'
            }
            return (
                <li
                    key={processItem.descAtBar}
                    className={
                        `processItem ${status}`
                    }>
                    <div className={"circle"}/>
                    <div className={"processTitle"}>{processItem.descAtBar}</div>
                    <div className={"processTime"}>{processItem.fecha?(processItem.fecha +' '+processItem.hora):''}</div>
                    <div className={"line"} />
                </li>
            )
        })}

    </TimeLineWrapper>
};

export default TimeLine;
