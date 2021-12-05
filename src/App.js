import './App.css';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
import React, { Fragment, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [toggleText, settoggleText] = useState('dark');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
     setAlert({
       msg: message,
       type: type
     })
     setInterval(() => {
       setAlert(null);
     }, 2000);
  };
  
  const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark');
        settoggleText('light');
        document.body.style.backgroundColor = "#161659";
        showAlert("Enjoy the DarkMode","success");
      }
      else{
        setMode('light');
        settoggleText('dark');
        document.body.style.backgroundColor = "white";
        showAlert("Back to the LightMode","success"); 

      }
  };

  return (
    <>
    <Router>
    <Navbar title="textMania" aboutPage="About" mode={mode} toggleMode={toggleMode} toggleText={toggleText}/>
    <Alert alert={alert}/>
    <div className="container my-3" >
    <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="textMania: Enter the text and Use the commands to play with your text" mode={mode}/>}/>
    </Routes>
    </div>
    </Router>
    </>
  ); 
}

export default App;
