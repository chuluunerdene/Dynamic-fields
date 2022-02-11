import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 5px;
  button {
    font-size: 1.3em;
  }
`;

export const Button = ({ label }: { label: string }): JSX.Element => {
  return (
    <Wrapper>
      <div>
        <button role="button">{label}</button>
      </div>
    </Wrapper>
  );
};
