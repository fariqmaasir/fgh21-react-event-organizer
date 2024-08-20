import react from "react";
import Logo from "../components/Logo";
import char from "../assets/img/login.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ForgetPassword() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  if (token === null) {
    navigate("/login");
  }
  function forgProcess(event) {
    event.preventDefault();
    const email = event.target.email.value;
    if (email === "admin@mail.com") {
      navigate("/login");
    } else {
      window.alert("Wrong Credentials");
    }
  }
  return (
    <div className="flex">
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
          <div className="font-semibold text-2xl">Forgot Password</div>
          <div className="text-sm">You'll get mail soon on your email</div>
        </div>
        {/* FORM */}
        <form onSubmit={forgProcess} className="flex flex-col gap-4">
          {/* INPUT */}
          <div className="flex flex-col gap-5">
            <div className="flex border border-{rgba(193, 197, 208, 1)} overflow-hidden md:w-80 rounded-xl h-[55px]">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="items-center w-80 pl-4 outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="md:w-80 bg-[#508D4E] text-white h-[55px] rounded-xl shadow-sm shadow-[#508D4E]"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
