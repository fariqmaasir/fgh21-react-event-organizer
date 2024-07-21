import react from "react";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = react.useState(false);
  function menu() {
    setShowMenu(!showMenu);
    console.log(showMenu);
  }
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center md:px-8 bg-white">
      <div className="md:contents flex items-center justify-between w-full">
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <button type="button" onClick={menu}>
          <FaBars className="md:hidden text-[30px]" />
        </button>
      </div>
      <div className={showMenu ? "hidden" : ""}>
        <ul className="md:flex-row flex-col flex gap-10 items-center">
          <Link to="/" className="font-semibold">
            Home
          </Link>
          <Link to="/create-event" className="font-semibold">
            Create Event
          </Link>
          <li className="font-semibold">Location</li>
        </ul>
      </div>
      <div className={showMenu ? "hidden" : ""}>
        <div className="flex md:flex-row flex-col items-center md:gap-0 gap-10 md:py-0 py-10">
          <div>
            <Link
              to="/login"
              className="md:w-[100px] w-screen h-[40px] md:pr-10 font-semibold"
            >
              Log In
            </Link>
          </div>
          <Link to="/sign-up">
            <button className="bg-blue-500 text-white w-screen md:w-[170px] h-[40px] rounded-xl font-semibold">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
