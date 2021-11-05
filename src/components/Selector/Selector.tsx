import React from "react";
import { useState } from "react";
import { IValue } from "../../values.json";
import SelectorColumn from "./SelectorColumn";

interface SelectorProps {
  /**
   * How many elements should be chosen from the list
   */
  nbOfElements: number;
  /**
   * List of values to choose items from
   */
  list: IValue[];
  /**
   * If this component is rendererd in a parent that defines a height set this to false.
   */
  absoluteHeight?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Selector = ({
  nbOfElements = 10,
  list,
  absoluteHeight = true,
}: SelectorProps) => {
  const [available, setAvailable] = useState<IValue[]>(list);
  const [chosen, setChosen] = useState<IValue[]>([]);

  const handleAddItem = (item: IValue) => {
    if (
      !chosen.find((it) => {
        return it.id === item.id;
      }) &&
      chosen.length < nbOfElements + 1
    ) {
      setChosen((prevState) => [
        ...prevState,
        { id: item.id, title: item.title },
      ]);
      setAvailable((prevState) => {
        const newArr = [...prevState];
        const index = prevState.indexOf(item);
        if (index > -1) {
          newArr.splice(index, 1);
        }
        return newArr;
      });
    }
  };

  const handleRemoveItem = (item: IValue) => {
    setAvailable((prevState) => [
      ...prevState,
      { id: item.id, title: item.title },
    ]);

    setChosen((prevState) => {
      const newArr = [...prevState];
      const index = prevState.indexOf(item);
      if (index > -1) {
        newArr.splice(index, 1);
      }
      return newArr;
    });
  };
  const height = absoluteHeight ? "h-screen" : "";
  return (
    <div className={`${height} flex flex-grow p-2 space-x-2 bg-primary-500`}>
      <SelectorColumn
        title="My Values"
        content={chosen}
        multiCol={false}
        onItemClick={handleRemoveItem}
      ></SelectorColumn>

      <SelectorColumn
        title="All Values"
        content={available}
        multiCol={true}
        onItemClick={handleAddItem}
      ></SelectorColumn>
    </div>
  );
};
