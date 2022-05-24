import List from '../components/Values/List';
import useValueContext from '../hooks/useValueContext';
interface PoolProps {
  /**
   * If this component is rendererd in a parent that defines a height set this to false.
   */
  absoluteHeight?: boolean;
}

/**
 * Home is the Home Page
 */
const Home = ({ absoluteHeight = true }: PoolProps) => {
  const valCtx = useValueContext();
  return (
    <div className='flex flex-grow p-1'>
      <div className='flex flex-grow bg-primary-700 p-4 md:ml-1 rounded-sm '>
        <List
          title='Chosen Values'
          content={valCtx.selected}
          onItemClick={valCtx.removeItem}
          variant='gridOneCol'
        />
      </div>
      <div className='flex flex-grow bg-primary-700 p-4 md:ml-1 rounded-sm'>
        <List
          title='Sorted Values'
          content={valCtx.sorted}
          onItemClick={valCtx.removeItem}
          variant='gridOneCol'
        />
      </div>
    </div>
  );
};

export default Home;
