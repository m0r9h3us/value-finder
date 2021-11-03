import React from "react";
import { FC } from "react";
import { Header } from "./Header/Header";

export const Layout: FC<{}> = ({ children }) => {
  return (
    <div className="">
      <Header height={16}/>
      <main className="">{children}</main>
    </div>
  );
};
