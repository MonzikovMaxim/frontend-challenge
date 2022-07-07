import React, { useEffect } from "react";

import "./App.scss";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Main from "./components/Main/Main";
import SavedCards from "./components/SavedCards/SavedCards";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound";

function App() {


  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route exact path="/frontend-challenge" element={<Main />}></Route>
          <Route path="/frontend-challenge/likes" element={<SavedCards />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
