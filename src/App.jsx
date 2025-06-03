import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DutyTimeChecker from "./pages/DutyTimeChecker";
import PerDiemTracker from "./pages/PerDiemTracker";
import ScheduleSnapshot from "./pages/ScheduleSnapshot";
import Navbar from "./components/Navbar";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-blue-50 text-gray-900 font-sans">
        <Navbar />
        <div className="p-4 max-w-3xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/duty-time" element={<DutyTimeChecker />} />
            <Route path="/per-diem" element={<PerDiemTracker />} />
            <Route path="/schedule" element={<ScheduleSnapshot />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;