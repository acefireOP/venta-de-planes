import React, { useState, useContext, useEffect } from "react";
import styled, { css } from "styled-components";
import { FormContext } from "../context/FormContext";
import { ValidationContext } from "../context/ValidationContext";
import IconValid from "../images/formulario/icon_valid.svg";
import IconInvalid from "../images/formulario/icon_invalid.svg";
import IconTrailing from "../images/formulario/icon_trailing.svg";
import Tooltip from "../images/tooltip_ci.svg";
import { validate, format } from "rut.js";
import IconError from "../images/ico_error.svg";

const TextInput = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  border-bottom: 1px solid #7c6c8a;
  ${(props) => {
    return props.hasicon
      ? css`
          padding: 20px 35px 10px 33px;
        `
      : css`
          padding: 20px 35px 10px 10px;
        `;
  }}

  font-size: 16px;
  color: #2d1441;
  outline: none;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  transition: background 0.2s ease;
  & ~ .input-label {
    ${(props) => {
      return props.hasicon
        ? css`
            left: 33px;
          `
        : css`
            left: 10px !important;
          `;
    }}
  }
  &:focus {
    border-bottom: 2px solid #9b2eed;
    & ~ .input-label {
      font-size: 12px;
      line-height: 15px;
      color: #9b2eed;
      transform: translateY(-12px);
      &.phonefocus {
        transform: translateY(-12px) translateX(-30px);
      }
      &.phonefocus:after {
        transform: translateY(12px) translateX(30px);
      }
    }
  }

  &.phonefocus {
    ${(props) => {
      return props.hasicon
        ? css`
            padding: 20px 35px 10px 63px;
          `
        : css`
            padding: 20px 35px 10px 10px;
          `;
    }}
  }
  &.active {
    border-bottom: 2px solid #9b2eed;
    ${(props) => {
      return props.hasicon
        ? css`
            padding: 20px 20px 10px 33px;
          `
        : css`
            padding: 20px 20px 10px 10px;
          `;
    }}
    &.phonefocus {
      padding-left: 63px;
    }
  }
  &.disabled {
    pointer-events: none;
    background: #e6e2e8;
  }
  &.error {
    border-bottom: 2px solid #dd0028;
  }
