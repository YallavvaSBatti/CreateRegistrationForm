import React, { useState } from "react";
import Home1 from "./Components/Home1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "./Components/Table";
import Home from "./Components/Home";
import EditUser from "./Components/EditUser";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
          <Home1 />
          <Routes>
          <Route path="/userlist" element={<Table />} />
          <Route path="/createUser" element={<Home/>}/>
          <Route path="/EditUser/:id" element={<EditUser />} />

        </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
