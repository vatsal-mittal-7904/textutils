import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success")
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success")
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared The Text","success")
  };

  const handleOnChange = (event) => {

    setText(event.target.value);
  };

  const handleCopy = (event) => {
    var text = document.getElementById("myBox");
    text.select();

    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied The Text","success")
  }

  const handleExtraSpaces = (event) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Cleared Extra Spaces from the Text","success")
  }

  const [text, setText] = useState("");
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
      <div className="container"  style={{color : props.mode ==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode ==='dark'?'#011842':'white', color : props.mode ==='dark'?'white':'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
       
        <button className="btn btn-danger mx-1" onClick={handleUpClick}> Convert to Uppercase</button>
        
        <button className="btn btn-danger mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        
        <button className="btn btn-danger mx-1" onClick={handleClearClick}> Clear Text </button>
        
        <button className="btn btn-danger mx-1" onClick={handleCopy}>Copy Text</button>
       
        <button className="btn btn-danger mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
       
        </div>
        
        <div className="container my-3" style={{color : props.mode ==='dark'?'white':'black'}}>
        
        <h2>Your text summary</h2>
        
        <p>{text.split(" ").length} words and {text.length} characters</p>
      
        <p>{0.008 * text.split(" ").length} Minutes read</p>
       
        <h2>Preview</h2>
      
        <p>{text.length > 0 ? text : "ENTER SOMETHING IN THE TEXTBOX ABOVE TO PREVIEW IT HERE"}</p>
      </div> 
    </>
  );
}
