import react from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CreateEvent from "../components/CreateEvent";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import char from "../assets/img/login.png";
import event_img_1 from "../assets/img/event-img-1.png";
import event_img_2 from "../assets/img/event-img-2.jpg";
import event_img_3 from "../assets/img/event-img-3.jpg";
import event_img_4 from "../assets/img/event-img-4.jpg";
import event_img_5 from "../assets/img/event-img-5.jpg";
import event_img_6 from "../assets/img/event-img-6.jpeg";
import event_img_7 from "../assets/img/event-img-7.jpeg";
import event_img_8 from "../assets/img/event-img-8.jpeg";
import event_img_9 from "../assets/img/event-img-9.jpeg";
import event_img_10 from "../assets/img/event-img-10.jpeg";
import event_img_11 from "../assets/img/event-img-11.jpeg";
import event_img_12 from "../assets/img/event-img-12.jpg";
import event_img_13 from "../assets/img/event-img-13.jpeg";
import event_img_14 from "../assets/img/event-img-14.jpeg";
import bandung_city from "../assets/img/bandung.jpeg";
import bali_city from "../assets/img/bali.jpeg";
import aceh_city from "../assets/img/aceh.jpeg";
import semarang_city from "../assets/img/semarang.jpeg";
import solo_city from "../assets/img/solo.jpeg";
import jakarta_city from "../assets/img/jakarta.jpeg";
import yogyakarta_city from "../assets/img/yogyakarta.jpeg";
import sponsor_icon_1 from "../assets/icon/sponsor-1.png";
import sponsor_icon_2 from "../assets/icon/sponsor-2.png";
import sponsor_icon_3 from "../assets/icon/sponsor-3.png";
import sponsor_icon_4 from "../assets/icon/sponsor-4.png";
import sponsor_icon_5 from "../assets/icon/sponsor-5.png";
import sponsor_icon_6 from "../assets/icon/sponsor-6.png";
import avatar_1 from "../assets/img/avatar-1.png";
import avatar_2 from "../assets/img/avatar-2.png";
import avatar_3 from "../assets/img/avatar-3.png";
import avatar_4 from "../assets/img/avatar-4.png";
import { Link } from "react-router-dom";

