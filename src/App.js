import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { Login, Wall } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="row App-header">Shoppy</div>
      <div>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Login />} />
            <Route path="/wall" element={<Wall />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
