import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Import all your pages
import HomePage from "./Pages/HomePage";
import DestinationA from "./Pages/Destination-A";
import DestinationB from "./Pages/Destination-B";
import DestinationC from "./Pages/Destination-C";
import DestinationD from "./Pages/Destination-D";
import CrewA from "./Pages/Crew-A";
import TechnologyA from "./Pages/Technology-A";
import TechnologyB from "./Pages/Technology-B";
import TechnologyC from "./Pages/Technology-C";

// ✨ AnimatedRoutes Component
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* AnimatePresence works best when the key changes per route */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/Destination-A" element={<DestinationA />} />
        <Route path="/Destination-B" element={<DestinationB />} />
        <Route path="/Destination-C" element={<DestinationC />} />
        <Route path="/Destination-D" element={<DestinationD />} />
        <Route path="/Crew-A" element={<CrewA />} />
        <Route path="/Technology-A" element={<TechnologyA />} />
        <Route path="/Technology-B" element={<TechnologyB />} />
        <Route path="/Technology-C" element={<TechnologyC />} />
      </Routes>
    </AnimatePresence>
  );
};

// ✨ Main App Function
function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
