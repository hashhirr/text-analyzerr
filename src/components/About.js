import React from "react";
import { useState } from "react";

export default function About(props) {
  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: "10px solid white",
  });

  const darkMode = () => {
    setmyStyle({
      color: "white",
      backgroundColor: "black",
    })
    props.showAlert("dark mode activated","success");
  };
  const lightMode = () => {
    setmyStyle({
      color: "black",
      backgroundColor: "white",
    })
    props.showAlert("light mode activated","success");
  };
  const yellowMode = () => {
    setmyStyle({
      color: "black",
      backgroundColor: "yellow",
    })
    props.showAlert("yellow mode activated","success");
  };
  const redMode = () => {
    setmyStyle({
      color: "black",
      backgroundColor: "red",
    })
    props.showAlert("red mode activated","success");
  };

  return (
    <div className="container" style={myStyle}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={darkMode}
        style={{ marginRight: "5px" }}
        type="button"
        className="btn btn-dark my-3"
      >
        Dark Mode
      </button>

      <button onClick={lightMode} type="button" className="btn btn-light">
        Light Mode
      </button>
      <button onClick={yellowMode}type="button" className="btn btn-warning">Yellow Mode</button>
      <button onClick={redMode} type="button" className="btn btn-danger">Red Mode</button>


    </div>
  );
}
