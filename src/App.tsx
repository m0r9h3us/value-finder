import React, { useEffect } from 'react';
import { useState } from 'react';
import { Layout } from './components/Layout/Layout';
import Selector from './components/Values/Selector';
import Rate from './components/Values/Rate';
import { Button } from './components/Partials/Button/Button';
import ValueList from './values.json';
import ValueContextProvider from './context/ValueContextProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationContextProvider from './context/NavigationContextProvider';
import Home from './pages/Home';
import Values from './pages/Values';
import useMediaQuery from './hooks/useMediaqueries';

function App() {
  return (
    <NavigationContextProvider>
      <ValueContextProvider nbOfSelectableElements={10} items={ValueList}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='*' element={<div>NOT FOUND</div>} />
              <Route path='/' element={<Home />} />
              <Route path='/values/*' element={<Values />}></Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      </ValueContextProvider>
    </NavigationContextProvider>
  );
}

export default App;
