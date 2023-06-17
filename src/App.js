import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");  //Whether Dark Mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils ✦ Dark Mode";
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils ✦ Light Mode";
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <Navbar /> */}
      <div className="container my-3">

      <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />
      {/* <About /> */}
      </div>
      {/* <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
          <Routes>
            <Route exact path='/about' element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />} />
          </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
