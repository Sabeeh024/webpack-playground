import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Icon from "./assets/images/download.png";
const LazyComponent = lazy(() => import("./components/LazyComponent"));

const App = () => {
  return (
    <div className="hello">
      <h1>Hello, Webpack Code Splitting!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
      <img src={Icon} alt="Example" />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
