import "./Navbar.css"

import { Link } from "react-router-dom"
import Logo from "../../assets/Logos/site-logo.png";
import toast from "react-hot-toast";



const Navbar = (props) => {

  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;



  return (
    <div className="navbar">
      <Link>
        <div className="site-logo">
          <img className="logo" src={Logo} alt="" loading="lazy" />
          <p className="site-name">SmartLearn</p>
        </div>
      </Link>

      <nav className="nav-links">
        <ul className="link-items">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Login - Sign-Up - Logout- Dashboard */}
      <div className="buttons-container">
        {
          !isLoggedIn &&
          <Link to="/login">
            <button className="btn">
              Login
            </button>
          </Link>
        }
        {
          !isLoggedIn &&
          <Link to="/signup">
            <button className="btn">
              Sign Up
            </button>
          </Link>
        } 
        {
          isLoggedIn &&
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
              className="btn">
              Log Out
            </button>
          </Link>
        }
        {
          isLoggedIn &&
          <Link to="/dashboard">
            <button className="btn">
              Dashboard
            </button>
          </Link>
        }
      </div>

    </div>
  )
}

export default Navbar