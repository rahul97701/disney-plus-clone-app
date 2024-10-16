import React from "react";
import "./App.css";
import Header from "./app/components/Header";
import Home from "./app/components/Home";
import Detail from "./app/components/Detail";
import Login from "./app/components/Login";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      
        <Routes>
          <Route path="/detail" element={<Detail />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
