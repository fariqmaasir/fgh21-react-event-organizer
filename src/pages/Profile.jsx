import react from "react";
import { FaChevronDown } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import eminem from "../assets/img/eminem.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { retry } from "@reduxjs/toolkit/query";

function Profile() {
  const [profession, setProfession] = react.useState([]);
  const [nationality, setNationality] = react.useState([]);
  const data = useSelector((state) => state.profile.data);
  const token = useSelector((state) => state.auth.token);
  react.useEffect(() => {
    async function addProfile() {
      const url = "https://wsw6zh-8888.csb.app/profile/professions";
      const response = await fetch(url, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const json = await response.json();
      setProfession(json.results);
    }
    addProfile();
    async function addNation() {
      const url = "https://wsw6zh-8888.csb.app/profile/nationalities";
      const response = await fetch(url, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const json = await response.json();
      setNationality(json.results);
    }
    console.log("prof", profession);
    console.log("nation", nationality);
    addNation();
  }, []);
  const date = new Date();
  const futureDate = date.getDate(data.birthdayDate);
  date.setDate(futureDate);
  const defaultValue = date.toLocaleDateString("en-CA");
  return (
    <div className="md:bg-[#F4F7FF]">
      <Navbar />
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
            <div className="md:hidden w-[137px] h-[137px] bg-gradient-to-r from-[#508D4E] to-purple-500 rounded-full flex justify-center items-center">
              <div className="min-w-[130px] h-[130px] bg-white rounded-full flex justify-center items-center ">
                <div className="relative border border-gray-500 w-[110px] h-[110px] rounded-full bg-gray-500 overflow-hidden">
                  <img
                    src={data.picture}
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
                  <input
                    type="text"
                    className="pl-5 outline-none"
                    defaultValue={data.name}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[66px]">
                <div>Username</div>
                <div className="flex gap-4">
                  <div>{data.username}</div>
                  <div className="underline underline-offset-2 text-[#508D4E] cursor-pointer">
                    Edit
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[106px]">
                <div>Email</div>
                <div className="flex gap-4">
                  <div>{data.email}</div>
                  <div className="underline underline-offset-2 text-[#508D4E] cursor-pointer">
                    Edit
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[98px]">
                <div>Phone</div>
                <div className="flex gap-4">
                  <div>{data.phoneNumber}</div>
                  <div className="underline underline-offset-2 text-[#508D4E] cursor-pointer">
                    Edit
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[85px]">
                <div>Gender</div>
                <div className="flex items-center gap-7">
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      defaultChecked={"Male" == `${data.gender}` ? true : false}
                    />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      defaultChecked={
                        "Female" == `${data.gender}` ? true : false
                      }
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <label for="profession">Profession</label>
                <div className="flex items-center border border-[#C1C5D0] w-full md:w-[315px] h-[55px] rounded-xl">
                  <select
                    id="profession"
                    name="proflist"
                    form="prof"
                    className="px-5 w-11/12 h-full rounded-xl outline-none"
                  >
                    <option value={data.profession}>{data.profession}</option>
                    {profession.map((item) => {
                      return <option value={item.id}>{item.name}</option>;
                    })}
                  </select>
                  {/* <div className="pl-5"></div> */}
                  {/* <button type="button" className="pr-5">
                    <FaChevronDown />
                  </button> */}
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>Nationality</div>
                <div className="flex items-center border border-[#C1C5D0] w-full md:w-[315px] h-[55px] rounded-xl">
                  <select
                    id="profession"
                    name="proflist"
                    form="prof"
                    className="px-5 w-11/12 h-full rounded-xl outline-none"
                  >
                    <option value={data.nationality}>{data.nationality}</option>
                    {nationality.map((item) => {
                      return <option value={item.id}>{item.name}</option>;
                    })}
                  </select>
                  {/* <div className="pl-5">{data.nationality}</div>
                  <button type="button" className="pr-5">
                    <FaChevronDown />
                  </button> */}
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[42px]">
                <div>Birthday Date</div>
                <div className="flex items-center border border-[#C1C5D0] w-full md:w-[315px] h-[55px] rounded-xl">
                  <input
                    type="date"
                    name=""
                    id=""
                    className="px-5 w-11/12 h-full rounded-xl outline-none"
                    defaultValue={defaultValue}
                  />
                </div>
              </div>
              <div className="pt-[50px]">
                <button className="w-[315px] bg-[#508D4E] font-semibold text-white h-[60px] rounded-xl shadow-sm shadow-[#508D4E]">
                  Save
                </button>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="hidden md:flex flex-col gap-8 items-center pt-[75px]">
            <div className="w-[137px] h-[137px] bg-gradient-to-r from-[#508D4E] to-purple-500 rounded-full flex justify-center items-center">
              <div className="min-w-[130px] h-[130px] bg-white rounded-full flex justify-center items-center ">
                <div className="relative border border-gray-500 w-[110px] h-[110px] rounded-full bg-gray-500 overflow-hidden">
                  <img
                    src={data.picture}
                    alt=""
                    className="absolute top-0 left-0 w-full h-full object-fit"
                  />
                </div>
              </div>
            </div>
            <div className="text-[#508D4E] font-semibold">
              <button
                type="button"
                className="border border-[#508D4E] w-[255px] h-[40px] rounded-xl"
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
