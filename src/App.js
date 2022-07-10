
import React from "react";
import { 
  BrowserRouter,
  Routes,
  Route, } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Dashboard2 from './pages/Dashboard';
import Blocks1 from './components/blocks1';
import './App.css';
import Homepage from './components/Homepage';
import Validators from "./components/Validators";
import Blocks from './components/blocks';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const App = () => {

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Homepage />} />
          <Route exact path="/validators" element={ <Validators />} />
          <Route path="/blocks" element={ <Blocks />} />
          <Route path="/blocks1" element={ <Blocks1 />} />
          <Route path="/dashboard" element={ <Dashboard />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
