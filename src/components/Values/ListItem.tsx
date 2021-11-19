import React from 'react';
import cn from 'classnames';

import { IValue } from '../../types';

const bStyle = `
  flex flex-grow justify-center
  px-1 py-2 m-0.5 rounded-sm
  text-primary-400 font-bold hover:text-primary-800': true
  cursor-pointer': true
`;

export interface ISelectorItemProps {
  item: IValue;
  onClick: (item: IValue) => void;
}

const ListItem = ({ onClick, item }: ISelectorItemProps) => {
  const liStyle = cn(bStyle, {
    ' bg-primary-600 ': !item.selected,
    ' bg-orange-300 text-primary-700 hover:bg-orange-100': item.selected,
  });

  return (
    <li key={item.id} className={liStyle} onClick={onClick.bind(null, item)}>
      <span>{item.title} </span>
    </li>
  );
};

export default ListItem;
