import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import cn from 'classnames';
import { HomeIcon, MenuIcon } from '@heroicons/react/solid';

import { IconItem } from './IconItem';

interface IHeaderProps {
  /**
   * Height of the Header in Tailwind Units
   */
  height?: number;
  title?: string;
  handleSidebarButton: () => void;
}

/**
 * Header Component is used for headline and Menu Buttons
 */
export const Header = ({
  height = 16,
  title = 'bAware',
  handleSidebarButton,
}: IHeaderProps) => {
  const [, setCount] = useState<number>(0);

  useEffect(() => {
    setCount((prev) => prev++);
  }, []);

  return (
    <header className={cn(styles.header, `h-${height}`)}>
      <div className='flex items-center justify-between flex-grow p-1 rounded-sm bg-base-dark'>
        <div className='flex items-center space-x-2 '>
          <IconItem linkTo='/' Icon={HomeIcon}></IconItem>
          <span className='font-sans text-2xl font-bold tracking-tighter'>
            {title}
          </span>
        </div>
        <div className='flex'>
          <div
            className='flex space-x-6 rounded-sm cursor-pointer hover:bg-primary-800 hover:bg-opacity-20'
            onClick={handleSidebarButton}
          >
            <MenuIcon className='w-10 h-10'></MenuIcon>
          </div>
        </div>
      </div>
    </header>
  );
};
