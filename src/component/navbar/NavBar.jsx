import { NavLink } from "react-router-dom";
import "../navbar/style.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/archive">Archive</NavLink>
    </nav>
  );
};
