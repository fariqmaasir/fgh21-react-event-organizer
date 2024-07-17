import react from "react";
import logo_icon from "../assets/icon/logo.png";

function Logo() {
  return (
    <div className="flex items-center">
      <img src={logo_icon} alt="" />
      <div className="font-bold text-2xl">
        <span className="text-indigo-400 font-bold">We</span>
        <span className="text-rose-500 font-bold">tick</span>
      </div>
    </div>
  );
}

export default Logo;
