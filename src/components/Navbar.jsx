import { Link, useLocation } from "react-router-dom";
// Make sure you have a CSS file for styling

function Navbar() {
  const location = useLocation(); // Get current URL

  return (
    <nav className="navbar">
      {/* Logo */}
      <h2 className="logo">
        <Link to="/" className="logo-link">AP Tourism</Link>
      </h2>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>

        <Link
          to="/districts"
          className={location.pathname.includes("/districts") ? "active" : ""}
        >
          Districts
        </Link>

        <Link
          to="/places"
          className={location.pathname.includes("/places") ? "active" : ""}
        >
          Places
        </Link>

        <Link
          to="/contact"
          className={location.pathname.includes("/contact") ? "active" : ""}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
