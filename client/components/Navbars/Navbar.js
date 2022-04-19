import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  async function handleClick(e) {
    try {
      await logout();
    } catch (error) {
      window.alert(error);
    }
  }
  return (
    <div>
      <nav>
        {currentUser ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <Link to="/profile">Profile</Link>
            <a href="#" onClick={(e) => handleClick(e)}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
