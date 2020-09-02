import React, { useContext } from "react";
import styled from "styled-components";
import { FormContext } from "../context/FormContext";
import { ValidationContext } from "../context/ValidationContext";
import ItemOption from "./ItemOption";
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
    transition: background 0.2s ease;
    &.disabled {
      pointer-events: none;
      background: #e6e2e8;
    }
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
    transition: background 0.2s ease;
    &.disabled {
      pointer-events: none;
      background: #e6e2e8;
    }
    .arrow {
      margin-right: 10px;
    }
  }
`;

const InputSelectComunas = ({
  classAdd,
  regionsList,
  loaded,
  fieldName,
  regionField,
  disabledFields = false,
  togglable = false,
}) => {
  const { formData, setFormData } = useContext(FormContext);
  const { validationData, setValidationData } = useContext(ValidationContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
    setValidationData({ ...validationData, [fieldName]: true });
  };

  return (
    <SelectContainer className={classAdd}>
      <select
        value={
          formData[fieldName] === ""
            ? "SELECCIONA UNA COMUNA"
            : formData[fieldName]
        }
        id="select-1"
        onChange={handleChange}
        className={disabledFields ? "disabled" : undefined}
      >
        {formData[fieldName] === "" && (
          <ItemOption key="0202" text="Selecciona una comuna" />
        )}
        {loaded &&
          formData[regionField] !== "" &&
          regionsList
            .find((region) => region.REGION === formData[regionField])
            .COMUNAS.map((comuna, i) => {
              return (
                <ItemOption
                  key={i}
                  text={
                    comuna.CON_DESPACHO
                      ? comuna.COMUNA
                      : regionField === "contractRegion"
                      ? comuna.COMUNA
                      : comuna.COMUNA + " - NO DISPONIBLE"
                  }
                  isEnabled={comuna.CON_DESPACHO}
                  allAvailable={regionField === "contractRegion" ? true : false}
                />
              );
            })}
      </select>
      <label
        htmlFor="select-1"
        className={disabledFields ? "disabled" : undefined}
      >
        <img className="arrow" src={Arrow} alt="arrow" />
      </label>
    </SelectContainer>
  );
};

export default InputSelectComunas;
