import React from "react";
import { Layout } from "./components/Layout/Layout";
import { Selector } from "./components/Selector/Selector";
import ValueList from "./values.json";

function App() {
  return (
    <Layout>
      <Selector nbOfElements={10} list={ValueList} absoluteHeight={false} />
    </Layout>
  );
}

export default App;
