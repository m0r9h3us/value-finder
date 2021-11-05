import React from "react";
import cn from "classnames";
import SelectorItem from "./SelectorItem";
import { IValue } from "../../values.json";

import styles from "./SelectorColumn.module.css";

export interface ISelectorColumn {
  title: string;
  content: IValue[];
  multiCol: boolean;
  onItemClick: (item: IValue) => void;
}

const SelectorColumn = ({
  title,
  content,
  multiCol,
  onItemClick,
}: ISelectorColumn) => {
  
  const ulStyle = cn(
    styles.column__list,
    multiCol ? styles.list__multicol : styles.list__onecol
  );

  return (
    <div className={styles.column}>
      <h1>{title}</h1>
      <ul className={ulStyle}>
        {content.map((item: IValue) => (
          <SelectorItem
            key={item.id}
            onClick={onItemClick}
            item={item}
            hoverColor="green"
          />
        ))}
      </ul>
    </div>
  );
};

export default SelectorColumn;
