import useValueContext from '../../hooks/useValueContext';
import { Link } from 'react-router-dom';
import List from './List';

const Card = () => {
  const valCtx = useValueContext();
  return (
    <div className='flex flex-col flex-grow-0 items-center p-10 space-y-4 bg-primary-600'>
      <h1 className='text-lg font-bold'>Know Your Values</h1>
      <span className='text-center'>
        You can select values, change your selection and order your values by
        importance
      </span>

      <Link to='/values/select' className='p-2 rounded-sm bg-primary-700'>
        {valCtx.selected.length === 0
          ? 'Select your Values'
          : 'Change Selection'}
      </Link>

      {valCtx.selected.length > 0 && valCtx.sorted.length === 0 && (
        <Link to='/values/rate' className='p-2 rounded-sm bg-primary-700'>
          Rate Your Values
        </Link>
      )}
    </div>
  );
};

/**
 * Overview is a container that offers the possibility
 * to select and rate your values and shows the list
 */
const Overview = () => {
  const valCtx = useValueContext();

  const containerStyle = `
      flex flex-col flex-grow 
      md:flex-row md:justify-between
      space-y-2 p-1 overflow-y-auto md:space-y-0 `;

  return (
    <div className={containerStyle}>
      <div className='p-4 space-y-4 bg-primary-700 rounded-sm '>
        <Card />
      </div>
      <div className='bg-primary-700 p-4 md:ml-1 rounded-sm flex-grow max-w-1/2'>
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

export default Overview;
