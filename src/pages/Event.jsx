import react from "react";
import event_img_1 from "../assets/img/event-img-1.png";
import map_img from "../assets/img/map.png";
import { FaMapPin, FaClock, FaHeart } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import avatar_1 from "../assets/img/avatar-1.png";
import avatar_2 from "../assets/img/avatar-2.png";
import avatar_3 from "../assets/img/avatar-3.png";
import avatar_4 from "../assets/img/avatar-4.png";
import { useSelector } from "react-redux";

function Event() {
  const navigate = useNavigate();
  let { id } = useParams();

  async function addWishlist() {
    if (token === null) {
      navigate("/login");
    } else {
      const response = await fetch(
        `http://localhost:8888/events/wishlist/${id}`,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const json = await response.json();
      console.log(json);
    }
  }

  const [dataEvent, setDataEvent] = react.useState({
    // id: 0,
    // image: "",
    // title: "",
    // date: "",
    // descriptions: "",
    // locationId: null,
    // createdBy: 0,
  });
  const token = useSelector((state) => state.auth.token);
  function check(locate) {
    if (token === null) {
      navigate("/login");
    } else {
      navigate(`/${locate}/${id}`);
    }
  }
  react.useEffect(() => {
    (async function () {
      const response = await fetch("http://localhost:8888/events/list/" + id);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json.results);
      setDataEvent(json.results[0]);
    })();
  }, []);
  console.log(dataEvent);
  console.log(dataEvent.image);
  return (
    <div className="md:bg-[#F4F7FF]">
      <Navbar />
      <div className="flex flex-col items-center w-screen w-full h-full pt-10 md:pt-[70px]">
        <div className="flex bg-white md:p-20 md:w-[94%] rounded-3xl gap-10">
          {/* LEFT */}
          <div className="md:flex hidden basis-3/5 flex-col gap-12 items-center">
            <div className="relative w-[375px] h-[486px] rounded-3xl overflow-hidden">
              <img
                src={dataEvent.image}
                alt={dataEvent.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute top-0 left-0 bg-gradient-to-t from-black w-full h-full"></div>
            </div>
            <div
              onClick={addWishlist}
              className="flex items-center text-xl gap-3 cursor-pointer"
            >
              <div>
                <FaHeart />
              </div>
              <div>Add to Wishlist</div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="flex flex-col gap-8 md:basis-3/5 ">
            <div className="md:hidden">
              <div className="relative w-screen h-screen rounded-3xl overflow-hidden">
                <img
                  src={dataEvent.image}
                  alt={dataEvent.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-0 left-0 bg-gradient-to-t from-black w-full h-full">
                  <div className="flex flex-col gap-8 mx-5 absolute bottom-0 py-52">
                    <div className="text-[34px] font-semibold text-white">
                      {dataEvent.title}
                    </div>
                    <div className="flex div:flex-row flex-col gap-10">
                      <div>
                        <div className="flex items-center gap-1">
                          <FaMapPin className="text-red-500 text-[23px]" />
                          <div className="text-white text-[23px]">
                            Jakarta, Indonesia
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaClock className="text-red-500 text-[23px]" />
                        <div className="text-white text-[23px]">
                          Wed, 15 Nov, 4:00 PM
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5">
                      <div className="text-white text-[23px]">Attendes</div>
                      <div className="flex">
                        <div className="w-[40px] h-[40px] border border-white rounded-full overflow-hidden">
                          <img src={avatar_1} alt="" />
                        </div>
                        <div className="w-[40px] h-[40px] border border-white rounded-full overflow-hidden ml-[-10px]">
                          <img src={avatar_2} alt="" />
                        </div>
                        <div className="w-[40px] h-[40px] border border-white rounded-full overflow-hidden ml-[-10px]">
                          <img
                            src={avatar_3}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-[30px] h-[30px] border border-white rounded-full overflow-hidden ml-[-10px] relative">
                          <img src={avatar_4} alt="" />
                          <div className="absolute bg-orange-600/60 top-0 left-0 w-full h-full flex justify-center items-center text-white">
                            62+
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* TITLE */}
            <div className="md:flex hidden flex-col gap-8 mx-5">
              <div className="text-[24px] font-semibold w-60 tracking-wider">
                {dataEvent.title}
              </div>
              <div className="flex gap-10">
                <div>
                  <div className="flex items-center gap-1">
                    <FaMapPin className="text-red-500" />
                    <div>Jakarta, Indonesia</div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <FaClock className="text-red-500" />
                  <div>Wed, 15 Nov, 4:00 PM</div>
                </div>
              </div>
              <div className="">
                <div>Attendes</div>
                <div className="flex">
                  <div className="w-[30px] h-[30px] border border-white rounded-full overflow-hidden">
                    <img src={avatar_1} alt="" />
                  </div>
                  <div className="w-[30px] h-[30px] border border-white rounded-full overflow-hidden ml-[-10px]">
                    <img src={avatar_2} alt="" />
                  </div>
                  <div className="w-[30px] h-[30px] border border-white rounded-full overflow-hidden ml-[-10px]">
                    <img
                      src={avatar_3}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[30px] h-[30px] border border-white rounded-full overflow-hidden ml-[-10px] relative">
                    <img src={avatar_4} alt="" />
                    <div className="absolute bg-orange-600/60 top-0 left-0 w-full h-full flex justify-center items-center text-white">
                      62+
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            {/* EVENT DETAIL */}
            <div className="flex flex-col gap-5 mx-5">
              <div className="font-semibold text-[25px]">Event Detail</div>
              <div className="text-gray-400">{dataEvent.descriptions}..</div>
              <div className="text-blue-600 cursor-pointer">Read More</div>
            </div>
            <div className="flex flex-col gap-5 mx-5">
              <div>Location</div>
              <div>
                <img
                  src={map_img}
                  alt=""
                  className="w-full md:w-80 cursor-pointer"
                />
              </div>
              <div>
                <button
                  className=" w-full md:w-80 bg-[#508D4E] text-white h-10 rounded-xl shadow-sm shadow-[#508D4E]"
                  onClick={() => check("booking")}
                >
                  But Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer className="bg-[#F4F7FF]" />
    </div>
  );
}

export default Event;
