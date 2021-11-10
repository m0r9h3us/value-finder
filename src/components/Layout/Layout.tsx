import React from "react";
import { FC, useState } from "react";
import { Header as FixedHeader } from "./Header";
import { Transition } from "@headlessui/react";
import SelectorColumn from "../Selector/SelectorList";
import useValueContext from "../../hooks/useValueContext";
import useMediaQuery from "../../hooks/useMediaqueries";
// import { Sidebar } from "./Sidebar";
interface ILayoutProps {
  sidebarIsVisible: boolean;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  const valCTX = useValueContext();
  const [sidebarIsVisible, setSidebarIsVisible] = useState(false);
  const handleSidebarButton = () => {
    setSidebarIsVisible((prev) => !prev);
  };

  const isMobil = !useMediaQuery("(min-width: 960px)");
  return (
    <div className="flex flex-col min-h-screen">
      <FixedHeader height={16} handleSidebarButton={handleSidebarButton} />
      <main className="flex flex-grow h-screen pt-16">
        {sidebarIsVisible && (
          <div className="flex flex-grow p-2">
            <SelectorColumn
              title="My Values"
              content={valCTX.selected}
              multiCol={false}
              onItemClick={valCTX.removeItem}
            ></SelectorColumn>
          </div>
        )}

        {((isMobil && !sidebarIsVisible) || !isMobil) && children}
        {/* {isMobil && !sidebarIsVisible && children} */}
      </main>
    </div>
  );
};

/* <Transition
className="flex flex-grow"
show={sidebarIsVisible}
enter="transform transition ease-in-out duration-1200"
enterFrom="-translate-x-48"
enterTo="translate-x-0"
leave="transform transition ease-in-out duration-900"
leaveFrom="translate-x-full"
leaveTo="translate-x-0"
> */
