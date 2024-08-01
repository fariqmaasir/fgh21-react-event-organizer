import react from "react";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CreateEvent from "../components/CreateEvent";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { reasignData } from "../redux/reducers/event";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import char from "../assets/img/login.png";
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
import { Link } from "react-router-dom";

function Homepage() {
  const eventList = useSelector((state) => state.event.eventList);
  const dispatch = useDispatch();
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
  const [showAll, setShowAll] = react.useState("See All");
  const [loading, setLoading] = react.useState(true);
  function img() {
    setShowImg(!showImg);
    if (showAll === "See All") {
      setShowAll("Hide");
    } else {
      setShowAll("See All");
    }
  }
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://wsw6zh-8888.csb.app/events");
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        dispatch(reasignData(json.results));
        setLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-[#508D4E] flex justify-end pt-10">
        <div className="w-[500px] h-[500px]">
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
          {loading ? <Skeleton /> : <EventList />}
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
            className="shadow-sm shadow-[#508D4E] bg-[#508d4e] p-4 rounded-xl"
          >
            <FaArrowRight className="text-white" />
          </button>
        </div>
      </div>
      {/* CITY LIST */}
      <div className="bg-[#508d4e] py-20 mx-5 flex flex-col items-center rounded-3xl">
        <div className="grid md:grid-cols-4 gap-5 p-10">
          <div className="pl-10 text-white flex flex-col gap-5">
            <div className="gap-2 bg-[#80AF81] h-8 w-40 flex justify-center items-center rounded-2xl font-semibold tracking-widest -mt-10">
              <div className="h-px w-10 bg-white"></div>LOCATION
            </div>
            <div className="font-semibold text-[36px] tracking-widest">
              Discover Events Near You
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-[230px] h-[140px] rounded-xl overflow-hidden cursor-pointer">
              <img src={jakarta_city} alt="" className="w-full h-full" />
            </div>
            <div className="text-white">Jakarta</div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-[230px] h-[140px] rounded-xl overflow-hidden cursor-pointer">
              <img src={bandung_city} alt="" className="w-full h-full" />
            </div>
            <div className="text-white">Bandung</div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-[230px] h-[140px] rounded-xl overflow-hidden cursor-pointer">
              <img src={bali_city} alt="" className="w-full h-full" />
            </div>
            <div className="text-white">Bali</div>
          </div>
          <div
            className={showImg ? "hidden" : "flex flex-col items-center gap-3"}
          >
            <div className="w-[230px] h-[140px] rounded-xl overflow-hidden cursor-pointer">
              <img src={aceh_city} alt="" className="w-full h-full" />
            </div>
            <div className="text-white">Aceh</div>
          </div>
          <div
            className={showImg ? "hidden" : "flex flex-col items-center gap-3"}
          >
            <div className="w-[230px] h-[140px] rounded-xl overflow-hidden cursor-pointer">
              <img src={solo_city} alt="" className="w-full h-full" />
            </div>
            <div className="text-white">Solo</div>
          </div>
          <div
            className={showImg ? "hidden" : "flex flex-col items-center gap-3"}
          >
            <div className="w-[230px] h-[140px] rounded-xl overflow-hidden cursor-pointer">
              <img src={yogyakarta_city} alt="" className="w-full h-full" />
            </div>
            <div className="text-white">Yogyakarta</div>
          </div>
          <div
            className={showImg ? "hidden" : "flex flex-col items-center gap-3"}
          >
            <div className="w-[230px] h-[140px] rounded-xl overflow-hidden cursor-pointer">
              <img src={semarang_city} alt="" className="w-full h-full" />
            </div>
            <div className="text-white">Semarang</div>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="bg-white w-[255px] h-[40px] rounded-xl text-[#508D4E] font-semibold"
            onClick={img}
          >
            {showAll}
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
            <li className="font-semibold text-gray-700/50 hover:text-[#508D4E] cursor-pointer">
              Music
            </li>
            <li className="font-semibold text-gray-700/50 hover:text-[#508D4E] cursor-pointer">
              Arts
            </li>
            <li className="font-semibold text-gray-700/50 hover:text-[#508D4E] cursor-pointer">
              Outdoors
            </li>
            <li className="font-semibold text-gray-700/50 hover:text-[#508D4E] cursor-pointer">
              Workshop
            </li>
            <li className="font-semibold text-gray-700/50 hover:text-[#508D4E] cursor-pointer">
              Sport
            </li>
            <li className="font-semibold text-gray-700/50 hover:text-[#508D4E] cursor-pointer">
              Festival
            </li>
            <li className="font-semibold text-gray-700/50 hover:text-[#508D4E] cursor-pointer">
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
          {loading ? <SkeletonCategory /> : <EventListCategory />}
        </div>
        <div>
          <button
            type="button"
            onClick={scrollRDown}
            className="shadow-sm shadow-[#508D4E] bg-[#508D4E] p-4 rounded-xl md:block hidden"
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
            className="shadow-sm shadow-[#508D4E] bg-[#508D4E] p-4 rounded-xl"
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
function Skeleton() {
  const eventList = [{}, {}, {}, {}, {}];
  return eventList.map(() => (
    <div>
      <Link to="/event">
        <div
          className="animate-pulse relative w-64 h-96 rounded-3xl overflow-hidden bg-slate-200"
          // id={item.title}
        >
          <div className="flex flex-col gap-3 w-full absolute bottom-0 p-6 bg-gradient-to-t from-black">
            <div className="flex h-3 bg-slate-200 rounded"></div>
            <div className="flex h-5 bg-slate-200 rounded"></div>
            <div className="flex h-5 bg-slate-200 rounded"></div>
            <div className="flex">
              <div className="w-[30px] h-[30px] border border-white rounded-full overflow-hidden bg-slate-200"></div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ));
}

function EventList() {
  const eventList = useSelector((state) => state.event.eventList);
  return eventList.map((item, index) => {
    const img = eventList[index].attendees;
    return (
      <div>
        <Link to="/event">
          <div
            className="relative w-64 h-96 rounded-3xl overflow-hidden"
            id={item.title}
          >
            <img
              src={"https://wsw6zh-8888.csb.app/" + item.picture}
              alt={item.title}
              className="object-cover w-full h-full"
            />
            <div className="flex flex-col gap-3 w-full absolute bottom-0 text-white p-6 bg-gradient-to-t from-black">
              <div>{new Date(item.time).toLocaleDateString("en-CA")}</div>
              <div className="font-semibold text-[22px] tracking-widest ">
                {item.title}
              </div>
              <div className="flex">
                {img.map((img) => (
                  <div className="w-[30px] h-[30px] border border-white rounded-full overflow-hidden">
                    <img
                      src={"https://wsw6zh-8888.csb.app" + img.picture}
                      alt={img.id}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
}

function SkeletonCategory() {
  const eventList = [{}, {}, {}, {}, {}];

  return eventList.map(() => {
    return (
      <div className="animate-pulse w-[300px] h-[350px] bg-[#508D4E] rounded-[40px] overflow-hidden flex-shrink-0 cursor-pointer">
        <div className="h-3/5 relative bg-slate-200">
          <div className="absolute left-8 -bottom-3">
            <div className="flex">
              <div className="w-[30px] h-[30px] border border-white rounded-full overflow-hidden bg-slate-300"></div>
            </div>
          </div>
        </div>
        <div className="p-8 flex flex-col gap-2">
          <div className="flex h-3 bg-slate-200 rounded"></div>
          <div className="flex h-5 bg-slate-200 rounded"></div>
          <div className="flex h-5 bg-slate-200 rounded"></div>
        </div>
      </div>
    );
  });
}

function EventListCategory() {
  const eventList = useSelector((state) => state.event.eventList);
  return eventList.map((item) => {
    return (
      <div
        className="w-[300px] h-[350px] bg-[#508D4E] rounded-[40px] overflow-hidden flex-shrink-0 cursor-pointer"
        id={item.id}
      >
        <div className="h-3/5 relative">
          <img
            src={"https://wsw6zh-8888.csb.app/" + item.picture}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute left-8 -bottom-3">
            <div className="flex">
              {item.attendees.map((img) => (
                <div className="w-[30px] h-[30px] border border-white rounded-full overflow-hidden">
                  <img
                    src={"https://wsw6zh-8888.csb.app" + img.picture}
                    alt={img.id}
                  />
                </div>
              ))}
              {/* <div className="w-[30px] h-[30px] border border-white rounded-full overflow-hidden">
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
              </div> */}
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="text-white text-[14px]">
            {new Date(item.time).toLocaleDateString("en-CA")}
          </div>
          <div className="text-white font-semibold text-[22px]">
            {item.title}
          </div>
        </div>
      </div>
    );
  });
}
export default Homepage;
