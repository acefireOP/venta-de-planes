import React, { useContext } from "react";
import styled from "styled-components";
import { FormContext } from "../context/FormContext";
import { ValidationContext } from "../context/ValidationContext";
import Arrow from "../images/icon_arrow_right.svg";

const SelectContainer = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid #7c6c8a;
  margin-top: 10px;
  @media (max-width: 480px) {
    width: 100%;
  }
  &.full-width {
    width: 100%;
  }
  &.full-border {
    border: 1px solid #7c6c8a;
    border-radius: 5px;
  }
  select {
    width: 100%;
    height: 48px;
    border: none;
    padding: 10px 27px 10px 10px;
    background-color: #ffffff;
    outline: none;
    cursor: pointer;
    color: #7c6c8a;
    font-size: 16px;
    line-height: 20px;
  }
  label {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    left: auto;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    pointer-events: none;
    .arrow {
      margin-right: 10px;
    }
  }
`;

const InputSelect = ({ classAdd }) => {
  const { formData, setFormData } = useContext(FormContext);
  const { validationData, setValidationData } = useContext(ValidationContext);

  const handleChange = (e) => {
    setFormData({ ...formData, previousCarrier: e.target.value });
    e.target.value !== ""
      ? setValidationData({ ...validationData, previousCarrier: true })
      : setValidationData({ ...validationData, previousCarrier: false });
  };
  return (
    <SelectContainer className={classAdd}>
      <select
        value={formData.previousCarrier}
        id="select-1"
        onChange={handleChange}
      >
        <option value="">Compañía de origen</option>
        <option value="Movistar">Movistar</option>
        <option value="Claro">Claro</option>
        <option value="Entel">Entel</option>
        <option value="Virgin Mobile">Virgin Mobile</option>
        <option value="Simple Movil">Simple Movil</option>
        <option value="VTR">VTR</option>
        <option value="Falabella">Falabella</option>
        <option value="Telefónica del sur SA">Telefónica del sur SA</option>
        <option value="Netline">Netline</option>
      </select>
      <label htmlFor="select-1">
        <img className="arrow" src={Arrow} alt="arrow" />
      </label>
    </SelectContainer>
  );
};

export default InputSelect;
