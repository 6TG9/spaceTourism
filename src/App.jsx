import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DestinationA from "./Pages/Destination-A";
import DestinationB from "./Pages/Destination-B";
import DestinationC from "./Pages/Destination-C";
import DestinationD from "./Pages/Destination-D";
import CrewA from "./Pages/Crew-A";
import TechnologyA from "./Pages/Technology-A";
import TechnologyB from "./Pages/Technology-B";
import TechnologyC from "./Pages/Technology-C";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
              </>
            }
          />
          <Route
            path="/Destination-A"
            element={
              <>
                <DestinationA />
              </>
            }
          />
          <Route
            path="/Destination-B"
            element={
              <>
                <DestinationB />
              </>
            }
          />
          <Route
            path="/Destination-C"
            element={
              <>
                <DestinationC />
              </>
            }
          />
          <Route
            path="/Destination-D"
            element={
              <>
                <DestinationD />
              </>
            }
          />
          <Route
            path="/Crew-A"
            element={
              <>
                <CrewA />
              </>
            }
          />
          <Route
            path="/Technology-A"
            element={
              <>
                <TechnologyA />
              </>
            }
          />
          <Route
            path="/Technology-B"
            element={
              <>
                <TechnologyB />
              </>
            }
          />
          <Route
            path="/Technology-C"
            element={
              <>
                <TechnologyC />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
