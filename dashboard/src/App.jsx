import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashlayout from "./layouts/dashlayout";
import Acedemics from "./pages/acedemics/acedemics";

const App = () => {
  return (
    <BrowserRouter>
      <Dashlayout>
        <Routes>
          <Route path="/" element={<Acedemics />} />
        </Routes>
      </Dashlayout>
    </BrowserRouter>
  );
};

export default App;
