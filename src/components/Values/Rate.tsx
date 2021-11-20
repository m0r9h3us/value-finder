import { IValue } from '../../types';
import useValueContext from '../../hooks/useValueContext';
import List from './List';
import useRatingReducer from '../../hooks/useRatingReducer';

interface RateProps {
  /**
   * If this component is rendererd in a parent that defines a height set this to false.
   */
  absoluteHeight?: boolean;
}

/**
 * Order the selected elements
 */
const Rate = ({ absoluteHeight = true }: RateProps) => {
  const { selected } = useValueContext();
  const [ratingState, dispatchRatingAction] = useRatingReducer(selected);

  const handleItemClick = (winnerIdx: number) => {
    dispatchRatingAction({ type: 'SWAP_ITEMS', winnerIdx: winnerIdx });
    dispatchRatingAction({ type: 'FIND_NEXT' });
  };

  const hasElements = !(ratingState.sorted.length === 0);

  return (
    <>
      {!hasElements && <p>NO RATABLE ELEMENTS</p>}

      {false && (
        <div className='flex flex-grow p-2'>
          <List
            title='Sorted Values'
            content={ratingState.sorted}
            variant='gridOneCol'
            onItemClick={() => {}}
            navigation={true}
          ></List>
        </div>
      )}

      {!ratingState.finished && hasElements && (
        <div className='flex justify-center flex-grow m-2 rounded bg-primary-700'>
          <div className='flex flex-col items-stretch justify-center p-10 m-20 rounded h-60 bg-primary-600'>
            <div
              onClick={handleItemClick.bind(
                null,
                ratingState.currentItemsIdx[0]
              )}
              className='p-4 my-5 text-xl font-bold text-center rounded hover:bg-secondary-400 bg-primary-500'
            >
              {ratingState.sorted[ratingState.currentItemsIdx[0]].title}
            </div>
            <div
              onClick={handleItemClick.bind(
                null,
                ratingState.currentItemsIdx[1]
              )}
              className='p-4 my-5 text-xl font-bold text-center rounded bg-primary-500 hover:bg-secondary-400'
            >
              {ratingState.sorted[ratingState.currentItemsIdx[1]].title}
            </div>
          </div>
        </div>
      )}

      <div className='bg-primary-700 p-4 md:ml-1 rounded-sm flex-grow max-w-1/2'>
        <List
          title='My Values'
          content={ratingState.sorted}
          onItemClick={() => {}}
          variant='flex'
        />
      </div>
    </>
  );
};

export default Rate;
