import react from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 bg-white">
      <div>
        <Logo />
      </div>
      <div>
        <ul className="flex gap-10">
          <Link to="/">Home</Link>
          <li>Create Event</li>
          <li>Location</li>
        </ul>
      </div>
      <div className="font-semibold">
        <Link to="/login" className="w-[100px] h-[40px] pr-10">
          Log In
        </Link>
        <button className="bg-blue-500 text-white w-[170px] h-[40px] rounded-xl">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
