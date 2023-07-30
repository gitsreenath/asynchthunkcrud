import React from "react";
import CreateUser from "./Components/CreateUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./Components/Read";
import Navpanel from "./Components/Navpanel";
import "./App.css";
import Popup from "./Components/Popup";
import Update from "./Components/Update";

const App = () => {
  return (
    <BrowserRouter>
      <Navpanel />
      {/* <Popup/> */}
      <Routes>
        <Route path="/" element={<CreateUser />} />
        <Route path="/Read" element={<Read />} />
        <Route path='/Update/:id' element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
