import styled from "styled-components";
import React, { useContext } from "react";
import { TContext } from "../Types/Types";
import { TabContext } from "../../context/ContextProvider";

const Wrapper = styled.nav`
  display: flex;
`;

const TabWrapper = styled.div`
  min-width: 100px;
  cursor: pointer;
  border: 1px solid #000;
  border-bottom: none;
  background-color: #ddd;
  border-radius: 10px 10px 0px 0px;
  padding: 5px 20px 5px 20px;
  text-align: center;
`;

export const Tabs = (): JSX.Element => {
  const { setActiveTab }: TContext = useContext(TabContext);

  const handleTab = (e: React.MouseEvent<HTMLDivElement>) => {
    setActiveTab(e.currentTarget.id);
  };

  return (
    <Wrapper>
      <TabWrapper id="0" onClick={handleTab}>
        Config
      </TabWrapper>
      <TabWrapper id="1" onClick={handleTab}>
        Result
      </TabWrapper>
    </Wrapper>
  );
};
