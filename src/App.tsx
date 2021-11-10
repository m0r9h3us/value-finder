import React from "react";
import { useState } from "react";
import { Layout } from "./components/Layout/Layout";
import Selector from "./components/Selector/Selector";
import Rate from "./components/Selector/Rate";
import { Button } from "./components/Partials/Button/Button";
import ValueList from "./values.json";
import ValueContextProvider from "./context/ValueContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [sidebarIsVisible, setSidebarIsVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarIsVisible((prev) => !prev);
  };

  return (
    <ValueContextProvider nbOfSelectableElements={10} items={ValueList}>
      <BrowserRouter>
        <Layout sidebarIsVisible={sidebarIsVisible}>
          <Routes>
            <Route
              path="/choose"
              element={<Selector absoluteHeight={false} />}
            />
            <Route path="/rate" element={<Rate />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ValueContextProvider>
  );
}

export default App;
