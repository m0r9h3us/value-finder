import MenuItem, { IMenuItem } from './MenuItem';
import { useState } from 'react';

interface IMenuProps {
  closeMenu: () => void;
}

const menuItems = [
  { linkTo: '/', title: 'HOME', isActive: false },
  { linkTo: '/values', title: 'VALUES', isActive: false },
];
const Menu = ({ closeMenu }: IMenuProps) => {
  const [items, setItems] = useState<IMenuItem[]>(menuItems);

  const handleItemClick = (item: IMenuItem) => {
    closeMenu();
  };

  // p-r-0 when menu is available
  return (
    <div className='flex flex-grow p-1 md:pr-0 md:flex-none md:max-w-16'>
      <ul className='flex flex-col items-center w-full p-2 space-y-1 rounded-sm bg-primary-700'>
        {items.map((item: IMenuItem) => (
          <MenuItem key={item.title} item={item} onClick={handleItemClick} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
