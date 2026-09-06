import { Link } from "react-router-dom";
import "../home.css";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">

          <div className="logo">
            JURASSIC <span>ARCHIVE</span>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/timelines">Timelines</Link>
            </li>
            <li>
              <Link to="/films">Films</Link>
            </li>
            <li>
              <Link to="/theories">Theories</Link>
            </li>
          </ul>

        </div>
      </nav>
    </>
  )
}
export default Navbar;