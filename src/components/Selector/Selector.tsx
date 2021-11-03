import React from "react";
import classNames from "classnames";
import { useState } from "react";
import { IValue } from "../../values.json";
import { BinaryOperatorToken, isTemplateExpression } from "typescript";

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
  const height = absoluteHeight ? "h-screen" : "h-full";
  return (
    <div className={`flex flex-grow p-2 space-x-2 bg-primary-500`}>
      <div
        className="flex flex-col flex-grow 
                    md:min-w-48
                    items-center justify-start 
                    p-4 rounded-md
                    bg-primary-700"
      >
        {" "}
        <h1 className="font-bold p-2 rounded-md text-primary-400">My Values</h1>
        <ul className="flex-col items-center">
          {chosen.map((item: IValue) => (
            <SelectorItem
              key={item.id}
              onClick={handleRemoveItem}
              item={item}
              hoverColor="red"
            />
          ))}
        </ul>
      </div>
      <div className="flex flex-col flex-grow items-center bg-primary-700 p-4 rounded-md ">
        <h1 className="font-bold p-2 text-primary-400">Possible Values</h1>
        <ul
          className="grid
                      grid-cols-1 md:grid-cols-4 lg:grid-cols-7
                      overflow-y-auto"
        >
          {available.map((item: IValue) => (
            <SelectorItem
              key={item.id}
              onClick={handleAddItem}
              item={item}
              hoverColor="green"
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

interface ISelectorItemProps {
  item: IValue;
  hoverColor: "red" | "green";
  onClick: (item: IValue) => void;
}

const SelectorItem = ({ onClick, item, hoverColor }: ISelectorItemProps) => {
  const className = classNames({
    "flex flex-grow justify-center px-4 py-2 m-0.5 rounded-md mr-2": true,
    "bg-primary-600 text-primary-400 font-medium": true,
    "hover:text-primary-800": true,
    "hover:bg-green-400": hoverColor === "green",
    "hover:bg-red-400": hoverColor === "red",
  });

  return (
    <li className={className} key={item.id} onClick={onClick.bind(this, item)}>
      {item.title}
    </li>
  );
};
