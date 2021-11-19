import List from '../Values/List';
import useValueContext from '../../hooks/useValueContext';

interface SidebarProps {
  sidebarIsVisible: boolean;
  handleSidebarClick: () => void;
}

const Sidebar = ({ sidebarIsVisible, handleSidebarClick }: SidebarProps) => {
  const valCTX = useValueContext();
  return (
    <div className='flex flex-grow p-1 pr-0 md:w-48'>
      <button
        className='fixed w-16 p-2 rounded-full top-20 left-4 opacity-90 bg-primary-600'
        onClick={handleSidebarClick}
      >
        {sidebarIsVisible ? '<' : '>'}
      </button>

      <List
        title='My Values'
        content={valCTX.selected}
        variant='gridOneCol'
        onItemClick={valCTX.removeItem}
        navigation={true}
      ></List>
    </div>
  );
};

export default Sidebar;
