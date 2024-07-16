import react from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import Logo from "../components/Logo";
import logo_icon from "../assets/icon/logo.png";
import eyes_icon from "../assets/icon/eyes.png";
import char from "../assets/img/login.png";

function Login() {
  return (
    <div className="flex">
      <div className="bg-blue-500 w-screen h-screen">
        <div>{/* <img src={char} alt="" /> */}</div>
      </div>
      <div className="flex gap-4 flex-col justify-center p-10">
        {/* LOGO */}
        <Logo />
        {/* TITLE */}
        <div>
          <div className="font-bold text-2xl">Sign in</div>
          <div className="text-sm">Hi, Welcome back to Urticket!</div>
        </div>
        {/* FORM */}
        <form className="flex flex-col gap-4">
          {/* INPUT */}
          <div className="flex flex-col gap-5 ">
            <div className="flex border border-{rgba(193, 197, 208, 1)}  overflow-hidden w-80 rounded-xl h-10">
              <input
                type="text"
                placeholder="Username"
                className="items-center w-80  pl-4"
              />
            </div>
            <div className="flex border border-{rgba(193, 197, 208, 1)}  overflow-hidden w-80 rounded-xl h-10">
              <input
                type="text"
                placeholder="Email"
                className="items-center w-80 pl-4"
              />
            </div>
            <div className="flex border border-{rgba(193, 197, 208, 1)}  overflow-hidden w-80 rounded-xl h-10">
              <input
                type="text"
                placeholder="Password"
                className="items-center w-72 pl-4"
              />
              <button>
                <img src={eyes_icon} alt="" />
              </button>
            </div>
          </div>
          {/* FORGOT */}
          <div className="text-right text-blue-600">Forgot Password?</div>
          {/* BUTTON */}
          <button className="w-80 bg-blue-500 text-white h-10 rounded-xl shadow-sm shadow-blue-500">
            Sign in
          </button>
          {/* LOGIN WITH ANOTHER */}
          <div className="flex flex-col items-center pt-10">
            <div>or sign in with</div>
            <div className="flex items-center">
              <div className="border border-blue-500 w-10">
                <FaFacebook />
              </div>
              <div className="border border-blue-500 w-10">B</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
