import { useContext } from "react";
import {
  NavigationContext,
  INavigationContext,
} from "../context/navigationContext";

const useValueContext = (): INavigationContext => {
  const valueContext = useContext(NavigationContext);
  if (valueContext === undefined) {
    throw new Error(
      " Context undefined. Make sure the Provider wraps your component."
    );
  }
  return valueContext;
};

export default useValueContext;
