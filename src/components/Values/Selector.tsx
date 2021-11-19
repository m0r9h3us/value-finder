import React, { useEffect, useState } from "react";
import { IValue } from "../../types";
import List from "./List";
import useValueContext from "../../hooks/useValueContext";

interface PoolProps {
  /**
   * If this component is rendererd in a parent that defines a height set this to false.
   */
  absoluteHeight?: boolean;
}

/**
 * Primary UI component for user interaction
 */
const Selector = ({ absoluteHeight = true }: PoolProps) => {
  const { selectItem, removeItem, values } = useValueContext();

  const handleItemClick = (item: IValue) => {
    console.log("selected: " + item.selected);
    if (!item.selected) {
      selectItem(item);
    } else {
      removeItem(item);
    }
  };

  const height = absoluteHeight ? "h-screen" : "";
  return (
    <div className={`${height} flex flex-grow p-1 space-x-2 bg-primary-500`}>
      <List
        title="All Values"
        content={values}
        multiCol={true}
        onItemClick={handleItemClick}
        navigation={true}
      ></List>
    </div>
  );
};

export default Selector;
