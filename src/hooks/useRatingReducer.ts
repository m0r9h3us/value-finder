import { useReducer } from 'react';
import { RatingReducer } from '../components/Values/RateReducer';
import { IValue } from '../types';

const useValueContext = (selected: IValue[]) => {
  return useReducer(RatingReducer, {
    sorted: selected,
    currentItemsIdx: [0, 1],
    compared: [],
    swapped: false,
    finished: false,
  });
};

export default useValueContext;
