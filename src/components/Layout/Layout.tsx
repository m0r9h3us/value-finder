import React from "react";
import { FC } from "react";
import { Header as FixedHeader } from "./Header/Header";

export const Layout: FC<{}> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <FixedHeader height={16} />
      <main className="h-screen pt-16 flex flex-grow">{children}</main>
    </div>
  );
};
