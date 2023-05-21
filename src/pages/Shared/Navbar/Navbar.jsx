import { Link } from "react-router-dom";
import logo from '../../../assets/header-logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaUserCircle} from "react-icons/fa";
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
    <li className="font-bold" ><Link to="/">Home</Link></li>

    <li className="font-bold" ><Link to="/allToys">All Toys</Link></li>
    <li className="font-bold" ><Link to="/blog">Blog</Link></li>
   

    {user?.email ? (
      <>
        <li className="font-bold" ><Link to="/addToys">Add Toys</Link></li>
        <li className="font-bold" ><Link to="/myToys">My Toys</Link></li>
        <li className="p-2 font-bold ">
          <button onClick={handleLogOut}>Logout</button>

       </li>
       <li>{user?.displayName}</li>
       <li>
       
       <div className="avatar">
              <div className="mask rounded-xl w-12 h-12">
                <img  title={user?.displayName} src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
              </div>
        </div>

       </li>
      
        
      </>
    ) : (
      <Link className="menu-item font-bold" to="/login">
        <li>Login</li>
        <li>{<FaUserCircle/>}</li>
      </Link>
    )}




     <li className="font-bold" ><Link to="/signup">Registration</Link></li>
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
        <Link to="/" className="btn btn-ghost normal-case ">
          <img src={logo} alt="" />
          <p><small className="text-yellow-600" >Toy Town</small></p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>

    </div>
  );
};

export default Navbar;