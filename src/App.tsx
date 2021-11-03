import React from 'react';
import { Button } from './components/Partials/Button/Button';
import { Selector } from './components/Selector/Selector';
import ValueList from './values.json'
function App() {
  return (
    <>
    <div className="flex flex-col h-screen w-screen">
       <Selector nbOfElements={10} list={ValueList}/>
    </div>
    </>
  );
}

export default App;
