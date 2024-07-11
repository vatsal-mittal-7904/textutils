import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';

function App() {

  const[mode, setMode]= useState('light'); 
  const[alert, setAlert]= useState(null); 
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null);
    },1000)
  }
  const toggleMode=()=> { 
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#011842';
      showAlert("Dark mode has been enabled","success");
      document.title='Textutils-Darkmode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title='Textutils-Lightmode';
    }
  }
  return (
    <>

    <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode}/>

    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode = {mode}/>
    </div>

    </> 
  );
}

export default App;