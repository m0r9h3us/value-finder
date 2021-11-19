import React from 'react';
import cn from 'classnames';
import SelectorItem from './SelectorItem';
import { IValue } from '../../types';
import {
  HomeIcon,
  MenuIcon,
  ArrowCircleRightIcon,
  ArrowCircleLeftIcon,
} from '@heroicons/react/solid';
import styles from './List.module.css';

export interface ISelectorColumn {
  title: string;
  content: IValue[];
  multiCol: boolean;
  navigation: boolean;
  background?: string;
  onItemClick: (item: IValue) => void;
}

const List = ({
  title,
  content,
  multiCol,
  onItemClick,
  navigation,
  background,
}: ISelectorColumn) => {
  const ulStyle = cn(
    styles.column__list,
    multiCol ? styles.list__multicol : styles.list__onecol,
    background
  );
  const headerStyle = cn(
    'flex items-center w-full',
    navigation ? 'justify-between' : 'justify-center'
  );

  return (
    <div className='flex flex-col items-centers flex-grow p-1 rounded-sm bg-primary-700'>
      <div className={headerStyle}>
        {navigation && <ArrowCircleLeftIcon className='w-10 h-10' />}
        <h1 className='font-bold text-center '>{title}</h1>
        {navigation && <ArrowCircleRightIcon className='w-10 h-10' />}
      </div>
      <ul className={ulStyle}>
        {content.map((item: IValue) => (
          <SelectorItem
            key={item.id}
            onClick={onItemClick}
            item={item}
            hoverColor='green'
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
