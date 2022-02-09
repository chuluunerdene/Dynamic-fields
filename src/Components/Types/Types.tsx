export type TConfig = {
  buttons: TElements[];
  fields: TElements[];
};

export type TElements = {
  label: string;
  type?: string;
};

export type TContext = {
  activeTab: string;
  setActiveTab: (value: string) => void;
};
