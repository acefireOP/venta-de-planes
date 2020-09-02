import React from "react";
import styled from "styled-components";

const WavesContainer = styled.div`
  width: 100%;
  height: 270px;
  position: relative;
  overflow: hidden;
  margin-bottom: -20px;
  margin-top: 50px;
  z-index: -9;
  @media (max-width: 480px) {
    height: 250px;
    margin-top: 50px;
  }

  .scene__layer1,
  .scene__layer2,
  .scene__layer3 {
    height: 100%;
  }
  .scene__layer1 svg {
    position: absolute;
    bottom: 0px;
    margin-left: -300px;
    width: 2500px;
    animation: wave-bot 4s 0.1s infinite linear;
  }
  .scene__layer2 svg {
    position: absolute;
    opacity: 0.6;
    bottom: 20px;
    margin-left: -150px;
    width: 2500px;
    animation: wave-bot 4.5s 0.3s infinite linear;
  }
  .scene__layer3 svg {
    position: absolute;
    opacity: 0.6;
    bottom: 40px;
    margin-left: -520px;
    width: 2500px;
    animation: wave-bot 5s 0.5s infinite linear;
  }

  @keyframes wave-bot {
    0% {
      transform: rotateZ(0deg) translate3d(0, 5%, 0) rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg) translate3d(0, 5%, 0) rotateZ(-360deg);
    }
  }
`;

const FooterScene = () => {
  return (
    <WavesContainer id="footer-scene">
      <div className="scene__layer1">
        <svg width="2767" height="220" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 359h2767V0c-153.722 32.125-307.444 48.188-461.167 48.188C2075.25 48.188 2075.25 0 1844.667 0c-230.584 0-230.584 48.188-461.167 48.188C1152.917 48.188 1152.917 0 922.333 0 691.75 0 691.75 48.188 461.167 48.188 307.444 48.188 153.722 32.125 0 0v359z"
            fill="#2D1540"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <div className="scene__layer2">
        <svg width="2767" height="220" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 359h2767V0c-153.722 32.125-307.444 48.188-461.167 48.188C2075.25 48.188 2075.25 0 1844.667 0c-230.584 0-230.584 48.188-461.167 48.188C1152.917 48.188 1152.917 0 922.333 0 691.75 0 691.75 48.188 461.167 48.188 307.444 48.188 153.722 32.125 0 0v359z"
            fill="#2D1540"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <div className="scene__layer3">
        <svg width="2767" height="220" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 359h2767V0c-153.722 32.125-307.444 48.188-461.167 48.188C2075.25 48.188 2075.25 0 1844.667 0c-230.584 0-230.584 48.188-461.167 48.188C1152.917 48.188 1152.917 0 922.333 0 691.75 0 691.75 48.188 461.167 48.188 307.444 48.188 153.722 32.125 0 0v359z"
            fill="#2D1540"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </WavesContainer>
  );
};

export default FooterScene;
