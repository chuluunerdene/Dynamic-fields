import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { Config } from "./Components/View/Config";
import { Result } from "./Components/View/Result";
import { Tabs } from "./Components/View/Tabs";
import { TConfig } from "./Components/Types/Types";

const Wrapper = styled.div`
  margin: 20px;
  max-width: 600px;
`;

function App() {
  const [config, setConfig] = useState<TConfig>({ buttons: [], fields: [] });
  return (
    <Wrapper>
      <Tabs />
      <Config setConfig={setConfig} />
      <Result config={config} />
    </Wrapper>
  );
}

export default App;
