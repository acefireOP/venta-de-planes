import React, {useState, useContext, useEffect} from "react";
import styled, {css} from "styled-components";
import IconValid from "../images/icon_valid.svg";
import Tooltip from "../images/tooltip_ci.svg";
import {validate, format} from "rut.js";
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
}};
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
    }
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
    
    &.active {
      font-size: 12px;
      line-height: 15px;
      color: #9b2eed;
      transform: translateY(-12px);
    }

    &.error {
      font-weight: normal;
      color: #dd0028;
    }
  }
  .icon-valid {
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
    top: 50px;
    left: 7px;
    user-select: none;
    &.error {
      font-weight: normal;
      color: #dd0028;
    }
  }
`;


class InputItem extends React.Component {
    state = {
        invalidForm: 0, //success 1 , fail: 2
        errorMessage: false,
        value: ''
    };

    setInvalidForm = (invalidForm) => {
        this.setState({
            invalidForm
        })
    };
    setErrorMessage = (errorMessage) => {
        this.setState({
            errorMessage
        })
    };

    setValue = (value) => {
        this.setState({
            value
        })
    };

    removeEmoji = (string) => {
        const regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
        return string.replace(regex, "");
    };

    setInputValue = (value) => {
        const {onChange, length} = this.props;
        value = this.removeEmoji(value);
        if (length) {
            value = value.slice(0, length);
        }
        this.setValue(value);
        onChange && onChange(value)
    };

    blurValidation = () => {
        const {errorInfo, onBlur} = this.props;
        const {value} = this.state;
        const invalidSetter = (field, status, shown) => (
            this.setInvalidForm(shown)
        );
        if (value.trim() === '') {
            invalidSetter("rut", false, 0);
            return;
        }
        if (!validate(value)) {
            invalidSetter("rut", false, 2);
            this.setErrorMessage(errorInfo);
            onBlur&&onBlur(false)
            return false;
        } else {
            invalidSetter("rut", true, 1);
            this.setInputValue(format(value).split(".").join(""));
            onBlur&&onBlur(true)
            return true;
        }
    };

    render() {
        const {nameInput, iconInput, nameLabel, length, fieldType = "text", classAdd,
            exampleInput, disabledFields = false
        } = this.props;
        const {invalidForm, value, errorMessage} = this.state;
        return (
            <InputContainer className={classAdd}>
                {iconInput && <img className="input-icon" src={iconInput} alt="rut"/>}
                <TextInput
                    hasicon={iconInput}
                    name={nameInput}
                    onBlur={this.blurValidation}
                    onChange={(e) => this.setInputValue(e.target.value)}
                    value={value.slice(0, length)}
                    className={`${
                        value
                            ? disabledFields
                            ? "input-text active disabled"
                            : invalidForm === 2
                                ? "input-text active error"
                                : "input-text active"
                            : disabledFields
                            ? "input-text disabled"
                            : invalidForm === 2
                                ? "input-text  error"
                                : "input-text"
                    }`}
                    type={fieldType}
                    maxLength={length}
                    autoComplete="off"
                />
                <label
                    className={`${
                        value
                            ? invalidForm === 2
                            ? "input-label active error"
                            : "input-label active"
                            : invalidForm === 2
                            ? "input-label error"
                            : "input-label "
                    }`}
                >
                    {nameLabel}
                </label>
                <img
                    className={
                        invalidForm === 1 ? "icon-valid active" : "icon-valid"
                    }
                    src={IconValid}
                    alt="valido"
                />
                <img
                    className={invalidForm === 2 ? "icon-invalid active" : "icon-invalid"}
                    src={IconError}
                    alt="invalido"
                />
                <span className={invalidForm === 2 ? "example-input error" : "example-input"}>
        {invalidForm === 2 ? errorMessage : exampleInput}
      </span>
            </InputContainer>
        );
    }
};

export default InputItem;
