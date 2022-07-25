// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    },
      setTimeout(() => {
        setAlert(null);
      }, 1500)
    )
  }
  


  return (
    <>
    {/* <Router> */}

      <Navbar title="TextUtils" />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={}/>
        </Routes>
      
    {/* </Router> */}
    <TextForm showAlert={showAlert} heading="Enter your text below to analyze" />
  </div>
    </>
  );
}

export default App;
