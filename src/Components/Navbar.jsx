import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null)
    navigate('/login')
    setUser(null)
   
  };
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">MyWebsite</div>
        <div className="space-x-4">
          <Link to={"/products"} className="text-gray-300 hover:text-white">
            Product List
          </Link>
          {user ? (
            <span
              onClick={handleLogout}
              className="text-gray-300 hover:text-white cursor-pointer"
            >
              Logout
            </span>
          ) : (
            <>
              <Link to={"/login"} className="text-gray-300 hover:text-white">
                Login
              </Link>
              <Link to={"/signup"} className="text-gray-300 hover:text-white">
                SignUp
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
