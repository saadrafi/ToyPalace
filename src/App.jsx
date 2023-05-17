import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-4xl text-center text-primary">HELLO WORLD</div>
      <button className="btn btn-primary">CLICK</button>
    </>
  );
}

export default App;
