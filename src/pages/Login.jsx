import react from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import Logo from "../components/Logo";
import eyes_icon from "../assets/icon/eyes.png";
import char from "../assets/img/login.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/reducers/auth";
import { assignProfile } from "../redux/reducers/profile";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const token = useSelector((state) => state.auth.token);
  const [type, setType] = react.useState("password");
  const [valid, setValid] = react.useState(true);
  const [wrongMsg, setWrongMsg] = react.useState("");
  const [wrong, setWrong] = react.useState(true);
  function pass() {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
    console.log("test...");
  }
  async function addProfile(token) {
    console.log(token);
    const url = "http://localhost:8888/auth/profile";
    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const json = await response.json();
    console.log(json);
    dispatch(assignProfile(json.results));
    console.log("haloooo", json.results);
  }
  async function logProcess(event) {
    event.preventDefault();
    console.log("test ..");
    const email = event.target.email.value;
    const password = event.target.password.value;
    const url = "http://localhost:8888/auth/login";
    const formData = new URLSearchParams();
    formData.append("email", email);
    formData.append("password", password);

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setValid(!valid);
      dispatch(login(data.results.token));
      addProfile(data.results.token);
    } else {
      setWrongMsg(data.message);
      setWrong(!wrong);
    }
  }
  function home() {
    setValid(!valid);
    navigate("/");
  }
  return (
    <div className="relative w-screen h-screen">
      <div className="flex ">
        <div className="md:flex justify-center items-center bg-[#508D4E] w-screen h-screen hidden">
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
          <div
            className={wrong ? "hidden" : "md:w-80 bg-red-400/40 p-2 rounded"}
          >
            <div className="font-semibold text-red-500">{wrongMsg}</div>
          </div>
          {/* FORM */}
          <form onSubmit={logProcess} className="flex flex-col gap-4">
            {/* INPUT */}
            <div className="flex flex-col gap-5 ">
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
              className="w-full md:w-80 bg-[#508D4E] text-white h-[55px] rounded-xl shadow-sm shadow-[#508D4E]"
            >
              Sign in
            </button>
            {/* LOGIN WITH ANOTHER */}
            <div className="flex flex-col items-center pt-10 gap-5">
              <div>or sign in with</div>
              <div className="flex items-center gap-3">
                <div className="border border-[#508D4E] w-[95px] h-[52px] flex justify-center items-center rounded-xl cursor-pointer">
                  <FaGoogle className="text-[24px]" />
                </div>
                <div className="border border-[#508D4E] w-[95px] h-[52px] flex justify-center items-center rounded-xl cursor-pointer">
                  <FaFacebook className="text-[24px]" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        className={
          valid
            ? "hidden"
            : "absolute top-0 bg-black/60 h-screen w-screen flex justify-center items-center"
        }
        onClick={home}
      >
        <div className="bg-white p-14 rounded-xl font-semibold text-xl">
          HALO SELAMAT DATANG :D
        </div>
      </div>
    </div>
  );
}

export default Login;
