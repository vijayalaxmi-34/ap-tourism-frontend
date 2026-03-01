import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
    >
      <div className="hero-content">
        <h1 className="typing-text">Explore Andhra Pradesh</h1>
        <p className="fade-in-delay">
          Discover beautiful destinations, culture & heritage
        </p>

        <div style={{ marginTop: "20px" }}>
          <Link to="/districts">
            <button className="glow-button fade-in-delay2">
              Start Exploring
            </button>
          </Link>
          <Link to="/contact">
            <button className="glow-button fade-in-delay2" style={{ marginLeft: "15px" }}>
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      <div className="scroll-indicator">
        <span></span>
      </div>
    </motion.div>
  );
}

export default Home;
