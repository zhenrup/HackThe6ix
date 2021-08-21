import { Link } from 'react-router-dom';

import logo from './WhereLogo.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <img src={logo} alt="Logo" style={{ height: '80px', width: '200px' }} /> */}
      <h1>WHERE WARE?</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/map">Store Map</Link>
        <Link to="/business">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
