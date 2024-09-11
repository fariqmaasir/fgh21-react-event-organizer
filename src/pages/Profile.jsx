import react from "react";
import { FaChevronDown, FaSpinner } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import eminem from "../assets/img/eminem.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { retry } from "@reduxjs/toolkit/query";
import { useNavigate } from "react-router-dom";
import { assignProfile } from "../redux/reducers/profile";
import Layout from "../components/Layout";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [profession, setProfession] = react.useState([]);
  const [valid, setValid] = react.useState(true);
  const [loading, setLoading] = react.useState(true);
  const [msg, setMsg] = react.useState("");
  const [nationality, setNationality] = react.useState([]);
  const data = useSelector((state) => state.profile.data);
  const [file, setFile] = react.useState(null);
  const [preview, setPreview] = react.useState(null);
  const token = useSelector((state) => state.auth.token);
  // if (token === null) {
  //   navigate("/login");
  // }
  async function addProfile() {
    setLoading(false)
    const url = "http://localhost:8888/auth/profile";
    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const json = await response.json();
    console.log(json);
    dispatch(assignProfile(json.results));
    setLoading(true)
    // console.log("haloooo", json.results);
  }
  react.useEffect(() => {
    //   async function addProfile() {
    //     const url = "https://wsw6zh-8888.csb.app/profile/professions";
    //     const response = await fetch(url, {
    //       headers: {
    //         Authorization: "Bearer " + token,
    //       },
    //     });
    //     const json = await response.json();
    //     setProfession(json.results);
    //   }
    // console.log("prof", profession);
    //   addProfile();
    async function addNation() {
      const url = "http://localhost:8888/nationality";
      const response = await fetch(url, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const json = await response.json();
      setNationality(json.results);
    }
    addNation();
    addProfile();
    // console.log("nation", nationality);
  }, []);

  const date = new Date(data.birthDate);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const day = String(date.getUTCDate()).padStart(2, '0');
  
  // Combine them into the desired format
  const formattedDate = `${year}-${month}-${day}`;
  console.log(formattedDate)

  // function updateProfile() {
  //   editProfile()
  // }
  async function editProfile(e) {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    const username = e.target.username.value;
    const email = e.target.email.value;
    const phoneNumber = e.target.phoneNumber.value;
    const gender = e.target.gender.value;
    const nationalityId = e.target.nationality.value;
    console.log(nationalityId)
    const profession = e.target.profession.value;
    const date = e.target.birthDate.value;
    const newDate = new Date(date)
    const birthDate = newDate.toISOString()
    console.log(birthDate)
    const formData = new URLSearchParams({
      email,
      username,
      fullName,
      birthDate,
      gender,
      phoneNumber,
      profession,
      nationalityId
    });
    console.log(formData)
    setLoading(false)
    const response = await fetch("http://localhost:8888/auth/edit", {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      setMsg(json.message);
      setValid(!valid)
      addProfile();
      uploadImage()
      setLoading(true)
    } else {
      setMsg(json.message);
      setValid(!valid)
      setLoading(true)
    }
  }
  async function uploadImage() {

    const body = new FormData()
    body.append( 'image', file)
 
    const response = await fetch('http://localhost:8888/auth/upload', {
      method: 'POST',
      headers: {
        Authorization: "Bearer " + token,
      },
      body,
    });
    const json = await response.json()
    console.log(json)
      
  }
  function home() {
    setValid(!valid);
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Membaca file menggunakan FileReader
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    // Saat file dibaca selesai, simpan hasilnya di state preview
    reader.onloadend = () => {
      setPreview(reader.result);  // Simpan URL gambar di state preview
    };
  };
  return (
    <div className="md:bg-[#F4F7FF]">
        <Layout>
        <div className="flex w-full h-full py-[70px]">
          <div className="hidden md:block">
            <Sidebar />
          </div>
          {/* LEFT */}
          <div className="md:flex justify-evenly basis-full bg-white p-10 md:rounded-3xl gap-10">
            <form
              className="flex md:block basis-3/6 flex-col gap-12"
              onSubmit={editProfile}

            >
              <div className="pr-64 py-10 md:mr-0 text-[20px] font-semibold">
                Profile
              </div>
              <div className="md:hidden w-[137px] h-[137px] bg-gradient-to-r from-[#508D4E] to-purple-500 rounded-full flex justify-center items-center">
                <div className="min-w-[130px] h-[130px] bg-white rounded-full flex justify-center items-center ">
                  <div className="relative border border-gray-500 w-[110px] h-[110px] rounded-full bg-gray-500 overflow-hidden">
                    <img
                      src={data.picture}
                      alt={data.username}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <div className="flex flex-col md:flex-row md:items-center gap-24">
                  <div>Name</div>
                  <div className="flex items-center border border-[#C1C5D0] w-full md:w-[315px] h-[55px] rounded-xl overflow-hidden">
                    <input
                      type="text"
                      name="fullName"
                      className="pl-5 w-full h-full outline-none"
                      defaultValue={data.fullName}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[66px]">
                  <div>Username</div>
                  <div className="flex items-center border border-[#C1C5D0] w-full md:w-[315px] h-[55px] rounded-xl overflow-hidden">
                    <input
                      type="text"
                      name="username"
                      className="pl-5 w-full h-full outline-none"
                      defaultValue={data.username}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[106px]">
                  <div>Email</div>
                  <div className="flex items-center border border-[#C1C5D0] w-full md:w-[315px] h-[55px] rounded-xl overflow-hidden">
                    <input
                      type="text"
                      name="email"
                      className="pl-5 w-full h-full outline-none"
                      defaultValue={data.email}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[98px]">
                  <div>Phone</div>
                  <div className="flex items-center border border-[#C1C5D0] w-full md:w-[315px] h-[55px] rounded-xl overflow-hidden">
                    <input
                      type="text"
                      name="phoneNumber"
                      className="pl-5 w-full h-full outline-none"
                      defaultValue={data.phoneNumber}
                    />
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
                        value="0"
                        defaultChecked={`${data.gender}` == 0 ? true : false}
                      />
                      <label htmlFor="male">Male</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="gender"
                        id="female"
                        value="1"
                        defaultChecked={`${data.gender}` == 1 ? true : false}
                      />
                      <label htmlFor="female">Female</label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-16">
                  <div>Profession</div>
                  <div className="flex items-center border border-[#C1C5D0] w-full md:w-[315px] h-[55px] rounded-xl overflow-hidden">
                    <input
                      type="text"
                      name="profession"
                      className="pl-5 w-full h-full outline-none"
                      defaultValue={data.profession}
                    />
                  </div>
                </div>
                {/* <div className="flex flex-col md:flex-row md:items-center justify-between">
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
                  </div>
                </div> */}
                <div className="flex flex-col md:flex-row md:items-center gap-16">
                  <div>Nationality</div>
                  <div className="flex items-center border border-[#C1C5D0] w-full md:w-[315px] h-[55px] rounded-xl">
                    <select
                      id="nationality"
                      name="nationality"
                      defaultValue={data.nationalityId}
                      className="px-5 w-full h-full rounded-xl outline-none"
                    >
                      {nationality.map((item) => {
                        return (
                          <option
                            selected={
                              item.id === data.nationalityId ? true : false
                            }
                            value={item.id}
                          >
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[42px]">
                  <div>Birthday Date</div>
                  <div className="flex items-center border border-[#C1C5D0] w-full md:w-[315px] h-[55px] rounded-xl">
                    <input
                      type="date"
                      name="birthDate"
                      id=""
                      className="px-5 w-full h-full rounded-xl outline-none"
                      defaultValue={formattedDate}
                    />
                  </div>
                </div>
                <div className="pt-[50px]">
                  <button className="w-[315px] bg-[#508D4E] font-semibold text-white h-[60px] rounded-xl shadow-sm shadow-[#508D4E]">
                    Save
                  </button>
                </div>
              </div>
            </form>
            {/* RIGHT */}
            <div className="hidden md:flex flex-col gap-8 items-center pt-[75px]">
              {preview ? 
                <div className="w-[137px] h-[137px] bg-gradient-to-r from-[#508D4E] to-purple-500 rounded-full flex justify-center items-center">
                <div className="min-w-[130px] h-[130px] bg-white rounded-full flex justify-center items-center ">
                  <div className="relative border border-gray-500 w-[110px] h-[110px] rounded-full bg-gray-500 overflow-hidden">
                    <img
                      src={preview}
                      alt={data.id}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              :
              <div className="w-[137px] h-[137px] bg-gradient-to-r from-[#508D4E] to-purple-500 rounded-full flex justify-center items-center">
                <div className="min-w-[130px] h-[130px] bg-white rounded-full flex justify-center items-center ">
                  <div className="relative border border-gray-500 w-[110px] h-[110px] rounded-full bg-gray-500 overflow-hidden">
                    <img
                      src={data.picture}
                      alt={data.id}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>         
              }
              <form className="text-[#508D4E] font-semibold" enctype="multipart/form-data">
              <button type="button">
                <label htmlFor="file" className="border border-[#508D4E] p-3 px-14 rounded-xl block cursor-pointer">
                  Choose Photo
                </label>
              </button>
                <input
                  type="file"
                  id="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </form>
              {/* {preview && (
                <div className="image-preview">
                  <img src={preview} alt="Preview" className="w-40 h-40 object-cover mt-4" />
                </div>
              )} */}
              <div className="text-[12px] flex flex-col gap-5 pr-12">
                <div>Image size: max, 2 MB</div>
                <div>Image formats: .JPG, .JPEG, .PNG</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            valid
              ? "hidden"
              : "top-0 bg-black/60 h-screen w-full fixed flex justify-center items-center"
          }
          onClick={home}
        >
          <div className="bg-white p-14 rounded-xl font-semibold text-xl">
          {msg}
          </div>
        </div>
        <div
          className={
            loading
              ? "hidden"
              : "top-0 bg-black/60 h-screen w-full fixed flex justify-center items-center"
          }
        >
          <div className="animate-spin">
            <FaSpinner className="text-7xl text-white"/>
          </div>
        </div>
    </Layout>
      </div>
  );
}

export default Profile;
