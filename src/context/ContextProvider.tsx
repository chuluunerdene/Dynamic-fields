import { createContext, ReactNode, useState } from "react";
import { Context } from "../Components/Types/Types";

export const TabContext = createContext<Context>({
  activeTab: "",
  setActiveTab(): void {},
});

export const ContextProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [activeTab, setActiveTab] = useState<string>("0");

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};
