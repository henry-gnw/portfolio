import React from "react";
import ReactDOM from "react-dom/client";
import SplashCursor from "./src/components/SplashCursor/SplashCursor";

function App() {
  return <SplashCursor />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
