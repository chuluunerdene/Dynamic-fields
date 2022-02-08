import { Input } from "./Elements/Input";
import { Textarea } from "./Elements/Textarea";
import React from "react";
import { TElements } from "./Types/Types";

interface Fields {
  data: TElements;
}

export const Element = ({ data }: Fields) => {
  const { type, label } = data;
  console.log(type);
  switch (type) {
    case "checkbox":
    case "date":
    case "number":
    case "text":
    case "radio":
      return <Input type={type} label={label} />;
    case "textarea":
      return <Textarea label={label} />;
    default:
      return null;
  }
};
