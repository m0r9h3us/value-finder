import React from "react";
import { Header } from "./components/Layout/Header/Header";
import { Selector } from "./components/Selector/Selector";
import ValueList from "./values.json";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header height={16} />

      <main className="h-screen pt-16 flex flex-grow">
        <Selector nbOfElements={10} list={ValueList} absoluteHeight={false} />
      </main>
    </div>
  );
}

export default App;
