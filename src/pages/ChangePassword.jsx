import react from "react";
import { FaChevronDown } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import CreateEvent from "../components/CreateEvent";

function ChangePassword() {
  function name(params) {}
  return (
    <div className="md:bg-[#F4F7FF]">
      <Navbar />
      <div className="flex w-screen w-full h-full pt-[70px]">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="flex flex-col bg-white p-10 h-screen w-full md:w-[70%] rounded-3xl gap-10">
          <div className="font-semibold text-[20px]">Change Password</div>
          <form className="flex flex-col gap-7">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <label htmlFor="oldPass">Old Password</label>
              <div className="flex border border-[#C1C5D0] overflow-hidden md:w-[70%] rounded-xl h-[55px] pb-10">
                <input
                  id="oldPass"
                  name="oldPass"
                  type="text"
                  placeholder="Input Old Password ..."
                  className="items-center w-full h-[55px] pl-4 outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <label htmlFor="newPass">New Password</label>
              <div className="flex border border-[#C1C5D0] overflow-hidden md:w-[70%] rounded-xl h-[55px] pb-10">
                <input
                  id="newPass"
                  name="newPass"
                  type="text"
                  placeholder="Input New Password ..."
                  className="items-center w-full h-[55px] pl-4 outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <label htmlFor="confPass">Confirm Password</label>
              <div className="flex border border-[#C1C5D0] overflow-hidden md:w-[70%] rounded-xl h-[55px] pb-10">
                <input
                  id="confPass"
                  name="confPass"
                  type="text"
                  placeholder="Input Confirm Password ..."
                  className="items-center w-full h-[55px] pl-4 outline-none"
                />
              </div>
            </div>
            <div className="w-full bg-[#508D4E] flex items-center justify-center h-[55px] rounded-xl text-white font-semibold shadow-sm shadow-[#508D4E]">
              <button type="submit" className="w-full h-full">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer className="bg-[#F4F7FF]" />
      {/* <CreateEvent /> */}
    </div>
  );
}

export default ChangePassword;
