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
      <div>
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
