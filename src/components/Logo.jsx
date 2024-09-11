import react from "react";
import logo_icon from "../assets/icon/logo.png";

function Logo() {
  return (
    <div className="flex items-center w-[50px] h-[50px] gap-2">
      <img src={logo_icon} alt="" />
      <div className="font-bold text-2xl">
        <span className="text-[#71C9CE] font-bold">Execu</span>
        <span className="text-[#088395] font-bold">tix</span>
      </div>
    </div>
  );
}

export default Logo;
