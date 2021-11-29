import React from 'react';
import SelectorItem from './ListItem';
import { IValue } from '../../types';
import {
  ArrowCircleRightIcon,
  ArrowCircleLeftIcon,
} from '@heroicons/react/solid';

type TVariant = 'gridMultiCol' | 'gridOneCol' | 'flex';
export interface ISelectorColumn {
  title: string;
  content: IValue[];
  variant: TVariant;
  navigation?: boolean;
  background?: string;
  onItemClick: (item: IValue) => void;
}

const getStyles = () => {
  return {
    container: (background: string) => `
      flex flex-col flex-grow 
      items-centers h-full 
      p-4 rounded-sm 
      md:space-l-10
      ${background}
  `,
    header: (navigation: boolean) => `
      flex items-center w-full
      p-2 whitespace-nowrap
      ${navigation ? 'justify-between' : 'justify-center'}
    `,
    list: (variant: TVariant) => `
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
};

const List = ({
  title,
  content,
  variant,
  onItemClick,
  navigation = false,
  background = '',
}: ISelectorColumn) => {
  const styles = getStyles();

  return (
    <div className={styles.container(background)}>
      <div className={styles.header(navigation)}>
        {navigation && <ArrowCircleLeftIcon className='w-10 h-10' />}
        <h1 className='font-bold text-center'>{title}</h1>
        {navigation && <ArrowCircleRightIcon className='w-10 h-10' />}
      </div>
      <ul className={styles.list(variant)}>
        {content.map((item: IValue) => (
          <SelectorItem key={item.id} onClick={onItemClick} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default List;
