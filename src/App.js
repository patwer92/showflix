import { Router, Route } from "react-router-dom";

import Heading from "./components/Heading";

function App() {
  return (
    <>
      <Heading />
      <div className="container">
        <Router></Router>
        <p>Hello world</p>
      </div>
    </>
  );
}

export default App;
