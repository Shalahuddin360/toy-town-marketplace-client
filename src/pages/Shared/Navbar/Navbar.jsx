import { Link } from "react-router-dom";
import logo from '../../../assets/header-logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
      })
      .catch(error => {
        console.log(error)
      })
  }
  const navItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/addToys">Add Toys</Link></li>
    <li><Link to="/allToys">All Toys</Link></li>
    <li><Link to="/myToys">My Toys</Link></li>
    {user?.email ? (
      <li className="p-2">
        <button onClick={handleLogOut}>Logout</button>
      </li>
    ) : (
      <Link className="menu-item" to="/login">
        <li>Login</li>
      </Link>
    )}
  </>
  return (
    <div className="navbar bg-base-100 h-24 mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-warning">Warning</button>
      </div>
    </div>
  );
};

export default Navbar;