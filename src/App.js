import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Landing } from "./pages/landing/Landing";
import { Archive } from "./pages/archive/Archive";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </div>
  );
}

export default App;
