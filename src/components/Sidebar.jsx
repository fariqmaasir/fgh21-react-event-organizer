import react from "react";
import {
  FaCircleUser,
  FaCreditCard,
  FaPen,
  FaUnlock,
  FaGear,
  FaHeart,
  FaArrowRightFromBracket,
  FaClipboard,
  FaCirclePlus,
} from "react-icons/fa6";
import eminem from "../assets/img/eminem.png";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside>
      <div className="flex flex-col gap-7 pt-10 md:pl-16 md:pr-10">
        <div className="gap-5 items-center hidden md:flex">
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
            <div className="text=gray-500">Entrepreneur, ID</div>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <button className="flex gap-6">
            <FaCircleUser className="text-[20px] text-gray-400" />
            <div className="font-semibold hover:text-blue-500">Profile</div>
          </button>
          <div className="flex flex-col gap-7 pl-12">
            <div className="flex gap-6">
              <FaCreditCard className="text-[20px] text-gray-400" />
              <div className="font-semibold hover:text-blue-500">Card</div>
            </div>
            <div className="flex gap-6">
              <FaPen className="text-[20px] text-gray-400" />
              <Link to="/profile" className="font-semibold hover:text-blue-500">
                Edit Profile
              </Link>
            </div>
            <Link to="/change-password" className="flex gap-6">
              <FaUnlock className="text-[20px] text-gray-400" />
              <div className="font-semibold hover:text-blue-500">
                Change Password
              </div>
            </Link>
          </div>
        </div>
        <Link to="/create-event" className="flex gap-6">
          <FaCirclePlus className="text-[20px] text-gray-400" />
          <div className="font-semibold hover:text-blue-500">Create Event</div>
        </Link>
        <Link to="/my-booking" className="flex gap-6">
          <FaClipboard className="text-[20px] text-gray-400" />
          <div className="font-semibold hover:text-blue-500">My Booking</div>
        </Link>
        <Link to="/my-wishlist" className="flex gap-6">
          <FaHeart className="text-[20px] text-gray-400" />
          <div className="font-semibold hover:text-blue-500">My Wishlist</div>
        </Link>
        <div className="flex gap-6">
          <FaGear className="text-[20px] text-gray-400" />
          <div className="font-semibold hover:text-blue-500">Setting</div>
        </div>
        <div className="flex gap-6 text-red-500">
          <FaArrowRightFromBracket className="text-[20px]" />
          <div className="font-semibold">Logout</div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
