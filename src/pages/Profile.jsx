import react from "react";
import { FaChevronDown } from "react-icons/fa6";
import NavbarProfile from "../components/NavbarProfile";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import eminem from "../assets/img/eminem.png";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="md:bg-[#F4F7FF]">
      <NavbarProfile />
      <div className="flex w-full h-full pt-[70px]">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        {/* LEFT */}
        <div className="md:flex justify-evenly basis-full bg-white p-10 md:rounded-3xl gap-10">
          <div className="flex md:block basis-3/6 flex-col gap-12">
            <div className="mr-64 md:mr-0 text-[20px] font-semibold">
              Profile
            </div>
            <div className="md:hidden w-[137px] h-[137px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex justify-center items-center">
              <div className="min-w-[130px] h-[130px] bg-white rounded-full flex justify-center items-center ">
                <div className="relative border border-gray-500 w-[110px] h-[110px] rounded-full bg-gray-500 overflow-hidden">
                  <img
                    src={eminem}
                    alt=""
                    className="absolute top-0 left-0 w-full h-full object-fit"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>Name</div>
                <div className="flex items-center border border-[#C1C5D0] w-full md:w-[315px] h-[55px] rounded-xl">
                  <div className="pl-5">Jhon Tomson</div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[66px]">
                <div>Username</div>
                <div className="flex gap-4">
                  <div>@jhont0</div>
                  <div className="underline underline-offset-2 text-blue-500 cursor-pointer">
                    Edit
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[106px]">
                <div>Email</div>
                <div className="flex gap-4">
                  <div>jhont0@mail.com</div>
                  <div className="underline underline-offset-2 text-blue-500 cursor-pointer">
                    Edit
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[98px]">
                <div>Phone</div>
                <div className="flex gap-4">
                  <div>081234567890</div>
                  <div className="underline underline-offset-2 text-blue-500 cursor-pointer">
                    Edit
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[85px]">
                <div>Gender</div>
                <div className="flex items-center gap-7">
                  <div>
                    <input type="radio" name="gender" id="male" />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div>
                    <input type="radio" name="gender" id="female" />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>Profession</div>
                <div className="flex items-center border border-[#C1C5D0] w-full md:w-[315px] h-[55px] rounded-xl justify-between">
                  <div className="pl-5">Entrepreneur</div>
                  <button type="button" className="pr-5">
                    <FaChevronDown />
                  </button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>Nationality</div>
                <div className="flex items-center border border-[#C1C5D0] w-full md:w-[315px] h-[55px] rounded-xl justify-between">
                  <div className="pl-5">Indonesia</div>
                  <button type="button" className="pr-5">
                    <FaChevronDown />
                  </button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[42px]">
                <div>Birthday Date</div>
                <div className="flex gap-4">
                  <div>24 / 10 / 2000</div>
                  <div className="underline underline-offset-2 text-blue-500 cursor-pointer">
                    Edit
                  </div>
                </div>
              </div>
              <div className="pt-[50px]">
                <button className="w-[315px] bg-blue-500 font-semibold text-white h-[60px] rounded-xl shadow-sm shadow-blue-500">
                  Save
                </button>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="hidden md:flex flex-col gap-8 items-center pt-[75px]">
            <div className="w-[137px] h-[137px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex justify-center items-center">
              <div className="min-w-[130px] h-[130px] bg-white rounded-full flex justify-center items-center ">
                <div className="relative border border-gray-500 w-[110px] h-[110px] rounded-full bg-gray-500 overflow-hidden">
                  <img
                    src={eminem}
                    alt=""
                    className="absolute top-0 left-0 w-full h-full object-fit"
                  />
                </div>
              </div>
            </div>
            <div className="text-blue-500 font-semibold">
              <button
                type="button"
                className="border border-blue-500 w-[255px] h-[40px] rounded-xl"
              >
                Choose Photo
              </button>
            </div>
            <div className="text-[12px] flex flex-col gap-5 pr-12">
              <div>Image size: max, 2 MB</div>
              <div>Image formats: .JPG, .JPEG, .PNG</div>
            </div>
          </div>
        </div>
      </div>
      <Footer className="bg-[#F4F7FF]" />
    </div>
  );
}

export default Profile;
