import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="conatiner">
        <Link to="/" className="btn btn-light ml-auto">
          Contact history
        </Link>
        <Link to="/contacts/add" className="btn btn-success ml-auto">
          Add contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
