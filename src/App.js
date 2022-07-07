import "./App.scss";
import {  Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import SavedCards from "./components/SavedCards/SavedCards";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/likes" element={<SavedCards />} />
          </Routes>
        </div>
    </>
  );
}

export default App;
