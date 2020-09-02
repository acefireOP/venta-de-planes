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
import {ContainerAccordion} from "../pages/components/ContainerAccordion";


const WrapperFooter = styled.div`
  margin-top: -130px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #2D1540;
  @media(min-width: 769px) {
      display: none;
  }
  .logo-footer {
      width: 90px;
      margin-bottom: 32px;
  }
  .contract {
      margin-bottom: 32px;
      dl {
          margin-bottom: 16px;
          &:nth-last-of-type {
              margin-bottom: 0;
          }
      }
      dt {
          margin-bottom: 9px;
          font-size: 13px;
          line-height: 16px;
          text-align: center;
          color: #AFA6B7;
      }
      dd {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 200px;
          height: 40px;
          border: 1px solid #9A89A4;
          box-sizing: border-box;
          border-radius: 20px;
          color: #FFFFFF;
      }
  }
  .paga {
      margin: 32px 0;
      .title {
          margin-bottom: 15px;
          font-size: 13px;
          line-height: 16px;
          text-align: center;
          color: #AFA6B7;
      }
  }
  .social {
    margin-bottom: 50px;
    .title {
          margin-bottom: 18px;
          font-size: 14px;
          line-height: 18px;
          text-align: center;
          color: #B3A6BA;
      }
      .social-links {
          a {
              margin-right: 44px;
              &:nth-last-of-type(1){
                  margin-right: 0;
              }
          }
      }
  }
`;

const MobileFooter1 = () => {

    const data = [
        {
            id: 0,
            title: 'Sobre WOM',
            value: ['Cambios y devoluciones', 'Despacho', 'Garantías', 'Servicio técnico']
        },
        {
            id: 1,
            title: 'Sobre WOM',
            value: ['Sobre WOM', 'Neutralidad', 'Antenas y densidao']
        },
        {
            id: 2,
            title: 'Mi Cuenta',
            value: ['Mi historial de compra', 'Mi carrito', 'Seguimiento de mi pedido', 'Cerrar sessión']
        },
        {
            id: 3,
            title: 'Te Ayudamos',
            value: ['Norma multibanda', 'Reclamos']
        },
        {
            id: 4,
            title: 'Términos Legales',
            value: ['Términos Comerciales, Contractuales, Modelo de Integridad y Transparencia']
        }
    ];

    return (
        <WrapperFooter>
            <img className="logo-footer" src={LogoWom} alt="wom footer"/>

            <div className={"contract"}>
                <dl>
                    <dt className={"title"}>A nuestro WhatsApp:</dt>
                    <dd>
                        <img src={IconWhatsapp} alt="whatsapp"/>
                        +56 9 3522 3070
                    </dd>
                </dl>

                <dl>
                    <dt className={"title"}>Pórtate llamando al</dt>
                    <dd>
                        <img src={IconPhoneTwo} alt="fono clientes"/>
                        22 3377 600
                    </dd>
                </dl>

                <dl>
                    <dt className={"title"}>Marca desde tu celul</dt>
                    <dd>
                        <img src={IconPhoneOne} alt="desde celular"/>
                        103
                    </dd>
                </dl>
            </div>


            <ContainerAccordion data={data} />


            <dl className={"paga"}>
                <dt className={"title"}>Paga con:</dt>
                <dd>
                    <img src={Transbank} alt="tarjetas transbank" />
                </dd>
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
        </WrapperFooter>
    );
};

export default MobileFooter1;
