import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Districts from "./pages/Districts.jsx";
import Places from "./pages/Places.jsx";
import Contact from "./pages/Contact.jsx";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/districts" element={<Districts />} />
        <Route
          path="/places"
          element={
            <div style={{ textAlign: "center", padding: "50px" }}>
              <h2>Please select a district first.</h2>
            </div>
          }
        />
        <Route path="/places/:districtName" element={<Places />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <AnimatedRoutes />
    </>
  );
}

export default App;
