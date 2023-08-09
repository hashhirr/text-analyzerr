import React, { useState } from "react";

export default function Text(props) {
  const [texxt, setText] = useState("");
  const changeUpper = () => {
    let newText=texxt.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase", "success");
  };
  const changeLower = () => {
    let newText=texxt.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase", "success");
  };
  const changeTitle = () => {
    let newText=texxt.charAt(0).toUpperCase() + texxt.substr(1).toLowerCase();
    setText(newText)
    props.showAlert("Converted to titlecase", "success");
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
    <div  style={{color: props.mode==='dark'?'light':'black'}}>
      <h1>{props.header}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          
          value={texxt}
          onChange={handleChange}
          
          style={{backgroundColor: props.mode==='dark'?'light':'white'}}
          placeholder="Enter Text here"
          id="mybox"
          rows="3"
        ></textarea>
      </div>
      <div  >
      <button className="btn btn-primary" onClick={changeUpper} style={{ marginRight: '10px' }}>
        Change it into UpperCase{" "}
      </button>
      <button className="btn btn-primary" onClick={changeLower}style={{ marginRight: '10px' }}>
        Change it into LowerCase{" "}
      </button>
      <button className="btn btn-primary" onClick={changeTitle}>
        Change it into Title case{" "}
      </button>
      </div>
      <h1>Summary</h1>
      <p >{texxt.split(" ").length} words and {texxt.length}characters</p>
      <p>{0.008 * texxt.split(" ").length} Minutes Reading per Word </p>
      <h2>Preview</h2>
      <p>{texxt.length===0?'Enter Some Thing In The Text Box':texxt}</p>
    </div>
    </>
  );
}
