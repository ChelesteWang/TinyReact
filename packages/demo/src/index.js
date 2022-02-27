import React from "@tinyreact/react";
import ReactDOM from "@tinyreact/react-dom";

/** @jsx React.h */
/** @jsxFrag React.Fragment */

/**
 * React Component
 * @returns {React.Component}
 */
export default function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}

/**
 * Render the component
 * @param {React.Component} App
 * @param {HTMLElement} document.getElementById("app")
 */
ReactDOM.render(<App />, document.getElementById("app"));
