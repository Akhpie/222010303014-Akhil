import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import AllTrainsPage from "./pages/AllTrainsPage";
import SingleTrainPage from "./pages/SingleTrainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={AllTrainsPage} />
        <Route path="/train/:trainId" element={SingleTrainPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
