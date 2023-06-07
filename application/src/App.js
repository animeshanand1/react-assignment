import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./screens/Home";
import Card from "./screens/Card";
import BookShow from "./screens/BookShow";
import Thankyou from "./screens/Thankyou";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/card-detail/:id" element={<Card />} />
          <Route exact path="/book-now/:id" element={<BookShow />} />
          <Route exact path="/thankyou" element={<Thankyou />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
