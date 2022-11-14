import AOS from "aos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home, NoMatch, Register } from "./pages";

const App = () => {
  AOS.init({
    duration: 1000,
    once: true
  });

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;