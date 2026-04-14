import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import PlanDetail from "@/pages/PlanDetail";
import History from "@/pages/History";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan/:id" element={<PlanDetail />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
}
