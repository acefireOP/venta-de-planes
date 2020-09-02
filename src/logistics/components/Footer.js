import React from "react";
import styled from "styled-components";

import IconFacebook from "../images/footer/icon_facebook.svg";
import IconTwitter from "../images/footer/icon_twitter.svg";
import IconYoutube from "../images/footer/icon_youtube.svg";
import IconInstagram from "../images/footer/icon_instagram.svg";

const FooterWom = styled.div`
  width: 100%;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d1441;
  ul {
    li {
      font-size: 13px;
      line-height: 16px;
      color: #afa6b7;
      margin-bottom: 13px;
      list-style: none;
      text-align: center;
      &:last-child {
        margin-bottom: 0;
      }
     
      &.social-links {
        width: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        a {
          transition: transform 0.3s;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
      
    }
  }
`;

const Footer = () => {
    return (
        <FooterWom>
            <ul>
                <li className="bolder">Síguenos en:</li>
                <li className="social-links">
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
                </li>
            </ul>
        </FooterWom>
    );
};

export default Footer;
