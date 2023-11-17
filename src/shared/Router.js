import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import App from "../App";
import { useState } from "react";
import Context from "../context/Context";

function Router() {
  return (
    <BrowserRouter>
      <Context>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/detail/:letterid" element={<Detail />} />
        </Routes>
      </Context>
    </BrowserRouter>
  );
}

export default Router;
