import react from "react";
import Logo from "../components/Logo";
import eyes_icon from "../assets/icon/eyes.png";
import char from "../assets/img/login.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [type1, setType1] = react.useState("password");
  const [type2, setType2] = react.useState("password");
  function pass1() {
    if (type1 === "password") {
      setType1("text");
    } else {
      setType1("password");
    }
    console.log("test...");
  }
  function pass2() {
    if (type2 === "password") {
      setType2("text");
    } else {
      setType2("password");
    }
    console.log("test...");
  }
  async function dataProcess(event) {
    event.preventDefault();
    const url = "http://localhost:8888/auth/register";
    const fullName = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confPassword = event.target.confPassword.value;
    const terms = event.target.terms;
    if (password !== confPassword) {
      window.alert("the password doesn't match, please check again");
      return;
    }
    // else if (password.length < 8) {
    //   window.alert("the password is too short, at least 8 letters");
    //   return;
    // }
    else if (!terms.checked) {
      window.alert("please agree to the terms and conditions");
      return;
    }
    const body = new URLSearchParams({
      email,
      password,
      fullName,
    });

    const response = await fetch(url, {
      method: "POST",
      body,
    });
    const data = await response.json();
    if (data.success) {
      setValid(!valid);
      dispatch(login(data.results.token));
      addProfile(data.results.token);
      navigate("/login");
    } else {
      console.log(data.message);
      // setWrong(!wrong);
    }
    // else {
    // }
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
          <div className="font-semibold text-2xl">Sign Up</div>
          <div className="text-sm flex">
            Already have an account?
            <Link to="/login" className="text-[#508D4E] font-semibold">
              Log In
            </Link>
          </div>
        </div>
        {/* FORM */}
        <form onSubmit={dataProcess} className="flex flex-col gap-4">
          {/* INPUT */}
          <div className="flex flex-col gap-5 ">
            <div className="flex border border-{rgba(193, 197, 208, 1)} overflow-hidden md:w-80 rounded-xl h-[55px] w-full">
              <input
                name="name"
                type="text"
                placeholder="Fullname"
                className="items-center w-80 pl-4 outline-none"
              />
            </div>
            <div className="flex border border-{rgba(193, 197, 208, 1)} overflow-hidden md:w-80 rounded-xl h-[55px] w-full">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="items-center w-80 pl-4 outline-none"
              />
            </div>
            <div className="flex justify-between border border-{rgba(193, 197, 208, 1)} overflow-hidden md:w-80 rounded-xl h-[55px] w-full">
              <input
                name="password"
                type={type1}
                placeholder="Password"
                className="items-center w-72 pl-4 outline-none"
              />
              <button type="button" className="mx-5">
                <img onClick={pass1} src={eyes_icon} alt="" />
              </button>
            </div>
            <div className="flex justify-between border border-{rgba(193, 197, 208, 1)}  overflow-hidden md:w-80 rounded-xl h-[55px] w-full">
              <input
                name="confPassword"
                type={type2}
                placeholder="Confirm Password"
                className="items-center w-72 pl-4 outline-none"
              />
              <button type="button" className="mx-5">
                <img onClick={pass2} src={eyes_icon} alt="" />
              </button>
            </div>
          </div>
          {/* FORGOT */}
          <div className="flex gap-6 items-center text-[14px] font-semibold">
            <input type="checkbox" id="terms" name="terms" />
            <label htmlFor="terms">Accept terms and condition</label>
          </div>
          {/* BUTTON */}
          <button
            type="submit"
            className="md:w-80 bg-[#508D4E] text-white h-[55px] rounded-xl shadow-sm shadow-[#508D4E]"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