`;

const InputContainer = styled.div`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 30px;
  position: relative;
  @media (max-width: 480px) {
    width: 100%;
  }
  &.full-width {
    width: 100%;
  }
  .input-icon {
    position: absolute;
    left: 8px;
  }

  .input-label {
    position: absolute;
    left: 33px;
    color: #7c6c8a;
    font-size: 16px;
    transition: transform 0.3s, color 0.3s, font-size 0.3s;
    pointer-events: none;
    &.phonefocus {
      left: 65px;
      &:after {
        display: block;
        content: "+56 ";
        opacity: 1;
        font-size: 16px;
        color: #2d1441;
        position: absolute;
        left: -35px;
        top: 5px;
        height: 20px;
        width: 20px;
        transition: transform 0.3s;
      }
    }

    &.active {
      font-size: 12px;
      line-height: 15px;
      color: #9b2eed;
      transform: translateY(-12px);
      &.phonefocus {
        transform: translateY(-12px) translateX(-30px);
      }
      &.phonefocus:after {
        transform: translateY(12px) translateX(30px);
      }
    }

    &.error {
      font-weight: normal;
      color: #dd0028;
    }
  }
  .icon-valid {
    position: absolute;
    right: 10px;
    opacity: 0;
    transform: translateX(10px);
    transition: transform 0.3s, opacity 0.3s;
    &.active {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  .icon-invalid {
    position: absolute;
    right: 8px;
    opacity: 0;
    transform: translateX(10px);
    transition: transform 0.3s, opacity 0.3s;
    &.active {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  .icon-trailing {
    position: absolute;
    right: 10px;
    opacity: 0;
    transform: translateX(10px);
    transition: transform 0.3s, opacity 0.3s;
    cursor: pointer;
    &.active {
      opacity: 1;
      transform: translateX(0px);
    }
    &:before {
      content: "";
      display: block;
      background: url(${Tooltip});
      background-repeat: no-repeat;
      width: 359px; /* image width */
      height: 170px;
      max-height: 170px;
      position: absolute;
      bottom: 35px;
      right: -63px;
      opacity: 0;
      transition: opacity 0.6s;
      pointer-events: none;
      @media (max-width: 640px) {
        right: -35px;
      }
    }
    &:hover {
      &:before {
        opacity: 1;
      }
    }
  }
  .example-input {
    font-size: 12px;
    line-height: 15px;
    font-weight: 300;
    color: #7c6c8a;
    position: absolute;
    bottom: -20px;
    left: 7px;
    user-select: none;
    &.error {
      font-weight: normal;
      color: #dd0028;
    }
  }
`;

const InputItem = ({
  nameInput,
  iconInput,
  nameLabel,
  length,
  fieldType = "text",
  classAdd,
  exampleInput,
  disabledFields = false,
  errorInfo,
}) => {
  const { formData, setFormData } = useContext(FormContext);
  const { validationData, setValidationData } = useContext(ValidationContext);
  const [invalidForm, setInvalidForm] = useState(false);
  const [focused, setFocused] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    blurValidation();
    if(nameInput === "phone" || nameInput === "phoneToMigrate") {
      formData[nameInput] !== "" &&
      setFocused(true);
    }
  }, []);

  const removeEmoji = (string) => {
    var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

    return string.replace(regex, "");
  };

  const setInputValue = (value) => {
    value = removeEmoji(value);
    if (length) {
      value = value.slice(0, length);
    }
    setFormData({ ...formData, [nameInput]: value });
  };

  const blurValidation = () => {
    const invalidSetter = (field, status, shown) => (
      setValidationData({ ...validationData, [field]: status }),
      setInvalidForm(shown)
    );
    const ciInvalidSetter = (ci) => {
      const re = /^[\.aA0-9]{1}[\.aA0-9]{8,10}/g;
      return re.test(ci);
    };
    const emailInvalidSetter = (ci) => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(ci);
    };
    const nameInvalidSetter = (ci) => {
      const re = /[`\\|~!@#$%^&*()_+<>?:"{},.\/;'[\]]/;
      return re.test(ci);
    };
    const onlyLetters = (le) => {
      const re = /^[a-zA-Z\s]*$/;
      return re.test(le)
    };
    if (nameInput === "rut") {
      if (!validate(formData[nameInput])) {
        invalidSetter("rut", false, true);
        setErrorMessage(errorInfo);
      } else {
        invalidSetter("rut", true, false);
        setInputValue(format(formData[nameInput]).split(".").join(""));
      }
      formData[nameInput] === "" && invalidSetter("rut", false, false);
    }
    if (nameInput === "ci") {
      if (!ciInvalidSetter(formData[nameInput])) {
        invalidSetter("ci", false, true);
        setErrorMessage(errorInfo);
      } else {
        invalidSetter("ci", true, false);
      }
      formData[nameInput] === "" && invalidSetter("ci", false, false);
    }
    if (nameInput === "name" || nameInput === "lastName") {
      if (formData[nameInput].trim() === "") {
        invalidSetter(nameInput, false, false);
        setValidationData({
          ...validationData,
          [nameInput]: false,
        });
      } else if (formData[nameInput].trim().length < 3) {
        invalidSetter(nameInput, false, true);
        setErrorMessage("Mínimo 3 caracteres");
      } else {
        const res = !onlyLetters(formData[nameInput]);
        if (!res) {
          invalidSetter(nameInput, true, false);
          setValidationData({ ...validationData, [nameInput]: true });
        } else {
          invalidSetter(nameInput, false, true);
          setErrorMessage("No ocupes caracteres especiales ni números");
        }
      }
    }
    if (
      nameInput === "contractAddressStreet" ||
      nameInput === "contractAddress" ||
      nameInput === "contractAddressNum" ||
      nameInput === "dispatchAddressStreet" ||
      nameInput === "dispatchAddress" ||
      nameInput === "dispatchAddressNum"
    ) {
      formData[nameInput].trim() === ""
        ? setValidationData({
            ...validationData,
            [nameInput]: false,
          })
        : setValidationData({ ...validationData, [nameInput]: true });
    }
    if (nameInput === "phone" || nameInput === "phoneToMigrate") {
      if (formData[nameInput] === "" || formData[nameInput] === "+56") {
        setInputValue("");
        invalidSetter(nameInput, false, false);
        setValidationData({
          ...validationData,
          [nameInput]: false,
        });
      } else if (
        formData[nameInput].length < 9 ||
        formData[nameInput].length > 9
      ) {
        invalidSetter(nameInput, false, true);
        setErrorMessage(exampleInput);
        setValidationData({
          ...validationData,
          [nameInput]: false,
        });
      } else {
        setValidationData({ ...validationData, [nameInput]: true });
        invalidSetter(nameInput, true, false);
      }
    }
    if (nameInput === "email") {
      if (emailInvalidSetter(formData[nameInput])) {
        invalidSetter("email", true, false);
      } else {
        invalidSetter("email", false, true);
        setErrorMessage(errorInfo);
      }
      formData[nameInput] === "" && invalidSetter("email", false, false);
    }
    (nameInput === "phone" || nameInput === "phoneToMigrate") &&
      formData[nameInput] === "" &&
      setFocused(false);
  };
  const onlyNumbers = (event) => {
    const regex = new RegExp("^[0-9]+$");
    const key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if(!regex.test(key)){
      event.preventDefault();
      return false;
    }
  }
  const test = () => {
    if (nameInput === "phone" || nameInput === "phoneToMigrate") {
      setFocused(true);
      // setInputValue("+56");
    }
  };
  return (
    <InputContainer className={classAdd}>
      {iconInput && <img className="input-icon" src={iconInput} alt="rut" />}
      <TextInput
        hasicon={iconInput}
        name={nameInput}
        onKeyPress={
          (nameInput === "phone" ? onlyNumbers : null) || 
          (nameInput === "phoneToMigrate" ? onlyNumbers : null) || 
          (nameInput === "dispatchAddress" ? onlyNumbers : null) || 
          (nameInput === "contractAddress" ? onlyNumbers : null)
        }
        onBlur={blurValidation}
        onFocus={test}
        onChange={
          (nameInput === "phone" || nameInput === "phoneToMigrate"
            ? (e) => setInputValue(e.target.value.slice(0, 9))
            : (e) => setInputValue(e.target.value)
          ),
          (nameInput === "dispatchAddress" || nameInput === "contractAddress"
            ? (e) => setInputValue(e.target.value.slice(0, 8))
            : (e) => setInputValue(e.target.value)
          )
        }
        value={formData[nameInput].slice(0, length)}
        className={`${
          formData[nameInput]
            ? disabledFields
              ? "input-text active disabled"
              : invalidForm
              ? "input-text active error"
              : "input-text active"
            : disabledFields
            ? "input-text disabled"
            : invalidForm
            ? "input-text  error"
            : "input-text"
        } ${focused && "phonefocus"}`}
        type={fieldType}
        maxLength={length}
        autoComplete="off"
      />
      <label
        className={`${
          formData[nameInput]
            ? invalidForm
              ? "input-label active error"
              : "input-label active"
            : invalidForm
            ? "input-label error"
            : "input-label "
        } ${focused && "phonefocus"}`}
      >
        {nameLabel}
      </label>
      <img
        className={
          validationData[nameInput] ? "icon-valid active" : "icon-valid"
        }
        src={IconValid}
        alt="valido"
      />
      <img
        className={invalidForm ? "icon-invalid active" : "icon-invalid"}
        src={IconError}
        alt="invalido"
      />
      {nameInput === "ci" && !invalidForm && !validationData[nameInput] && (
        <picture className="icon-trailing active">
          <img src={IconTrailing} alt="trailing" />
        </picture>
      )}
      <span className={invalidForm ? "example-input error" : "example-input"}>
        {invalidForm ? errorMessage : exampleInput}
      </span>
    </InputContainer>
  );
};

export default InputItem;
