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
      <p className='bg-primary-700 p-4 md:ml-1 rounded-sm flex-grow'>
        THIS IS HOME
      </p>
      <div className='bg-primary-700 p-4 md:ml-1 rounded-sm w-48 '>
        <List
          title='My Values'
          content={valCtx.selected}
          onItemClick={valCtx.removeItem}
          variant='flex'
        />
      </div>
    </div>
  );
};

export default Home;
