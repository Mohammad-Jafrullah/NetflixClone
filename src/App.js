import React from "react";
import Netflix from './component/Netflix';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Step1 from './component/Step1';
import Step2 from './component/Step2';


function App() {
  return (
    <>
      <BrowserRouter>
        <Netflix />
        {/* <Routes>
        <Route path="/" element={<Netflix/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/step1" element={<Step1/>}/>
        <Route path="/step2" element={<Step2/>}/>
      </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;