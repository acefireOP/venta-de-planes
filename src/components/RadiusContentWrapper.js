import React from "react";
import styled from "styled-components";

const StepsBox = styled.div`
  width: 100%;
  max-width: 768px;
  background: white;
  border-radius: 8px;
  margin: 20px 10px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &:last-child {
    margin-top: 4px;
  }
  @media (max-width: 640px) {
    width: 96%;
    box-shadow: 0px 6px 12px rgba(56, 20, 81, 0.15);
  }
`;

const RadiusContentWrapper = ({ children }) => {
  return <StepsBox>{children}</StepsBox>;
};
export default RadiusContentWrapper;
