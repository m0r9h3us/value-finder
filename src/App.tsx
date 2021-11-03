import React from "react";
import { Header } from "./components/Layout/Header/Header";
import { Button } from "./components/Partials/Button/Button";
import { Selector } from "./components/Selector/Selector";
import ValueList from "./values.json";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header height={16}/>
      <main className="h-screen pt-16 flex flex-grow">
        <Selector nbOfElements={10} list={ValueList} absoluteHeight={false} />
      </main>
    </div>
  );
}

export default App;

// <div className="flex flex-col min-h-screen">
//   <header className="fixed top-0 h-16 bg-gray-700"> HEADER</header>
//   <main className="h-screen flex flex-grow bg-gray-900 pt-16">
//     <div className="flex-grow bg-blue-500">Sidebar</div>
//     <div className=" flex-grow bg-red-500 overflow-y-auto outline-black">
//       <div className="py-5 my-1">Scrollable Content</div>
//       <div className="py-5 my-1">Scrollable Content</div>
//       <div className="py-5 my-1">Scrollable Content</div>
//       <div className="py-5 my-1">Scrollable Content</div>
//       <div className="py-5 my-1">Scrollable Content</div>
//       <div className="py-5 my-1">Scrollable Content</div>
//       <div className="py-5 my-1">Scrollable Content</div>
//       <div className="py-5 my-1">Scrollable Content</div>
//       <div className="py-5 my-1">Scrollable Content</div>
//       <div className="py-5 my-1">Scrollable Content</div>
//       <div className="py-5 my-1">Scrollable Content</div>
//       <div className="py-5 my-1">Scrollable Content</div>
//       <div className="py-5 my-1">Scrollable Content</div>
//       <div className="py-5 my-1">Scrollable Content</div>
//       <div className="py-10 my-1">Scrollable Content</div>
//       <div className="py-10 my-1">Scrollable Content</div>
//     </div>
//   </main>
