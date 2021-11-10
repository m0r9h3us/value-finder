import React from "react";
import cn from "classnames";
import styles from "./SelectorItem.module.css";

import { IValue } from "../../types";

export interface ISelectorItemProps {
  item: IValue;
  hoverColor: "red" | "green";
  onClick: (item: IValue) => void;
}

const SelectorItem = ({ onClick, item, hoverColor }: ISelectorItemProps) => {
  const liStyle = cn(styles.item, item.selected ? styles.item__selected : "", {
    "hover:bg-green-400": hoverColor === "green",
    "hover:bg-red-400": hoverColor === "red",
  });

  return (
    <li key={item.id} className={liStyle} onClick={onClick.bind(null, item)}>
      <span>{item.title} </span>
    </li>
  );
};

export default SelectorItem;
