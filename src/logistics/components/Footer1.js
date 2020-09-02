import React from "react";
import styled from "styled-components";

import LogoWom from "../images/footer/logowom.svg";
import Transbank from "../images/footer/transbank.svg";
import IconFacebook from "../images/footer/icon_facebook.svg";
import IconTwitter from "../images/footer/icon_twitter.svg";
import IconYoutube from "../images/footer/icon_youtube.svg";
import IconInstagram from "../images/footer/icon_instagram.svg";
import IconPhoneOne from "../images/footer/ico_phone_one.svg";
import IconPhoneTwo from "../images/footer/ico_phone_two.svg";
import IconWhatsapp from "../images/footer/ico_whatsapp.svg";


const WrapperFooter = styled.div`
  margin-top: -150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #2D1540;
  @media(max-width: 768px) {
      display: none;
  }
  .logoWrapper {
      width: 90%;
      max-width: 1280px;
  }
  .textContent {
      display: flex;
      justify-content: space-between;
      width: 90%;
      max-width: 1280px;
      margin-top: 28px;
      li {
          flex: 1;
          color: #fff;
          dt {
              margin-bottom: 33px;
              font-weight: bold;
              font-size: 18px;
              line-height: 23px;
          }
          dd{
              font-size: 13px;
              line-height: 19px;
              margin-bottom: 18px;
              &:nth-last-of-type {
                  margin-bottom: 0;
              }
          }
      }
  }
  .contractContent {
      width: 100%;
      height: 137px;
      padding-top: 17px;
      box-sizing: border-box;
      background: #381451;
      display: flex;
      flex-direction: column;
      align-items: center;
      >div {
          width: 90%;
          max-width: 1280px;
          display: flex;
          justify-content: space-between;
      }
      .condiciones {
          width: 280px;
          color: #fff;
          font-size: 14px;
          line-height: 16px;
          dt {
              margin-bottom: 20px;
          }
      }
      .social {
          width: 180px;
          .social-links {
              display: flex;
              justify-content: space-between;
              align-self: center;
              a {
                  display: flex;
                  align-items: center;
              }
          }
      }
      .combineDl {
          dl:nth-of-type(1) {
              margin-bottom: 10px;
          }
      }
      .title {
          font-weight: 500;
          font-size: 13px;
          line-height: 16px;
          color: #AFA6B7;
          margin-bottom: 10px;
          & ~ dd {
              color: #fff;
              display: flex;
              align-items: center;
              img {
                  margin-right: 7px;
              }
          }
      }
  }
`;

const Footer1 = () => {

    const data = [
        {
            title: 'Sobre WOM',
            value: ['Cambios y devoluciones', 'Despacho', 'Garantías', 'Servicio técnico']
        },
        {
            title: 'Sobre WOM',
            value: ['Sobre WOM', 'Neutralidad', 'Antenas y densidao']
        },
        {
            title: 'Mi Cuenta',
            value: ['Mi historial de compra', 'Mi carrito', 'Seguimiento de mi pedido', 'Cerrar sessión']
        },
        {
            title: 'Te Ayudamos',
            value: ['Norma multibanda', 'Reclamos', 'Paga con:']
        }
    ];

    return (
        <WrapperFooter>
            <div className={"logoWrapper"}>
                <img className="logo-footer" src={LogoWom} alt="wom footer"/>
            </div>
            <ul className={"textContent"}>
                {data.map((item, index) => {
                    return (
                        <li key={index}>
                            <dl>
                                <dt>{item.title}</dt>
                                {item.value.map((valueItem, index) => {
                                    return (
                                        valueItem === 'Paga con:'?(
                                            <dd key={index}>
                                                <div style={{marginBottom: 7}}>{valueItem}</div>
                                                <img src={Transbank} alt="tarjetas transbank" />
                                            </dd>
                                        ):(
                                            <dd key={index}>{valueItem}</dd>

                                        )
                                    )
                                })}
                            </dl>
                        </li>
                    )
                })}
            </ul>
            <div className={"contractContent"}>
                <div>
                    <dl className={"condiciones"}>
                        <dt>Términos y condiciones</dt>
                        <dd>Términos Comerciales, Contractuales, Modelo de Integridad y Transparencia</dd>
                    </dl>
                    <dl className={"social"}>
                        <dt className={"title"}>Síguenos en:</dt>
                        <dd className={"social-links"}>
                            <a
                                href="https://facebook.com/womchile"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={IconFacebook} alt="facebook"/>
                            </a>
                            <a
                                href="https://twitter.com/womchile"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={IconTwitter} alt="twitter"/>
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UCPM0XXrP4i724aYt27QLBxA"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={IconYoutube} alt="youtube"/>
                            </a>
                            <a
                                href="https://instagram.com/womchile"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={IconInstagram} alt="instagram"/>
                            </a>
                        </dd>
                    </dl>
                    <dl>
                        <dt className={"title"}>Fono clientes:</dt>
                        <dd>
                            <img src={IconPhoneTwo} alt="fono clientes"/>
                            22 3377 600
                        </dd>
                    </dl>
                    <div className={"combineDl"}>
                        <dl>
                            <dt className={"title"}>A nuestro WhatsApp:</dt>
                            <dd>
                                <img src={IconWhatsapp} alt="whatsapp"/>
                                +56 9 3522 3070
                            </dd>
                        </dl>
                        <dl>
                            <dt className={"title"}>Desde tu celular WOM</dt>
                            <dd>
                                <img src={IconPhoneOne} alt="desde celular"/>
                                103
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </WrapperFooter>
    );
};

export default Footer1;
