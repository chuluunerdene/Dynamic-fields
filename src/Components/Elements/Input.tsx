import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 10px;
`;
const LabelWrapper = styled.div`
  min-width: 130px;
`;
const ElementWrapper = styled.div``;

interface InputProps {
  label: string;
  type: string;
}

// @ts-ignore
export const Input = ({ type, label }: InputProps) => {
  return (
    <Wrapper>
      <LabelWrapper>
        <label>{label}</label>
      </LabelWrapper>
      <ElementWrapper>
        <input type={type} />
      </ElementWrapper>
    </Wrapper>
  );
};
