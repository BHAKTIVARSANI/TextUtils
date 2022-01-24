import Navbar from "./components/Navbar";
import "./App.css";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); //whether Dark mode is Enabled or not
  const [alert, setAlert] = useState(null);
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.background = "#1C2833 ";
      showalert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - DarkMode";
    } else {
      setmode("light");
      document.body.style.background = "white";
      showalert("Light mode has been enabled", "success");
      // document.title = "TextUtils - LightMode";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          aboutext="About "
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
              <TextForm
                showalert={showalert}
                heading="Try TextUtils - Word counter, Character counter,Remove extra spaces"
                mode={mode}
              />
          {/* //   </Route>
          // </Switch> */}
        </div>
      {/* // </Router> */}
    </>
  );
}

export default App;
