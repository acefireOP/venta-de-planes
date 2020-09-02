import React from "react";
import styled from "styled-components";

const StoreItemWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  max-width: 550px;
  margin-left: 7px;
  border-bottom: 1px dashed #e6e2e8;
  .content {
    flex: 1;
    margin-right: 10px;
  }
  .title {
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #2d1441;
  }
  .desc {
    font-size: 14px;
    line-height: 16px;
    color: #381451;
  }
  .type {
    margin: 12px 0 15px;
    font-size: 14px;
    line-height: 16px;
    color: #381451;
  }
  .button {
    margin-top: 19px;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 206px;
    height: 44px;
    border: 1px solid #381451;
    box-sizing: border-box;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: #2d1441;
    cursor: pointer;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    .content {
      display: flex;
      .contentWrapper {
        flex: 1;
      }
    }
    .button {
      align-self: center;
      width: 90%;
      margin-top: 12px;
      margin-bottom: 10px;
    }
  }
`;

const StoreListItem = ({ data, onChoose }) => {
  const setStore = () => {
    onChoose && onChoose(data);
  };

  return (
    <StoreItemWrapper>
      <div className="content">
        <div className="contentWrapper">
          <div className="title">{data.NOMBRE}</div>
          <div className="desc">{data.DIRECCION}</div>
        </div>
        <div className="type">{"GRATIS"}</div>
      </div>
      <div className="button" onClick={setStore}>
        elegir tienda
      </div>
    </StoreItemWrapper>
  );
};

export default StoreListItem;
