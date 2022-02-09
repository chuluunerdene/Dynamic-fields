import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin: 10px;
  width: 330px;
`;
const LabelWrapper = styled.div`
  min-width: 130px;
`;

interface IInputProps {
  label: string;
  type: string;
}

// @ts-ignore
export const Input = ({ type, label }: IInputProps): JSX.Element => {
  return (
    <Wrapper>
      <LabelWrapper>
        <label>{label}</label>
      </LabelWrapper>
      <div>
        <input aria-label={label} type={type} />
      </div>
    </Wrapper>
  );
};
