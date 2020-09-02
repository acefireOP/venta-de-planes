import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonWrap = styled(Link)`
  max-width: 230px;
  width: 100%;
  position: relative;
  transition: background 0.5s ease;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  &.active {
    background: #e92070;
    pointer-events: unset;
    cursor: pointer;
  }
  &:hover{
    .arrow{
      transform: translateX(-3px) rotate(-180deg);
    }
  }
  .arrow {
    transform: rotate(-180deg);
    margin-right: 10px;
    margin-bottom: 3px;
    transition: transform .3s;
    svg{
      path{
        fill: rgba(56, 20, 81, .6);
      }
    }
  }
  .text-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    h4 {
      font-family: "cerapro";
      font-size: 14px;
      line-height: 14px;
      color: rgba(56, 20, 81, .6);
      font-weight: 300;
      span {
        font-weight: 700;
      }
    }
  }
`;

const PrevButton = ({ stepNum, stepTitle, route, onClick }) => {
  return (
    <ButtonWrap onClick={()=>onClick&&onClick()} to={route}>
      <div className="arrow">
        <svg
          width="8"
          height="13"
          viewBox="0 0 8 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.609113 0.927797C0.400503 0.716503 0.400503 0.369765 0.609113 0.158471C0.817722 -0.0528235 1.15638 -0.0528235 1.36446 0.158471L7.72413 6.08554C7.83507 6.19931 7.88284 6.35101 7.87488 6.49729C7.88284 6.64899 7.83507 6.80069 7.72413 6.91446L1.36446 12.8415C1.15638 13.0528 0.817722 13.0528 0.609113 12.8415C0.400503 12.6248 0.400503 12.2835 0.609113 12.0722L6.58448 6.49729L0.609113 0.927797Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="text-box">
        <h4>{stepNum}</h4>
        <h4><span>{stepTitle}</span></h4>
      </div>
    </ButtonWrap>
  );
};
export default PrevButton;
