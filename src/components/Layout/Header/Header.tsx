import React from "react";

import { Button } from "../../Partials/Button/Button";
import styles from "./Header.module.css";
import cn from "classnames";

interface IHeaderProps {
  /**
   * Height of the Header in Tailwind Units
   */
  height?: number;
}

export const Header = ({ height = 16 }: IHeaderProps) => {
  return (
    <header className={cn(styles.header, `h-${height}`)}>
      <div className={styles["content"]}>
        <div>
          <span>Acme</span>
        </div>
        <div>
          <Button label="DARK" size="md"></Button>
        </div>
      </div>
    </header>
  );
};
