import { Input } from "./Elements/Input";
import { Textarea } from "./Elements/Textarea";
import { Button } from "./Elements/Button";

import React from "react";
import { TElements } from "./Types/Types";

interface ISwitcherProps {
  fields: TElements;
  index: number;
}

export const Switch = ({ index, fields }: ISwitcherProps): JSX.Element | null => {
  const { type, label } = fields;

  switch (type) {
    case "checkbox":
    case "date":
    case "number":
    case "text":
    case "radio":
      return <Input key={index} type={type} label={label} />;
    case "textarea":
      return <Textarea key={index} label={label} />;
    case "button":
      return <Button key={index} label={label!} />;
    default:
      return null;
  }
};
