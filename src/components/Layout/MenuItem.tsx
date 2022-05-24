import React from 'react';
import cn from 'classnames';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export interface IMenuItem {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  linkTo: string;
  title: string;
  isActive: boolean;
}

export interface IMenuItemProps {
  item: IMenuItem;
  onClick: (item: IMenuItem) => void;
}

const MenuItem = ({ item, onClick }: IMenuItemProps) => {
  let resolved = useResolvedPath(item.linkTo);
  let match = useMatch({ path: resolved.pathname, end: true });

  const baseStyle = `
  w-full text-center
  px-10 py-2 m-0.5
  space-y-10
  rounded-sm
  bg-primary-700
  shadow-md
  border-2
  border-opacity-20
  border-primary-800
  text-black
  font-bold
  hover:text-black
  hover:bg-orange-400
  hover:opacity-50
  cursor-pointer`;

  const liStyle = cn(baseStyle, match ? 'bg-primary-800 text-primary-500' : '');

  return (
    <Link to={item.linkTo} className={liStyle}>
      <li key={item.title} onClick={onClick.bind(null, item)}>
        {item.title}
      </li>
    </Link>
  );
};

export default MenuItem;
