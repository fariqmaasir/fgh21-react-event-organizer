import react from "react";
import { FaChevronDown } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import CreateEvent from "../components/CreateEvent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  if (token === null) {
    navigate("/login");
  }
  const [valid, setValid] = react.useState(true);
  function changePass(e) {
    e.preventDefault();
    const oldPass = e.target.oldPass.value;
    const newPass = e.target.newPass.value;
    const confPass = e.target.confPass.value;
    if (newPass != confPass) {
      setValid(false);
      return;
    } else {
      async function fetchPass() {
        const formData = new URLSearchParams({
          oldPassword: oldPass,
          newPassword: newPass,
        });
        const response = await fetch("http://localhost:8888/auth/password", {
          method: "PATCH",
          headers: {
            Authorization: "Bearer " + token,
          },
          body: formData,
        });
        const json = await response.json();
        if (json.success) {
          window.alert(json.message);
        } else {
          window.alert(json.message)
        }
        console.log(json);
      }
      fetchPass();
    }
  }
  return (
    <div className="md:bg-[#F4F7FF]">
      <Navbar />
      <div className="flex w-screen w-full h-full pt-[70px]">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="flex flex-col bg-white p-10 h-screen w-full md:w-[70%] rounded-3xl gap-10">
          <div className="font-semibold text-[20px]">Change Password</div>
          <form className="flex flex-col gap-7" onSubmit={changePass}>
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
      {/* <div
        className={
          valid
            ? "hidden"
            : "absolute top-0 bg-black/60 h-screen w-screen flex justify-center items-center"
        }
      >
        <div className="bg-white p-14 rounded-xl font-semibold text-xl">
          Password Salah
        </div>
      </div> */}
    </div>
  );
}

export default ChangePassword;
