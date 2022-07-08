import React from "react";

import "./App.scss";
import { Routes, Route} from "react-router-dom";
import Main from "./components/Main/Main";
import SavedCards from "./components/SavedCards/SavedCards";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound";

function App() {


  return (
      <div className="app">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/likes" element={<SavedCards />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
  );
}

export default App;
