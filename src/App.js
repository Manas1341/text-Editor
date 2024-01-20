import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enable or not
  const [alert, setAlert] = useState(null); // Whether dark mode is enable or not
  const [Danger, setDanger] = useState("primary"); // Whether dark mode is enable or not
  const [txtcolor, setTxtcolor] = useState("white"); // Whether dark mode is enable or not

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
      setDanger("dark");
      setTxtcolor("black");
      document.title = "Text-Converter - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      setDanger("primary");
      setTxtcolor("white");
      document.title = "Text-Converter - Light Mode";
    }
  };

  const RedtoggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "red";
      showAlert("Red mode has been enabled", "success");
      setDanger("danger");
      setTxtcolor("red");
      document.title = "Text-Converter - Dark-Red Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      setDanger("primary");
      setTxtcolor("white");
      document.title = "Text-Converter - Light Mode";
    }
  };
  return (
    <>
        <Navbar
          title="Text Converter"
          mode={mode}
          toggleMode={toggleMode}
          RedtoggleMode={RedtoggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Textform showAlert={showAlert}  heading={<h1 style={{display:"flex" , justifyContent:"center"}}>Enter the Text in the below textbox</h1>} mode={mode} Danger={Danger} txtcolor={txtcolor} />  
        </div>
    </>
  );
}
export default App;
