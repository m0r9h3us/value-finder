import { IValue } from '../../types';
import useValueContext from '../../hooks/useValueContext';
import List from './List';
import { useReducer } from 'react';

interface RateProps {
  /**
   * If this component is rendererd in a parent that defines a height set this to false.
   */
  absoluteHeight?: boolean;
}

interface ICompared {
  id1: string;
  id2: string;
  winnerID: string;
}

// turn into type decleration as below
interface IState {
  sorted: IValue[];
  currentItemsIdx: number[];
  compared: ICompared[];
  swapped: boolean;
  finished: boolean;
}

type TAction =
  | { type: 'SWAP_ITEMS'; winnerIdx: number }
  | { type: 'FIND_NEXT' };

const ratingReducer = (state: IState, action: TAction): IState => {
  const maxIndex = state.sorted.length;

  const swapCurrentItems = (winnerIdx: number): [IValue[], boolean] => {
    let swapped = false;
    const newSorted = [...state.sorted];
    // swap the elements compared elements
    if (winnerIdx !== state.currentItemsIdx[0]) {
      newSorted[state.currentItemsIdx[0]] = newSorted.splice(
        state.currentItemsIdx[1],
        1,
        newSorted[state.currentItemsIdx[0]]
      )[0];
      swapped = true;
    }
    return [newSorted, swapped];
  };

  /**
   * Check if the elements with `id1` and `id2` have been compare before
   */
  const findInCompared = (id1: string, id2: string) => {
    let winnerID;
    const existsID = state.compared.findIndex((it) => {
      if (it.id1 === id1 && it.id2 === id2) return true;
      return false;
    });
    if (existsID !== -1) {
      winnerID = state.compared[existsID].winnerID;
    }
    return winnerID;
  };

  /**
   * Add the ids of already compared elements to a list to save it for later iterations.
   * `id1` is the element that won the comparison.
   */
  const addToCompared = (id1: string, id2: string, winnerID: string) => {
    const existingWinnerID = findInCompared(id1, id2);
    if (!existingWinnerID)
      return [
        ...state.compared,
        {
          id1: winnerID === id1 ? id1 : id2,
          id2: winnerID === id1 ? id2 : id1,
          winnerID: winnerID,
        },
      ];
    return [...state.compared];
  };

  const findNewIndex = (
    currentIdx: number[],
    swapped: boolean
  ): { finished: boolean; newIndex: number[] } => {
    const step = 1;
    let finished = false;
    let newIndex = [currentIdx[0] + step, currentIdx[1] + step];

    if (newIndex[1] >= maxIndex) {
      if (!swapped) {
        finished = true;
        return { finished: true, newIndex: [0, 1] };
      }
      newIndex = [0, 1];
      swapped = false;
    }

    const nextItem1 = state.sorted[newIndex[0]];
    const nextItem2 = state.sorted[newIndex[1]];
    const winnerID = findInCompared(nextItem1.id, nextItem2.id);

    if (winnerID) {
      console.log('SKIPPING:' + nextItem1.title + ' ' + nextItem2.title);
      ({ finished, newIndex } = findNewIndex(newIndex, swapped));
    }
    return { finished: finished, newIndex: newIndex };
  };

  switch (action.type) {
    case 'SWAP_ITEMS':
      const [sorted, swapped] = swapCurrentItems(action.winnerIdx);
      const newCompared = addToCompared(
        state.sorted[state.currentItemsIdx[0]].id,
        state.sorted[state.currentItemsIdx[1]].id,
        state.sorted[action.winnerIdx].id
      );

      return {
        ...state,
        sorted: sorted,
        swapped: swapped,
        compared: newCompared,
      };

    case 'FIND_NEXT':
      const { finished, newIndex } = findNewIndex(
        state.currentItemsIdx,
        state.swapped
      );
      return { ...state, currentItemsIdx: newIndex, finished: finished };
  }
};

/**
 * Order the selected elements
 */
const Rate = ({ absoluteHeight = true }: RateProps) => {
  const { selected } = useValueContext();
  console.log('sleected' + selected.length);
  const [ratingState, dispatchRatingAction] = useReducer(ratingReducer, {
    sorted: selected,
    currentItemsIdx: [0, 1],
    compared: [],
    swapped: false,
    finished: false,
  });

  const handleItemClick = (winnerIdx: number) => {
    dispatchRatingAction({ type: 'SWAP_ITEMS', winnerIdx: winnerIdx });
    dispatchRatingAction({ type: 'FIND_NEXT' });
  };

  const hasElements = !(ratingState.sorted.length === 0);
  console.log(
    'THERE ARE ELEMENTS?: ' + hasElements + ratingState.sorted.length
  );
  const height = absoluteHeight ? 'h-screen' : '';
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
