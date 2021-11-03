import React from "react";
import { FC } from "react";
import { Header } from "./Header/Header";

export const Layout: FC<{}> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
