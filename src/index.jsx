import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Icon from "./assets/images/download.png";

const App = () => {
  return (
    <div className="hello">
      <h1>Hello, Webpack Build with React!</h1>
      <p>Below is an example of an image imported into a React component:</p>
      <img src={Icon} alt="Example" />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
