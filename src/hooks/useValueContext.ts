import { useContext } from "react";
import { ValueContext, IValueContext } from "../context/valueContext";

const useValueContext = (): IValueContext => {
  const valueContext = useContext(ValueContext);
  if (valueContext === undefined) {
    throw new Error(
      " Context undefine. Make sure the Provider wraps your component."
    );
  }
  return valueContext;
};

export default useValueContext;
