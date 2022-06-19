import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MasterLayout from "./Components/masterLayout";
import SearchList from "./Components/SearchList";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <MasterLayout />
      <Routes>
        <Route exact path="/search" element={<SearchList />} />
        <Route path="*" element={""} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
