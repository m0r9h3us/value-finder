import { FC, useCallback, useState } from 'react';
import { NavigationContext, INav } from './navigationContext';

interface IValueContextProviderProps {}

const NavigationContextProvider: FC<IValueContextProviderProps> = ({
  children,
}) => {
  const [nav, setNav] = useState<INav>({ prev: undefined, next: undefined });
  const [sidebarIsVisible, setSidebarIsVisible] = useState(true);
  const [title, setTitle] = useState('');

  const toggleSidebar = () => {
    setSidebarIsVisible((prev) => !prev);
  };

  const setNavFn = useCallback(
    (prev: string | undefined, next: string | undefined) => {
      setNav({ prev: prev, next: next });
    },
    []
  );

  const navigationContext = {
    nav: nav,
    sidebarIsVisible: sidebarIsVisible,
    title: title,
    setNav: setNavFn,
    toggleSidebar: toggleSidebar,
    setTitle: setTitle,
  };
  return (
    <NavigationContext.Provider value={navigationContext}>
      {' '}
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;
