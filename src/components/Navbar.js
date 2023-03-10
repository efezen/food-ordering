import React, {useState} from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  function Click() {
    setShowLinks(!showLinks);
  }
  return (
    <div className="navbar" id={showLinks ? "open" : "close"}>
      <div className="leftSide">
        <img src={logo} alt="logo"/>
        <div className="hiddenLinks">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightside">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={Click}>
        <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
