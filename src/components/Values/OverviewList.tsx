import React from 'react';
import cn from 'classnames';
import { IValue } from '../../types';

interface IListItemProps {
  item: IValue;
  onClick: (item: IValue) => void;
}

const ListItem = ({ onClick, item }: IListItemProps) => {
  const itemStyle = `flex flex-grow justify-center w-full
                px-1 py-2 m-0.5 rounded-sm
              bg-primary-700 hover:bg-green-400
              text-black hover:text-primary-800 font-bold
              cursor-pointer`;

  return (
    <li key={item.id} className={itemStyle} onClick={onClick.bind(null, item)}>
      <span>{item.title} </span>
    </li>
  );
};

export interface IListProps {
  title: string;
  content: IValue[];
  onItemClick: (item: IValue) => void;
}

const List = ({ title, content, onItemClick }: IListProps) => {
  const containerStyle =
    'flex flex-col items-centers h-full flex-grow p-4 rounded-sm bg-primary-600 md:space-l-10';

  const headerStyle = 'p-2 whitespace-nowrap';

  const listStyle =
    'flex flex-col p-1 rounded-sm bg-primary-600 overflow-y-auto overflow-x-hidden';

  return (
    <div className={containerStyle}>
      <div className={headerStyle}>
        <h1 className='font-bold text-center '>{title}</h1>
      </div>
      <ul className={listStyle}>
        {content.map((item: IValue) => (
          <ListItem key={item.id} onClick={onItemClick} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default List;
