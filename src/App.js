import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<Details />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
