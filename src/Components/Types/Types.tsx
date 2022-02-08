export type TConfig = {
  buttons: TButtons;
  fields: TElements;
};
export type TButtons = {
  label: string;
};

export type TElements = {
  label: string;
  type: string;
};

export type Context = {
  activeTab: string;
  setActiveTab: (value: string) => void;
};
