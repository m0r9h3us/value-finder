import { createContext } from "react";
import { IValue } from "../types";

export interface IValueContext {
  values: IValue[];
  selected: IValue[];
  selectItem: (value: IValue) => void;
  removeItem: (value: IValue) => void;
}

export const ValueContext = createContext<IValueContext | undefined>(undefined);
