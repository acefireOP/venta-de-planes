import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #76489b;
  padding-bottom: 20px;
  border-bottom: 1px dashed #d4c6c6;
  @media (max-width: 480px) {
    text-align: center;
  }
  &.text-center {
    text-align: center;
  }
  &.mt-10 {
    margin-top: 10px;
  }
  &.mt-20 {
    margin-top: 20px;
  }
  &.mt-30 {
    margin-top: 30px;
  }
  &.mt-40 {
    margin-top: 40px;
  }
  &.mb-10 {
    margin-bottom: 10px;
  }
  &.mb-20 {
    margin-bottom: 20px;
  }
  &.mb-30 {
    margin-bottom: 30px;
  }
  &.mb-40 {
    margin-bottom: 40px;
  }
`;

const TitleBlock = ({ classAdd, titulo }) => {
  return <Title className={classAdd}>{titulo}</Title>;
};

export default TitleBlock;
