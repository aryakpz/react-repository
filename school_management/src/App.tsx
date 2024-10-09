import "./App.css";
import { Navbar } from "./component/nav";
import { Home } from "./pages/home";
// import Details from "./pages/details copy";
import Details from "./pages/questionsection";

import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
