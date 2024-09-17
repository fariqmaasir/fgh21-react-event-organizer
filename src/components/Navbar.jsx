import react from "react";
import Logo from "./Logo";
import eminem from "../assets/img/eminem.png";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate, ScrollRestoration } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = react.useState(false);
  const token = useSelector((state) => state.auth.token);
  const data = useSelector((state) => state.profile.data);

  console.log(data);
  function menu() {
    setShowMenu(!showMenu);
    console.log(showMenu);
  }
  async function addProfile() {
    const url = "http://localhost:8888/auth/profile";
    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const json = await response.json();
    dispatch(assignProfile(json.results));
  }

  react.useEffect(()=>{
    addProfile()
  },[])
  function check(locate) {
    console.log("hai");
    if (token === null) {
      navigate("/login");
    } else {
      navigate("/" + locate);
    }
  }
  return (
    <nav>
      <div className="flex flex-col md:flex-row justify-between items-center bg-white md:px-8">
        <div className="md:contents flex items-center justify-between w-full">
          <div>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <button type="button" onClick={menu}>
            <FaBars className="md:hidden text-[30px]" />
          </button>
        </div>
        <div className={showMenu ? "hidden" : ""}>
          <ul className="md:flex-row flex-col flex gap-10 items-center">
            <Link to="/" className="font-semibold hover:text-[#508D4E]">
              Home
            </Link>
            <button
              onClick={() => check("create-event")}
              className="font-semibold hover:text-[#508D4E]"
            >
              Create Event
            </button>
            <button className="font-semibold hover:text-[#508D4E]">Location</button>
          </ul>
        </div>
        <div>
          <div className={showMenu ? "hidden" : ""}>
            <div className={token ? "hidden" : ""}>
              <div className="flex md:flex-row flex-col items-center md:gap-0 gap-10 md:py-0 py-10">
                <div>
                  <Link
                    to="/login"
                    className="md:w-[100px] w-screen h-[40px] md:pr-10 font-semibold"
                  >
                    Log In
                  </Link>
                </div>
                <Link to="/sign-up">
                  <button className="bg-[#508D4E] text-white w-screen md:w-[170px] h-[40px] rounded-xl font-semibold">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className={showMenu ? "hidden" : ""}>
            <Link to="/profile">
              <div className={token ? "" : "hidden"}>
                <div className="hidden md:flex md:flex-row flex-col items-center md:py-0">
                  <div className="flex gap-5 items-center py-2">
                    <div className="min-w-[55px] h-[55px] bg-gradient-to-r from-[#508D4E] to-purple-500 rounded-full flex justify-center items-center">
                      <div className="min-w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center ">
                        <div className="relative border border-gray-500 w-[44px] h-[44px] rounded-full bg-gray-500 overflow-hidden">
                          <img
                            src={ data.picture}
                            alt={data.username}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">{data.fullName}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </nav>
  );
}

export default Navbar;
