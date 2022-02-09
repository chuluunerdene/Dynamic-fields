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
  button{
    font-size: 1.3em;
  }
`;

interface IConfig {
  setConfig: Dispatch<SetStateAction<TConfig>>;
}

export const Config = ({ setConfig }: IConfig): JSX.Element => {
  const [input, setInput] = useState<string>("");
  const { activeTab, setActiveTab }: TContext = useContext(TabContext);
  let data: TConfig

  const updateProgress = (): void => setActiveTab("1");

  const handleConfig = (): void => {
    try {
      data = JSON.parse(input);
    } catch (error) {
      throw new Error("Invalid JSON");
    }
    setConfig(data);
    updateProgress();
  };

  return (
    <Wrapper active={activeTab}>
      <div>
        <textarea onChange={(e) => setInput(e.target.value)}></textarea>
      </div>
      <ButtonWrapper>
        <button onClick={handleConfig}> Apply</button>
      </ButtonWrapper>
    </Wrapper>
  );
};
