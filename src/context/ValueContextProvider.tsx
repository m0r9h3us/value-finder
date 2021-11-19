import { FC, useState } from "react";
import { ValueContext } from "./valueContext";
import { IValue } from "../types";

interface IValueContextProviderProps {
  /**
   * How many elements should be chosen from the list
   */
  nbOfSelectableElements: number;
  /**
   * List of values to choose items from
   */
  items: IValue[];
}

const ValueContextProvider: FC<IValueContextProviderProps> = ({
  children,
  nbOfSelectableElements = 10,
  items = [],
}) => {
  const [values, setValues] = useState<IValue[]>(items);
  const [sorted, setSorted] = useState<IValue[]>([]);
  const selected = values.filter((it) => it.selected === true);

  const setSelected = (item: IValue, to: boolean) => {
    setValues((prevState) => {
      const index = values.findIndex((it) => it.id === item.id);
      if (index !== -1) {
        const newState = [...prevState];
        newState[index] = { id: item.id, title: item.title, selected: to };
        return newState;
      }

      return prevState;
    });
  };

  // TODO: if too many elements are in the list return an error
  const selectItem = (item: IValue) => {
    if (selected.length < nbOfSelectableElements) {
      setSelected(item, true);
    }
  };

  const removeItem = (item: IValue) => {
    setSelected(item, false);
  };

  const valueContext = {
    values: values,
    selected: selected,
    sorted: sorted,
    selectItem: selectItem,
    removeItem: removeItem,
    setSorted: (items: IValue[]) => setSorted(items),
  };

  return (
    <ValueContext.Provider value={valueContext}>
      {" "}
      {children}
    </ValueContext.Provider>
  );
};

export default ValueContextProvider;
