import React from 'react'
import Contact  from "./Contact";
import Education  from "./Education";
import Landingpage from "./Landingpage";
import Login from "./Login";
import Header from "./Header";
import Register  from "./Register";
import Getstarted from "./Getstarted";
import Finalpage from "./Finalpage";
import Previewresume from "./Previewresume";
import {Routes,Route} from "react-router-dom";

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Education" element={<Education/>}/>
      <Route path="/Landingpage" element={<Landingpage/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Getstarted" element={<Getstarted/>}/>
      <Route path="/Finalpage" element={<Finalpage/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Previewresume" element={<Previewresume/>}/>
    </Routes>

    </>
  )
}

export default App
