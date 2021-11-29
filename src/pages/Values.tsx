import Selector from '../components/Values/Selector';
import Rate from '../components/Values/Rate';
import Summary from '../components/Values/Overview';
import { Routes, Route } from 'react-router-dom';

/**
 * Home is the Home Page
 */
const Values = () => {
  return (
    <Routes>
      <Route path='' element={<Summary />} />
      <Route path='select' element={<Selector absoluteHeight={false} />} />
      <Route path='rate' element={<Rate />} />
    </Routes>
  );
};

export default Values;
