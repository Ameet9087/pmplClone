import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Buses from "./pages/Buses";
import Help from "./pages/Help";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buses" element={<Buses />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
        <Navbar />
      </div>
    </Router>
  );
}
export default App;
