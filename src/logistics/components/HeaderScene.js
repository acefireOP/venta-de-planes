import React from "react";
import styled from "styled-components";

const WavesContainer = styled.div`
  width: 100%;
  height: 350px;
  margin-bottom: -350px;
  position: relative;
  overflow: hidden;
  z-index: -9;
  @media (max-width: 480px) {
    height: 200px;
    margin-bottom: -200px;
  }
  .scene__layer1,
  .scene__layer2,
  .scene__layer3 {
    height: 100%;
  }
  .scene__layer1 svg {
    position: absolute;
    bottom: 40px;
    margin-left: -300px;
    width: 2500px;
    animation: wave-top 4s 0.1s infinite linear;
  }
  .scene__layer2 svg {
    position: absolute;
    opacity: 0.6;
    bottom: 40px;
    margin-left: -150px;
    width: 2500px;
    animation: wave-top 4.5s 0.3s infinite linear;
  }
  .scene__layer3 svg {
    position: absolute;
    opacity: 0.6;
    bottom: 40px;
    margin-left: -520px;
    width: 2500px;
    animation: wave-top 5s 0.5s infinite linear;
  }

  @keyframes wave-top {
    0% {
      transform: rotateZ(0deg) translate3d(0, 5%, 0) rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg) translate3d(0, 5%, 0) rotateZ(-360deg);
    }
  }
`;

const HeaderScene = () => {
  return (
    <WavesContainer id="header-scene">
      <div className="scene__layer1">
        <svg width="3689" height="819" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0h3689v770.812C3535.346 802.937 3381.68 819 3228 819c-230.564 0-307.444-48.188-461.167-48.188-230.583 0-230.583 48.188-461.166 48.188-230.584 0-230.584-48.188-461.167-48.188-230.583 0-230.583 48.188-461.167 48.188-230.583 0-230.583-48.188-461.166-48.188C768.444 770.812 691.561 819 461 819c-153.682 0-307.348-16.063-461-48.188V0z"
            fill="#2D1540"
            fillrul="evenodd"
          />
        </svg>
      </div>
      <div className="scene__layer2">
        <svg width="3689" height="819" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0h3689v770.812C3535.346 802.937 3381.68 819 3228 819c-230.564 0-307.444-48.188-461.167-48.188-230.583 0-230.583 48.188-461.166 48.188-230.584 0-230.584-48.188-461.167-48.188-230.583 0-230.583 48.188-461.167 48.188-230.583 0-230.583-48.188-461.166-48.188C768.444 770.812 691.561 819 461 819c-153.682 0-307.348-16.063-461-48.188V0z"
            fill="#2D1540"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <div className="scene__layer3">
        <svg width="3689" height="819" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0h3689v770.812C3535.346 802.937 3381.68 819 3228 819c-230.564 0-307.444-48.188-461.167-48.188-230.583 0-230.583 48.188-461.166 48.188-230.584 0-230.584-48.188-461.167-48.188-230.583 0-230.583 48.188-461.167 48.188-230.583 0-230.583-48.188-461.166-48.188C768.444 770.812 691.561 819 461 819c-153.682 0-307.348-16.063-461-48.188V0z"
            fill="#2D1540"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </WavesContainer>
  );
};

export default HeaderScene;
