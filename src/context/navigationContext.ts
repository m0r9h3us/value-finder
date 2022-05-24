import { createContext } from "react";


export interface INav {
    prev: string | undefined;
    next: string | undefined;
}

export interface INavigationContext {
  nav: INav;
  sidebarIsVisible: boolean;
  title: string;

  toggleSidebar: () => void;
  setNav: (prev: string, next: string) => void;
  setTitle: (title: string) => void;
}

export const NavigationContext = createContext<INavigationContext | undefined>(
  undefined
);
