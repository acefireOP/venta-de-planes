import React, { useContext } from "react";
import styled from "styled-components";
import { FormContext } from "../context/FormContext";
import { ValidationContext } from "../context/ValidationContext";
import InputItem from "./InputItem";
import InputSelect from "./InputSelect";
import IconPhone from "../images/formulario/icon_phone.svg";

const WrapInputsInline = styled.div`
  width: 100%;
  max-width: 560px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  .radio {
    input[type="radio"] {
      position: absolute;
      opacity: 0;
      + .radio-label {
        color: #7c6c8a;
        font-size: 16px;
        line-height: 20px;
        &:before {
          content: "";
          background: #ffffff;
          border-radius: 100%;
          border: 1px solid #bbb4c3;
          display: inline-block;
          width: 20px;
          height: 20px;
          position: relative;
          top: 0;
          margin-right: 10px;
          vertical-align: top;
          cursor: pointer;
          text-align: center;
          transition: all 250ms ease;
        }
      }
      &:checked {
        + .radio-label {
          &:before {
            background-color: #ffffff;
            box-shadow: inset 0 0 0 7px #e92070;
            border: 1px solid #e92070;
          }
        }
      }
      &:focus {
        + .radio-label {
          &:before {
            outline: none;
            border-color: #ffffff;
            border: 1px solid #e92070;
          }
        }
      }
      &:disabled {
        + .radio-label {
          &:before {
            box-shadow: inset 0 0 0 7px #e92070;
            border-color: #e92070;
            background: #e92070;
            border: 1px solid #e92070;
          }
        }
      }
      + .radio-label {
        &:empty {
          &:before {
            margin-right: 0;
          }
        }
      }
    }
  }
`;

const AlertTopMessage = styled.div`
  width: 100%;
  border-radius: 4px;
  background: rgba(233, 172, 32, 0.1);
  border: 1px solid #e9ac20;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 50px;
  margin-bottom: 15px;
  h2 {
    font-size: 12px;
    font-weight: 700;
    color: #7c6c8a;
    margin-bottom: 8px;
  }
  p {
    color: #7c6c8a;
    font-size: 12px;
    font-weight: 300;
    line-height: 15px;
  }
`;

const ContentRadioButton = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    width: 100%;
    order: 3;
  }
  p {
    font-size: 16px;
    line-height: 20px;
    color: #7c6c8a;
    max-width: 234px;
    align-self: flex-end;
    @media (max-width: 480px) {
      max-width: 100%;
      align-self: flex-start;
    }
  }
  .buttons-radio {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 15px;
    @media (max-width: 480px) {
      max-width: 215px;
      justify-content: space-between;
    }
  }
`;

const Step1InputsPortabilidad = () => {
  const { formData, setFormData } = useContext(FormContext);
  const { validationData, setValidationData } = useContext(ValidationContext);

  const radioValidator = (key) => {
    setValidationData({ ...validationData, originPlanType: true });
    setFormData({ ...formData, originPlanType: key });
  };

  return (
    <WrapInputsInline>
      <AlertTopMessage>
        <h2>Antes de solicitar una portabilidad, revisa que:</h2>
        <p>
          Llevas al menos 60 días en tu compañía actual o de tu última
          portabilidad. Debes estar al día con tu última boleta y no tener
          deuda.
        </p>
      </AlertTopMessage>
      <InputItem
        nameInput="phoneToMigrate"
        iconInput={IconPhone}
        nameLabel="Teléfono a portar"
        length="9"
        fieldType="number"
        exampleInput="Ej: 987654321"
      />
      <ContentRadioButton>
        <p>Selecciona el tipo de plan que tienes hoy</p>
        <div className="buttons-radio">
          <div className="radio">
            <input
              id="radio-plan"
              name="radio"
              type="radio"
              onChange={() => radioValidator("plan")}
              checked={formData.originPlanType === "plan" ? "checked" : ""}
            />
            <label htmlFor="radio-plan" className="radio-label">
              Plan
            </label>
          </div>
          <div className="radio">
            <input
              id="radio-prepago"
              name="radio"
              type="radio"
              onChange={() => radioValidator("prepago")}
              checked={formData.originPlanType === "prepago" ? "checked" : ""}
            />
            <label htmlFor="radio-prepago" className="radio-label">
              Prepago
            </label>
          </div>
        </div>
      </ContentRadioButton>
      <InputSelect />
    </WrapInputsInline>
  );
};

export default Step1InputsPortabilidad;