function Homepage() {
  const data = [
    {
      id: 1,
      title: "Workshop About Golang",
      date: "Wed, 15 Nov, 4:00 PM",
      img: event_img_12,
    },
    {
      id: 2,
      title: "Iwan Concert",
      date: "Wed, 15 Nov, 10:00 PM",
      img: event_img_11,
    },
    {
      id: 3,
      title: "Gaott Gua Tuuu",
      date: "Wed, 15 Nov, 6:00 PM",
      img: event_img_7,
    },
    {
      id: 4,
      title: "Colour Music Festival",
      date: "Wed, 15 Nov, 8:00 PM",
      img: event_img_5,
    },
    {
      id: 5,
      title: "Park",
      date: "Wed, 15 Nov, 8:00 AM",
      img: event_img_10,
    },
  ];
  function scrollL() {
    console.log("test....");
    document.getElementById("event-img").scrollLeft -= 100;
  }
  function scrollR() {
    document.getElementById("event-img").scrollLeft += 100;
  }
  function scrollLDown() {
    console.log("test....");
    document.getElementById("event-img-down").scrollLeft -= 100;
  }
  function scrollRDown() {
    document.getElementById("event-img-down").scrollLeft += 100;
  }
  const [showImg, setShowImg] = react.useState(true);
  function img() {
    setShowImg(!showImg);
  }
  return (
    <div>
      <Navbar />
      <div className="bg-blue-500 flex justify-end pt-10">
        <div>
          <img src={char} alt="" />
        </div>
      </div>
      {/* DATE CONTENT */}
      <div className="flex flex-col gap-10 justify-center items-center pt-[175px] pb-[50px]">
        <div className="gap-2 bg-red-200 h-8 w-40 flex justify-center items-center rounded-2xl text-red-500 font-semibold tracking-widest">
          <div className="h-px w-10 bg-red-500"></div>EVENT
        </div>
        <div className="text-3xl font-semibold">Events For You</div>
        <div className="flex gap-10 items-center">
          <div className="flex flex-col items-center">
            <div className="text-gray-700/50 font-semibold">13</div>
            <div className="text-gray-700/50 font-semibold">Wed</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-gray-700/50 font-semibold">14</div>
            <div className="text-gray-700/50 font-semibold">Wed</div>
          </div>
          <div className="flex flex-col items-center border border-orange-600 p-2 rounded-xl">
            <div className="text-gray-700/50 font-semibold">15</div>
            <div className="text-gray-700/50 font-semibold">Wed</div>
            <div className="w-1.5 h-1.5 bg-orange-600 rounded-xl"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-gray-700/50 font-semibold">16</div>
            <div className="text-gray-700/50 font-semibold">Wed</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-gray-700/50 font-semibold">17</div>
            <div className="text-gray-700/50 font-semibold">Wed</div>
          </div>
        </div>
      </div>
      {/* EVENT BOX LIST */}
      <div>
        <div
          id="event-img"
          className="pl-32 flex gap-6 overflow-x-scroll scrollbar-hide"
        >
          {data.map((item) => {
            return (
              <Link to="/event">
                <div
                  className="relative w-64 h-96 rounded-3xl overflow-hidden"
                  id={item.id}
                >
                  <img
                    src={item.img}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                  <div className="flex flex-col gap-3 w-full absolute bottom-0 text-white p-6 bg-gradient-to-t from-black">
                    <div>{item.date}</div>
                    <div className="font-semibold text-[22px] tracking-widest ">
                      {item.title}
                    </div>
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
                        <div className="absolute bg-orange-600/60 top-0 left-0 w-full h-full flex justify-center items-center text-[10px]">
                          62+
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex gap-[50px] pt-10 pb-[175px] justify-center">
          <button
            onClick={scrollL}
            type="button"
            className="shadow-sm shadow-slate-300 p-4 rounded-xl"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={scrollR}
            type="button"
            className="shadow-sm shadow-blue-500 bg-blue-500 p-4 rounded-xl"
          >
            <FaArrowRight className="text-white" />
          </button>
        </div>
      </div>
      {/* CITY LIST */}
      <div className="bg-blue-500 py-20 md:mx-6 md:w-[97%] flex flex-col items-center w-screen rounded-3xl">
        <div className="grid md:grid-cols-4 gap-5 p-10">
          <div className="pl-10 text-white flex flex-col gap-5">
            <div className="gap-2 bg-blue-400 h-8 w-40 flex justify-center items-center rounded-2xl font-semibold tracking-widest -mt-10">
              <div className="h-px w-10 bg-white"></div>LOCATION
            </div>
            <div className="font-semibold text-[36px] tracking-widest">
              Discover Events Near You
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="md:w-[230px] md:h-[140px] rounded-xl overflow-hidden cursor-pointer">
              <img src={jakarta_city} alt="" className="w-full h-full" />
            </div>
            <div className="text-white">Jakarta</div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="md:w-[230px] md:h-[140px] rounded-xl overflow-hidden cursor-pointer">
              <img src={bandung_city} alt="" className="w-full h-full" />
            </div>
            <div className="text-white">Bandung</div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="md:w-[230px] md:h-[140px] rounded-xl overflow-hidden cursor-pointer">
              <img src={bali_city} alt="" className="w-full h-full" />
            </div>
            <div className="text-white">Bali</div>
          </div>
          <div
            className={showImg ? "hidden" : "flex flex-col items-center gap-3"}
          >
            <div className="md:w-[230px] md:h-[140px] rounded-xl overflow-hidden cursor-pointer">
              <img src={aceh_city} alt="" className="w-full h-full" />
            </div>
            <div className="text-white">Aceh</div>
          </div>
          <div
            className={showImg ? "hidden" : "flex flex-col items-center gap-3"}
          >
            <div className="md:w-[230px] md:h-[140px] rounded-xl overflow-hidden cursor-pointer">
              <img src={solo_city} alt="" className="w-full h-full" />
            </div>
            <div className="text-white">Solo</div>
          </div>
          <div
            className={showImg ? "hidden" : "flex flex-col items-center gap-3"}
          >
            <div className="md:w-[230px] md:h-[140px] rounded-xl overflow-hidden cursor-pointer">
              <img src={yogyakarta_city} alt="" className="w-full h-full" />
            </div>
            <div className="text-white">Yogyakarta</div>
          </div>
          <div
            className={showImg ? "hidden" : "flex flex-col items-center gap-3"}
          >
            <div className="md:w-[230px] md:h-[140px] rounded-xl overflow-hidden cursor-pointer">
              <img src={semarang_city} alt="" className="w-full h-full" />
            </div>
            <div className="text-white">Semarang</div>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="bg-white w-[255px] h-[40px] rounded-xl text-blue-500 font-semibold"
            onClick={img}
          >
            See All
          </button>
        </div>
      </div>
      <div className="flex gap-14 flex-col justify-center items-center pt-[175px]">
        <div className="flex items-center gap-2 bg-red-200 h-8 w-40 flex justify-center items-center rounded-2xl text-red-500 font-semibold tracking-widest">
          <div className="h-px w-10 bg-red-500"></div>CATEGORY
        </div>
        <div className="text-3xl font-semibold">Browse Events By Category</div>
        <div>
          <ul className="flex gap-24 grid md:grid-cols-7 grid-cols-3">
            <li className="font-semibold text-gray-700/50 hover:text-blue-500 cursor-pointer">
              Music
            </li>
            <li className="font-semibold text-gray-700/50 hover:text-blue-500 cursor-pointer">
              Arts
            </li>
            <li className="font-semibold text-gray-700/50 hover:text-blue-500 cursor-pointer">
              Outdoors
            </li>
            <li className="font-semibold text-gray-700/50 hover:text-blue-500 cursor-pointer">
              Workshop
            </li>
            <li className="font-semibold text-gray-700/50 hover:text-blue-500 cursor-pointer">
              Sport
            </li>
            <li className="font-semibold text-gray-700/50 hover:text-blue-500 cursor-pointer">
              Festival
            </li>
            <li className="font-semibold text-gray-700/50 hover:text-blue-500 cursor-pointer">
              Fashion
            </li>
          </ul>
        </div>
      </div>
      <div className="flex md:mx-20 gap-10 items-center pt-10">
        <div>
          <button
            type="button"
            onClick={scrollLDown}
            className="shadow-sm shadow-slate-300 p-4 rounded-xl md:block hidden"
          >
            <FaArrowLeft />
          </button>
        </div>
        <div
          className="flex gap-10 items-center overflow-x-scroll scrollbar-hide"
          id="event-img-down"
        >
          {data.map((item) => {
            return (
              <div
                className="w-[300px] h-[350px] bg-blue-600 rounded-[40px] overflow-hidden flex-shrink-0 cursor-pointer"
                id={item.id}
              >
                <div className="h-3/5 relative">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute left-8 -bottom-3">
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
                <div className="p-8">
                  <div className="text-white text-[14px]">{item.date}</div>
                  <div className="text-white font-semibold text-[22px]">
                    {item.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <button
            type="button"
            onClick={scrollRDown}
            className="shadow-sm shadow-blue-500 bg-blue-500 p-4 rounded-xl md:block hidden"
          >
            <FaArrowRight className="text-white" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 pt-10 md:hidden">
        <div>
          <button
            type="button"
            onClick={scrollLDown}
            className="shadow-sm shadow-slate-300 p-4 rounded-xl"
          >
            <FaArrowLeft />
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={scrollRDown}
            className="shadow-sm shadow-blue-500 bg-blue-500 p-4 rounded-xl"
          >
            <FaArrowRight className="text-white" />
          </button>
        </div>
      </div>
      <div className="bg-gray-800 flex gap-10 flex-col justify-center items-center p-20 mt-[175px]">
        <div className="gap-2 bg-gray-600 h-8 w-40 flex justify-center items-center rounded-2xl text-white font-semibold tracking-widest">
          <div className="h-px w-10 bg-white"></div>PARTNER
        </div>
        <div className="text-white font-semibold text-[36px]">
          Our Trusted Partner
        </div>
        <div className="text-white">By companies like :</div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-16">
          <div className="w-[83px] h-[64px]">
            <img
              src={sponsor_icon_1}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-[83px] h-[64px]">
            <img
              src={sponsor_icon_2}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-[83px] h-[64px]">
            <img
              src={sponsor_icon_3}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-[83px] h-[64px]">
            <img
              src={sponsor_icon_4}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-[83px] h-[64px]">
            <img
              src={sponsor_icon_5}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-[83px] h-[64px]">
            <img
              src={sponsor_icon_6}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
