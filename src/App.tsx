import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { Config } from "./Components/UI/Config";
import { Result } from "./Components/UI/Result";
import { TabNav } from "./Components/UI/TabNav";
import { TConfig } from "./Components/Types/Types";

const Wrapper = styled.div`
  margin: 20px;
  max-width: 600px;
`;

function App() {
  const [config, setConfig] = useState<TConfig>({ buttons: [], fields: [] });
  return (
    <Wrapper>
      <TabNav />
      <Config setConfig={setConfig} />
      <Result config={config} />
    </Wrapper>
  );
}

export default App;
