import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import styled from "styled-components";
import { TContext, TConfig } from "../Types/Types";
import { TabContext } from "../../context/ContextProvider";

const Wrapper = styled.div<{ active: string }>`
  display: ${(props) => (props.active === "0" ? "flex" : "none")};
  flex-direction: column;
  padding: 15px;
  border: 1px solid black;
  textarea {
    width: 100%;
    height: 450px;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
  }
`;

const ButtonWrapper = styled.div`
  display: inherit;
  justify-content: flex-end;
  button {
    font-size: 1.3em;
  }
`;
const ErrorWrapper = styled.span`
  color: red;
  align-self: center;
`;

interface IConfigProps {
  setConfig: Dispatch<SetStateAction<TConfig>>;
}

export const Config = ({ setConfig }: IConfigProps): JSX.Element => {
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { activeTab, setActiveTab }: TContext = useContext(TabContext);

  const handleConfig = (): void => {
    try {
      setConfig(JSON.parse(input));
      setError("");
      setActiveTab("1");
    } catch (e) {
      setError("Invalid JSON");
    }
  };

  return (
    <Wrapper active={activeTab}>
      <div>
        <textarea
          placeholder="
        {'buttons': [{'label': 'Submit','type': 'button'}],'fields': [{ 'label': 'Number','type': 'number' },..."
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
      </div>
      <ErrorWrapper>{error}</ErrorWrapper>
      <ButtonWrapper>
        <button onClick={handleConfig}> Apply</button>
      </ButtonWrapper>
    </Wrapper>
  );
};
