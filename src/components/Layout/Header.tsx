import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import cn from "classnames";
import { Link } from "react-router-dom";
import useNavigationContext from "../../hooks/useNavigationContext";
import {
  HomeIcon,
  MenuIcon,
  ArrowCircleRightIcon,
  ArrowCircleLeftIcon,
} from "@heroicons/react/solid";

import { IconItem } from "./HeaderItem";

interface IHeaderProps {
  /**
   * Height of the Header in Tailwind Units
   */
  height?: number;
  handleSidebarButton: () => void;
}

export const Header = ({ height = 16, handleSidebarButton }: IHeaderProps) => {
  console.log("render Header");
  
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setCount((prev) => prev++);
    
    console.log("render Header");
  }, []);

  return (
    <header className={cn(styles.header, `h-${height}`)}>
      <div className="flex items-center justify-between flex-grow p-1 rounded-sm bg-base-dark">
        <div className="flex items-center space-x-2 ">
          <IconItem linkTo="/" Icon={HomeIcon}></IconItem>
          <span className="font-sans text-2xl font-bold tracking-tighter">
            bAware
          </span>
        </div>
        <div className="flex">
          {/* <div className="flex p-1 space-x-1 rounded ">
            <Link
              to="/rate"
              className="rounded hover:bg-primary-800 hover:bg-opacity-20"
            >
              <ArrowCircleLeftIcon className="w-8 h-8" />
            </Link>
            <Link
              to="/choose"
              className="rounded hover:bg-primary-800 hover:bg-opacity-20"
            >
              <ArrowCircleRightIcon className="w-8 h-8" />
            </Link>
          </div> */}
          <div
            className="flex space-x-6 rounded-sm cursor-pointer hover:bg-primary-800 hover:bg-opacity-20"
            onClick={handleSidebarButton}
          >
            <MenuIcon className="w-10 h-10"></MenuIcon>
          </div>
        </div>
      </div>
    </header>
  );
};
