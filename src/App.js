import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Login } from "./pages/login";
// import { Signup } from "./pages/signup";

import { Login, Signup } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="row App-header">Shoppy</div>
      <div>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
