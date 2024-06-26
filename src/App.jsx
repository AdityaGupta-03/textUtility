import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Form from "./components/Form";
import About from "./components/About";

import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Exporting the App Component to the index.js file
export default function App() {
  const [mode, setMode] = useState("light");

  // Initally we don't want to display the alert
  const [alert, setAlert] = useState(null);

  let intervalId;  // Setting the interval ID

  let showAlert = (type, word) => {
    setAlert({
      type: type,
      msg: word
    })

    // Dismissing alert after 3 seconds
    setTimeout(() => {
      setAlert(null);
    }, 3000);

  }

  function removeClasses(){
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-secondary");
  }

  let toggleMode = (cls) => {
    removeClasses();
    document.body.classList.add("bg-"+cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(36 26 66)";
      document.body.style.color = "white";
      showAlert("success", "Dark Mode Enabled");
      
      // document.title = `Textutils - Dark Mode`;
      // intervalId = setInterval(() => {
      //   document.title = (document.title === "Textutils - Dark Mode") ? "Install this now" : "Textutils - Dark Mode";
      // }, 2000);

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("warning", "Dark Mode Disabled");
      
      // clearInterval(intervalId); // Clear the interval using the stored ID
      // document.title = "Textutils - Light Mode";
    }
  }

  return (
    <>
      {/* Navbar should be inside the Browser Router to make use of Link and to */}
      <BrowserRouter>
        <Navbar title="Coffee With Addy" mode={mode} toggle={toggleMode} intervalID={intervalId}/>
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Form heading="Write Text here" />} />
            <Route path="/about" element={<About mode={mode}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
