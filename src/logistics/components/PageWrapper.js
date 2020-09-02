import React from "react";
import RadiusContentWrapper from "../components/RadiusContentWrapper";
import styled from "styled-components";
import logistics from "../images/logisticsCover.png";

const LogisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding-bottom: 36px;
  .logistics-cover {
    width: 100%;
  }
 
  .return {
    text-transform: uppercase;
    font-size: 14px;
    line-height: 20px;
    color: #E92070;
    font-weight: bold;
    text-decoration: none;
  }
`;

const PageWrapper = ({children}) => {
    return (
        <RadiusContentWrapper style={{padding: 0, maxWidth: 860}}>
            <LogisticsWrapper>
                <img src={logistics} className={"logistics-cover"}/>
                {children}
                <a target="_blank" href="https://www.wom.cl/" className={'return'}>Volver a Wom.cl</a>
            </LogisticsWrapper>
        </RadiusContentWrapper>
    );
};

export default PageWrapper;
