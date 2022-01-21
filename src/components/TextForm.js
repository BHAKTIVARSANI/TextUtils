import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("Uppercase was clicked": + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    // console.log("Lowercase was clicked": + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("Converted to lowercase!", "success");
  };
  const handleCliClick = () => {
    // console.log("clear was clicked": + text);
    let newtext = "";
    setText(newtext);
    props.showalert("Cleared all text!", "success");
  };

  const handleonchange = (event) => {
    // console.log("handle on change");
    setText(event.target.value);
  };

  const handlecopy = () => {
    console.log(" I M COPY");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showalert("Copied all clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+ /);
    setText(newText.join(" "));
    props.showalert("Removed extra spaces!", "success");
  };
  const [text, setText] = useState("Enter text here");
  //  setText("New text");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#1C2833" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "#85929E" : "white",
              color: props.mode === "dark" ? "white" : "#1C2833",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert To UPERCASE
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCliClick}>
          Clear
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#1C2833" }}
      >
        <h3>Your text summary</h3> 
        <p>
          <b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> word and <b>{text.length}</b>{" "}
          character
        </p>
        <p>
          <b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Minutes Read
        </p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview "}
        </p>
      </div>
    </>
  );
}
