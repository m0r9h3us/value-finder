import React from 'react';
import { FC, useState, useEffect } from 'react';
import { Header as FixedHeader } from './Header';
import useMediaQuery from '../../hooks/useMediaqueries';
import Menu from './Menu';
interface ILayoutProps {}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const isMobil = !useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    console.log('SETTING menuIsVisible to: ' + isMobil);
    setMenuIsVisible(!isMobil);
  }, [isMobil]);

  const toggleMenu = () => {
    setMenuIsVisible((prev) => !prev);
  };

  const closeMenu = () => {
    if (isMobil) setMenuIsVisible(false);
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <FixedHeader height={16} handleSidebarButton={toggleMenu} />
      <main className='flex flex-grow h-screen pt-16'>
        {menuIsVisible && <Menu closeMenu={closeMenu} />}
        {((isMobil && !menuIsVisible) || !isMobil) && children}
      </main>
    </div>
  );
};
