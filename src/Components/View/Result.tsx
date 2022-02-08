import { Element } from "../Element";
import React, { useContext } from "react";
import styled from "styled-components";
import { Context, TConfig, TElements } from "../Types/Types";
import { TabContext } from "../../context/ContextProvider";

const Wrapper = styled.div<{ active: string }>`
  display: ${(props) => (props.active === "1" ? "block" : "none")};
`;

interface ResultProps {
  config: TConfig[];
}

export const Result = ({ config }: ResultProps): JSX.Element => {
  const { activeTab }: Context = useContext(TabContext);

  const getElements = () => {
    return config["fields"].map((element: TElements, index: any) => {
      return <Element key={index} data={element} />;
    });
  };
  return (
    <>
      <Wrapper active={activeTab}>
        {config.length !== 0 ? getElements() : "No data"}
      </Wrapper>
    </>
  );
};
