import { Link } from 'react-router-dom';

import logo from './logo.png';
const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <img src={logo} alt="Logo" id="beautifulLogo"/>
      {/* <h1><span id='where'> Where</span>Ware?</h1> */}
    </nav>
    <div className="links">
        <Link to="/">Home</Link>
        <Link to="/map">Store Map</Link>
        <Link to="/business">Sign Up</Link>
    </div>
    </>
  );
};

export default Navbar;
