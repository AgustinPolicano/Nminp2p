import React, { useState, useEffect } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header/Menu";
import Body from "./Body/index";



function App() {

  return (
    <div className="bgimage">
     
      <Header/>
      <Body/>
     
    </div>
  );
}

export default App;