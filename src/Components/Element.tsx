import { Input } from "./Elements/Input";
import { Textarea } from "./Elements/Textarea";
import { Button } from "./Elements/Button";

import React from "react";
import { TElements } from "./Types/Types";

interface IFields {
  fields: TElements;
}

export const Element = ({ fields }: IFields): JSX.Element | null => {
  const { type, label } = fields;

  switch (type) {
    case "checkbox":
    case "date":
    case "number":
    case "text":
    case "radio":
      return <Input type={type} label={label} />;
    case "textarea":
      return <Textarea label={label} />;
    case "button":
      return <Button label={label!} />;
    default:
      return null;
  }
};
