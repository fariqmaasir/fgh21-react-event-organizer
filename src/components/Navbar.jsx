import react from "react";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8">
      <div>
        <Logo />
      </div>
      <div>
        <ul className="flex gap-10">
          <li>Home</li>
          <li>Create Event</li>
          <li>Location</li>
        </ul>
      </div>
      <div className="font-semibold">
        <button className="w-[140px] h-[40px]">Log In</button>
        <button className="bg-blue-500 text-white w-[170px] h-[40px] rounded-xl">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
