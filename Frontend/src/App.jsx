import Navbar from './components/Navbar/Navbar'
import './App.css'
import Carousel from './components/Carousel/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Login from './components/Login/Login';
  

  function App() {
    return (
     <>
     <Navbar/>
     <Carousel/>
     <Login/>
     </>
    );
  }
  
  
export default App
