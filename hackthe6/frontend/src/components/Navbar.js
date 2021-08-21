import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>WHERE WARE?</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Store Map</Link>
      </div>
    </nav>
  );
};

export default Navbar;
