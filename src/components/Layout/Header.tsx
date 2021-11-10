import React from "react";
import styles from "./Header.module.css";
import cn from "classnames";
import {Link} from "react-router-dom"

interface IHeaderProps {
  /**
   * Height of the Header in Tailwind Units
   */
  height?: number;
  handleSidebarButton: () => void;
}

export const Header = ({ height = 16, handleSidebarButton }: IHeaderProps) => {
  return (
    <header className={cn(styles.header, `h-${height}`)}>
      <div className="flex items-center justify-between flex-grow p-1 rounded-md bg-base-dark">
        <div>
          <button className="p-2.5 text-lg rounded-md shadow-md bg-secondary-300">
            {" "}
            PREV
          </button>
        </div>
        <div>
          <button
            className="p-2 rounded-full top-4 left-36 md:translate-x-full opacity-90 bg-primary-600"
            onClick={handleSidebarButton}
          >
            Sidebar
          </button>
        </div>

        <span className="text-2xl font-bold"> CHOOSE</span>
        <div>
          <button
            className="p-2 rounded-full top-4 left-36 md:translate-x-full opacity-90 bg-primary-600"
            onClick={handleSidebarButton}
          >
            Sidebar
          </button>
        </div>
        
        <div>
        <Link to="/rate" className="p-2.5 text-lg rounded-md bg-secondary-300">NEXT </Link>
          {/* <button className="p-2.5 text-lg rounded-md bg-secondary-300">
            {" "}
            NEXT
          </button> */}
          {/* <Button label="DARK" size="xl"></Button> */}
        </div>
      </div>
    </header>
  );
};
