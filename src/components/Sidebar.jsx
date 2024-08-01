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
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/reducers/auth";
import { logoutProfile } from "../redux/reducers/profile";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function out() {
    dispatch(logout());
    dispatch(logoutProfile());
    navigate("/login");
  }
  const data = useSelector((state) => state.profile.data);
  return (
    <aside>
      <div className="flex flex-col gap-7 pt-10 md:pl-16 md:pr-10">
        <div className="gap-5 items-center hidden md:flex">
          <div className="min-w-[55px] h-[55px] bg-gradient-to-r from-[#508D4E] to-purple-500 rounded-full flex justify-center items-center">
            <div className="min-w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center ">
              <div className="relative border border-gray-500 w-[44px] h-[44px] rounded-full bg-gray-500 overflow-hidden">
                <img
                  src={data.picture}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-fit"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="font-semibold">{data.name}</div>
            <div className="text=gray-500">{data.profession}, ID</div>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <button className="flex gap-6">
            <FaCircleUser className="text-[20px] text-gray-400" />
            <div className="font-semibold hover:text-[#508D4E]">Profile</div>
          </button>
          <div className="flex flex-col gap-7 pl-12">
            <div className="flex gap-6">
              <FaCreditCard className="text-[20px] text-gray-400" />
              <div className="font-semibold hover:text-[#508D4E]">Card</div>
            </div>
            <div className="flex gap-6">
              <FaPen className="text-[20px] text-gray-400" />
              <Link
                to="/profile"
                className="font-semibold hover:text-[#508D4E]"
              >
                Edit Profile
              </Link>
            </div>
            <Link to="/change-password" className="flex gap-6">
              <FaUnlock className="text-[20px] text-gray-400" />
              <div className="font-semibold hover:text-[#508D4E]">
                Change Password
              </div>
            </Link>
          </div>
        </div>
        <Link to="/create-event" className="flex gap-6">
          <FaCirclePlus className="text-[20px] text-gray-400" />
          <div className="font-semibold hover:text-[#508D4E]">Create Event</div>
        </Link>
        <Link to="/my-booking" className="flex gap-6">
          <FaClipboard className="text-[20px] text-gray-400" />
          <div className="font-semibold hover:text-[#508D4E]">My Booking</div>
        </Link>
        <Link to="/my-wishlist" className="flex gap-6">
          <FaHeart className="text-[20px] text-gray-400" />
          <div className="font-semibold hover:text-[#508D4E]">My Wishlist</div>
        </Link>
        <div className="flex gap-6">
          <FaGear className="text-[20px] text-gray-400" />
          <div className="font-semibold hover:text-[#508D4E]">Setting</div>
        </div>
        <div className="flex gap-6 text-red-500">
          <FaArrowRightFromBracket className="text-[20px]" />
          <button type="button" onClick={out}>
            <div className="font-semibold">Logout</div>
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
