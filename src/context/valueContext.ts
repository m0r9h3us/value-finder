import { createContext } from "react";
import { IValue } from "../types";

export interface IValueContext {
  values: IValue[];
  selected: IValue[];
  sorted: IValue[];

  selectItem: (value: IValue) => void;
  removeItem: (value: IValue) => void;
  setSorted: (values: IValue[]) => void;
}

export const ValueContext = createContext<IValueContext | undefined>(undefined);
