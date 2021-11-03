import React from "react";

import { Button } from "../../Partials/Button/Button";
interface IHeaderProps {
  /**
   * Height of the Header in Tailwind Units
   */
  height?: number;
}

export const Header = ({ height = 16 }: IHeaderProps) => {
  return (
    <header
      className={`
    fixed top-0 h-${height}
    flex w-screen
    p-2 pb-0 
    bg-primary-500
    `}
    >
      <div
        className={`flex flex-grow justify-between items-center 
                      bg-base-dark 
                      px-2 p-2 
                      rounded-md
                      `}
      >
        <div>
          <span>Acme</span>
        </div>
        <div>
          <Button label="DARK"></Button>
        </div>
      </div>
    </header>
  );
};
