import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./screens/Home";
import Card from "./screens/Card";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/card-detail/:id" element={<Card />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
