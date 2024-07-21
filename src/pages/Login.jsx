import react from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import Logo from "../components/Logo";
import eyes_icon from "../assets/icon/eyes.png";
import char from "../assets/img/login.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [type, setType] = react.useState("password");
  function pass() {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
    console.log("test...");
  }
  function logProcess(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (email === "admin@mail.com" && password === "1234") {
      navigate("/");
    } else {
      window.alert("Wrong Credentials");
    }
    console.log(email);
    console.log(password);
    console.log("coba");
  }
  return (
    <div className="flex">
      <div className="md:flex justify-center items-center bg-blue-500 w-screen h-screen hidden">
        <div className>
          <img src={char} alt="" />
        </div>
      </div>
      <div className="flex gap-4 flex-col justify-center p-10 w-screen md:w-fit">
        {/* LOGO */}
        <Link to="/">
          <Logo />
        </Link>
        {/* TITLE */}
        <div>
          <div className="font-semibold text-2xl">Sign in</div>
          <div className="text-sm">Hi, Welcome back to Urticket!</div>
        </div>
        {/* FORM */}
        <form onSubmit={logProcess} className="flex flex-col gap-4">
          {/* INPUT */}
          <div className="flex flex-col gap-5 ">
            {/* <div className="flex border border-{rgba(193, 197, 208, 1)}  overflow-hidden w-80 rounded-xl h-10">
              <input
                type="text"
                placeholder="Username"
                className="items-center w-80 pl-4"
              />
            </div> */}
            <div className="flex border border-{rgba(193, 197, 208, 1)}  overflow-hidden md:w-80 rounded-xl h-[55px] w-full">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="items-center w-80 pl-4 outline-none"
              />
            </div>
            <div className="flex justify-between border border-{rgba(193, 197, 208, 1)}  overflow-hidden md:w-80 rounded-xl h-[55px] w-full">
              <input
                name="password"
                type={type}
                placeholder="Password"
                className="items-center w-4/5 md:w-64 pl-4 outline-none"
              />
              <button onClick={pass} type="button" className="mx-5">
                <img src={eyes_icon} alt="" />
              </button>
            </div>
          </div>
          {/* FORGOT */}
          <Link
            to="/forget-password"
            className="text-right text-[14px] text-blue-600 font-semibold"
          >
            Forgot Password?
          </Link>
          {/* BUTTON */}
          <button
            type="submit"
            className="w-full md:w-80 bg-blue-500 text-white h-[55px] rounded-xl shadow-sm shadow-blue-500"
          >
            Sign in
          </button>
          {/* LOGIN WITH ANOTHER */}
          <div className="flex flex-col items-center pt-10 gap-5">
            <div>or sign in with</div>
            <div className="flex items-center gap-3">
              <div className="border border-blue-500 w-[95px] h-[52px] flex justify-center items-center rounded-xl cursor-pointer">
                <FaGoogle className="text-[24px]" />
              </div>
              <div className="border border-blue-500 w-[95px] h-[52px] flex justify-center items-center rounded-xl cursor-pointer">
                <FaFacebook className="text-[24px]" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
