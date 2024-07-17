import react from "react";
import { FaChevronDown } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="bg-[#F4F7FF]">
      <Navbar />
      <div className="flex w-screen w-full h-full pt-[70px]">
        <Sidebar />
        <div className="flex bg-white p-10 w-[70%] rounded-3xl gap-10">
          {/* LEFT */}
          <div className="basis-5/6 flex flex-col gap-12">
            <div className="font-semibold">Profile</div>
            <div className="flex flex-col gap-10">
              <div className="flex items-center justify-between">
                <div>Name</div>
                <div className="flex items-center border border-[#C1C5D0] w-[315px] h-[55px] rounded-xl">
                  <div className="pl-5">Jhon Tomson</div>
                </div>
              </div>
              <div className="flex items-center gap-[56px]">
                <div>Username</div>
                <div className="flex gap-4">
                  <div>@jhont0</div>
                  <div className="underline underline-offset-2 text-blue-500 cursor-pointer">
                    Edit
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-24">
                <div>Email</div>
                <div className="flex gap-4">
                  <div>jhont0@mail.com</div>
                  <div className="underline underline-offset-2 text-blue-500 cursor-pointer">
                    Edit
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[88px]">
                <div>Phone</div>
                <div className="flex gap-4">
                  <div>081234567890</div>
                  <div className="underline underline-offset-2 text-blue-500 cursor-pointer">
                    Edit
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-20">
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
              <div className="flex items-center justify-between">
                <div>Profession</div>
                <div className="flex items-center border border-[#C1C5D0] w-[315px] h-[55px] rounded-xl justify-between">
                  <div className="pl-5">Entrepreneur</div>
                  <button type="button" className="pr-5">
                    <FaChevronDown />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>Nationality</div>
                <div className="flex items-center border border-[#C1C5D0] w-[315px] h-[55px] rounded-xl justify-between">
                  <div className="pl-5">Indonesia</div>
                  <button type="button" className="pr-5">
                    <FaChevronDown />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-[32px]">
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
          <div className="flex flex-col gap-8 basis-3/5 items-center pt-[75px]">
            <div className="w-[137px] h-[137px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex justify-center items-center">
              <div className="min-w-[130px] h-[130px] bg-white rounded-full flex justify-center items-center ">
                <div className="border border-gray-500 w-[110px] h-[110px] rounded-full bg-gray-500 overflow-hidden"></div>
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
