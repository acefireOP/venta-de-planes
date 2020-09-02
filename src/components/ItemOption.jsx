import React from "react";
import styled from "styled-components";

const Option = styled.option`
  &.disabled {
    color: #d6d6d6;
  }
`;

const ItemOption = ({ text, isEnabled = true, allAvailable }) => {
  if (allAvailable) {
    return <Option value={text}>{text}</Option>;
  } else {
    return (
      <Option
        value={text}
        disabled={!isEnabled}
        className={!isEnabled && "disabled"}
      >
        {text}
      </Option>
    );
  }
};

export default ItemOption;
