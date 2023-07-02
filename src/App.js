import "./App.css";

import {Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Mentorship from "./components/Mentorship";

import Login from "./components/Login";
import Register from "./components/Register";
import Home2 from "./components/Home2";
import Welcome from "./components/Welcome";
import Design from './courseRoute/Design';


function App() {


  return (
    <div className="App justify-center ">
  
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Home2/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/register/welcome" element={<Welcome/>}></Route>
        <Route path="/courses/design" element={<Design/>}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/mentorship" element={<Mentorship />}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
