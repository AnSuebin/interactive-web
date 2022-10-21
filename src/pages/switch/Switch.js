import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const ReactSwitchButton = styled.span`
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 45px;
  height: 45px;
  border-radius: 45px;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`;
const ReactSwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  height: 50px;
  background: grey;
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
  cursor: pointer;
  &:active ${ReactSwitchButton} {
    width: 60px;
  }
`;

const ReactSwitchCheckbox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + ${ReactSwitchLabel} {
    background: rgb(254, 244, 148, 0.777);
    ${ReactSwitchButton} {
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }
  }
`;

const Switch = () => {
  const [value, setValue] = useState(false);
  return (
    <ButtonContainer>
      <ReactSwitchCheckbox
        id={`react-switch-new`}
        type="checkbox"
        checked={value}
        onChange={() => {
          setValue(!value);
        }}
      />
      <ReactSwitchLabel htmlFor={`react-switch-new`}>
        <ReactSwitchButton />
      </ReactSwitchLabel>
    </ButtonContainer>
  );
};

export default Switch;
