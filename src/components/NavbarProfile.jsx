import react from "react";
import Logo from "./Logo";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import char from "../assets/img/char.png";
import eminem from "../assets/img/eminem.png";
import Sidebar from "../components/Sidebar";

function NavbarProfile() {
  const [showMenu, setShowMenu] = react.useState(false);
  const [showMenu2, setShowMenu2] = react.useState(false);
  function menu() {
    setShowMenu(!showMenu);
  }
  function menu2() {
    setShowMenu2(!showMenu2);
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
          <Link to="/" className="font-semibold hover:text-blue-500">
            Home
          </Link>
          <Link
            to="/create-event"
            className="font-semibold hover:text-blue-500"
          >
            Create Event
          </Link>
          <li className="font-semibold hover:text-blue-500">Location</li>
        </ul>
      </div>
      <Link to="/profile">
        <div className={showMenu ? "hidden" : ""}>
          <div className="hidden md:flex md:flex-row flex-col items-center md:py-0 py-10">
            <div className="flex gap-5 items-center">
              <div className="min-w-[55px] h-[55px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex justify-center items-center">
                <div className="min-w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center ">
                  <div className="relative border border-gray-500 w-[44px] h-[44px] rounded-full bg-gray-500 overflow-hidden">
                    <img
                      src={eminem}
                      alt=""
                      className="absolute top-0 left-0 w-full h-full object-fit"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="font-semibold">Jhon Tomson</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className={showMenu ? "hidden" : "md:hidden w-full px-5"}>
        <div className="">
          <button type="button" onClick={menu2}>
            <FaBarsStaggered className="text-[30px]" />
          </button>
        </div>
        <div className={showMenu2 ? "hidden" : "px-10"}>
          <Sidebar />
        </div>
      </div>
    </nav>
  );
}

export default NavbarProfile;
