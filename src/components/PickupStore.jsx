import React, { useContext, useEffect, useState } from "react";
import { ValidationContext } from "../context/ValidationContext";
import { FormContext } from "../context/FormContext";
import styled from "styled-components";
import modifyDesktop from "../images/modifyDesktop.svg";
import modifyMobile from "../images/modifyMobile.svg";
import storeAddress from "../images/storeAddress.svg";
import Step2Address from "./Step2Address";
import TitleBlock from "./TitleBlock";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";
import RadiusContentWrapper from "./RadiusContentWrapper";

const RegionWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 18px 16px 17px;
  background: #f4f4f7;
  border-radius: 8px;
  .addressPart {
    display: flex;
    flex: 1;
    .addressWrapper {
      flex: 1;
      .addressType {
        margin-bottom: 4px;
        font-size: 14px;
        line-height: 16px;
        color: #381451;
      }
      .addressContent {
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #381451;
      }
    }
  }
  .reChoose {
    display: flex;
    align-items: center;
    margin-right: 17px;
    .reChooseClickArea {
      display: flex;
      cursor: pointer;
    }
    .reChooseText {
      margin-right: 4px;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      text-transform: uppercase;
      color: #e92070;
    }
    .reChooseIcon {
      width: 17px;
      height: 20px;
    }
  }
  @media (max-width: 480px) {
    flex-direction: column;
    padding: 16px 11px 12px;
    .reChoose {
      margin-top: 15px;
      justify-content: center;
    }
  }
`;

const StoreInfoWrapper = styled.div`
  margin-top: 29px;
  width: 80%;
  .title {
    width: 100%;
    padding-bottom: 4px;
    font-size: 16px;
    line-height: 20px;
    color: #7c6c8a;
    border-bottom: 1px dashed #ccc4d2;
  }
  .storeName {
    margin-top: 9px;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #381451;
  }
  .storeTextWrapper {
    display: flex;
    .storeText {
      margin-right: 100px;
      font-size: 14px;
      line-height: 16px;
      color: #381451;
    }
  }
  .storeAddress {
    display: flex;
    align-items: center;
    margin-top: 15px;
    .storeAddressIcon {
      width: 11px;
      height: 16px;
    }
    .storeAddressText {
      flex: 1;
      margin-left: 9px;
      font-size: 16px;
      line-height: 20px;
      color: #381451;
    }
    .share {
      width: 16px;
      height: 16px;
    }
  }
  @media (max-width: 480px) {
    width: 100%;
    .storeTextWrapper {
      justify-content: space-between;
      .storeText {
        margin-right: 0;
      }
    }
  }
`;

const StoreTime = styled.div`
  width: 80%;
  margin-top: 23px;
  .title {
    width: 100%;
    padding-bottom: 8px;
    font-size: 14px;
    line-height: 16px;
    color: #381451;
    border-bottom: 1px dashed #ccc4d2;
  }
  .timeItem {
    display: flex;
    width: 100%;
    height: 48px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e2e8;
    &:last-child {
      border-bottom-width: 0;
    }
    .timeTitle {
      margin-left: 4px;
      font-size: 14px;
      line-height: 16px;
      color: #7c6c8a;
    }
    .time {
      margin-right: 15px;
      font-size: 16px;
      line-height: 20px;
      color: #7c6c8a;
    }
    .red {
      color: #dd0028;
    }
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;

const PickupStore = (props) => {
  const { store } = props;
  const { formData, setFormData } = useContext(FormContext);
  const { validationData } = useContext(ValidationContext);
  const resetStore = () => {
    const { setStore } = props;
    setFormData({
      ...formData,
      storeInfo: {},
    });
    setStore && setStore({});
  };

  return (
    <>
      <RadiusContentWrapper>
        <TitleBlock
          classAdd="text-center mb-20"
          titulo="Elige tus opciones de despacho"
        />
        <RegionWrapper>
          <div className={"addressPart"}>
            <div className={"addressWrapper"}>
              <div className={"addressType"}>Región</div>
              <div className={"addressContent"}>{formData.dispatchRegion}</div>
            </div>
            <div className={"addressWrapper"}>
              <div className={"addressType"}>Comuna</div>
              <div className={"addressContent"}>{formData.dispatchComuna}</div>
            </div>
          </div>
          <div className={"reChoose"}>
            <div onClick={resetStore} className={"reChooseClickArea"}>
              <div className={"reChooseText"}>MODIFICAR</div>
              {window.innerWidth >= 768 ? (
                <img
                  src={modifyDesktop}
                  alt="reChoose"
                  className={"reChooseIcon"}
                />
              ) : (
                <img
                  src={modifyMobile}
                  alt="reChoose"
                  className={"reChooseIcon"}
                />
              )}
            </div>
          </div>
        </RegionWrapper>
        <StoreInfoWrapper>
          <div className={"title"}>Información de retiro</div>
          <div className={"storeName"}>{store.NOMBRE}</div>
          <div className={"storeTextWrapper"}>
            <div className={"storeText"}>E-lockers</div>
            <div className={"storeText"}>GRATIS</div>
          </div>
          <div className={"storeAddress"}>
            <div className={"storeAddressIcon"}>
              <img
                className={"storeAddressIcon"}
                src={storeAddress}
                alt="address"
              />
            </div>
            <div className={"storeAddressText"}>
              {store.DIRECCION}
              {/*<img src={share} className={'share'} alt="share"/>*/}
            </div>
          </div>
        </StoreInfoWrapper>
        <StoreTime>
          <div className={"title"}>Horarios de atención</div>
          <div className={"timeItem"}>
            <div className={"timeTitle"}>Lunes a viernes</div>
            <div className={"time"}>{store.SEMANA}</div>
          </div>
          <div className={"timeItem"}>
            <div className={"timeTitle"}>Sábado</div>
            <div className={"time"}>{store.SABADO}</div>
          </div>
          <div className={"timeItem"}>
            <div className={"timeTitle"}>Domingo</div>
            <div className={"time red"}>{store.DOMINGO}</div>
          </div>
        </StoreTime>
      </RadiusContentWrapper>
      <RadiusContentWrapper>
        <TitleBlock
          classAdd="text-center"
          titulo="Dirección para tu contrato"
        />

        <Step2Address
          regionName="contractRegion"
          comunaName="contractComuna"
          addressNameStreet="contractAddressStreet"
          addressName="contractAddress"
          addressNumName="contractAddressNum"
        />
        <ButtonContainer>
          <PrevButton
            onClick={resetStore}
            stepNum="Volver"
            stepTitle="Tus Datos"
            route={`/?plan=${formData.selectedPlan}`}
          />
          <NextButton
            stepNum="3"
            stepTitle="Resumen Final"
            route="/paso3"
            status={
              validationData.dispatchRegion &&
              validationData.dispatchComuna &&
              validationData.contractRegion &&
              validationData.contractComuna &&
              validationData.contractAddressStreet &&
              validationData.contractAddress
                ? "active"
                : "innactive"
            }
          />
        </ButtonContainer>
      </RadiusContentWrapper>
    </>
  );
};
export default PickupStore;
