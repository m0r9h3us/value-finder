import React from 'react';
import SelectorItem from './ListItem';
import { IValue } from '../../types';
import {
  ArrowCircleRightIcon,
  ArrowCircleLeftIcon,
} from '@heroicons/react/solid';

export interface ISelectorColumn {
  title: string;
  content: IValue[];
  variant: 'gridMultiCol' | 'gridOneCol' | 'flex';
  navigation?: boolean;
  background?: string;
  onItemClick: (item: IValue) => void;
}

const List = ({
  title,
  content,
  variant,
  onItemClick,
  navigation = false,
  background = '',
}: ISelectorColumn) => {
  const styles = {
    container: `
      flex flex-col flex-grow 
      items-centers h-full 
      p-4 rounded-sm 
      md:space-l-10
      ${background}
  `,
    header: `
      flex items-center w-full
      p-2 whitespace-nowrap
      ${navigation ? 'justify-between' : 'justify-center'}
    `,
    list: `
      overflow-y-auto overflow-x-hidden
      ${
        variant === 'gridMultiCol'
          ? 'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'
          : ''
      }
      ${variant === 'gridOneCol' ? 'grid grid-cols-1' : ''}
      ${
        variant === 'flex'
          ? 'flex flex-col p-1 rounded-sm bg-primary-600  overflow-x-hidden'
          : ''
      }
    `,
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {navigation && <ArrowCircleLeftIcon className='w-10 h-10' />}
        <h1 className='font-bold text-center'>{title}</h1>
        {navigation && <ArrowCircleRightIcon className='w-10 h-10' />}
      </div>
      <ul className={styles.list}>
        {content.map((item: IValue) => (
          <SelectorItem key={item.id} onClick={onItemClick} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default List;
