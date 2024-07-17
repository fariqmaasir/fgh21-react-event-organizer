import react from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CreateEvent from "../components/CreateEvent";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import char from "../assets/img/login.png";
import event_img_1 from "../assets/img/event-img-1.png";
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
  return (
    <div>
      <Navbar />
      <div className="bg-blue-500">
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
            <div>13</div>
            <div>Wed</div>
          </div>
          <div className="flex flex-col items-center">
            <div>14</div>
            <div>Wed</div>
          </div>
          <div className="flex flex-col items-center border border-orange-600 p-2 rounded-xl">
            <div>15</div>
            <div>Wed</div>
            <div className="w-2 h-2 bg-orange-600 rounded-xl"></div>
          </div>
          <div className="flex flex-col items-center">
            <div>16</div>
            <div>Wed</div>
          </div>
          <div className="flex flex-col items-center">
            <div>17</div>
            <div>Wed</div>
          </div>
        </div>
      </div>
      {/* EVENT BOX LIST */}
      <div>
        <Link to="/event">
          <div className="relative w-64 h-96 rounded-3xl overflow-hidden">
            <img
              src={event_img_1}
              alt=""
              className="object-cover w-full h-full"
            />
            <div className="flex flex-col gap-5 absolute bottom-0 left-0 text-white p-5 pb-10">
              <div>Wed, 15 Nov, 4:00 PM</div>
              <div className="font-semibold text-[22px] tracking-widest">
                Sights & Sounds Exhibition
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
                <div className="w-[30px] h-[30px] border border-white rounded-full overflow-hidden ml-[-10px]">
                  <img src={avatar_4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex gap-[50px] pt-10 pb-[175px] justify-center">
          <button
            type="button"
            className="shadow-sm shadow-slate-300 p-4 rounded-xl"
          >
            <FaArrowLeft />
          </button>
          <button
            type="button"
            className="shadow-sm shadow-blue-500 bg-blue-500 p-4 rounded-xl"
          >
            <FaArrowRight className="text-white" />
          </button>
        </div>
      </div>
      {/* CITY LIST */}
      <div className="bg-blue-500 py-20 mx-5 w-[97%] flex flex-col items-center w-screen rounded-3xl">
        <div className="grid grid-cols-4 gap-5 p-10">
          <div className="pl-10 text-white">
            <div className="gap-2 bg-blue-400 h-8 w-40 flex justify-center items-center rounded-2xl font-semibold tracking-widest -mt-10 mt-10">
              <div className="h-px w-10 bg-white"></div>LOCATION
            </div>
            <div className="font-semibold text-[36px]  tracking-widest">
              Discover Events Near You
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[230px] h-[140px] rounded-xl overflow-hidden">
              <img src={jakarta_city} alt="" className="w-full h-full" />
            </div>
            <div className="text-white">Jakarta</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[230px] h-[140px] rounded-xl overflow-hidden">
              <img src={bandung_city} alt="" className="w-full h-full" />
            </div>
            <div className="text-white">Bandung</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[230px] h-[140px] rounded-xl overflow-hidden">
              <img src={bali_city} alt="" className="w-full h-full" />
            </div>
            <div className="text-white">Bali</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[230px] h-[140px] rounded-xl overflow-hidden">
              <img src={aceh_city} alt="" className="w-full h-full" />
            </div>
            <div className="text-white">Aceh</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[230px] h-[140px] rounded-xl overflow-hidden">
              <img src={solo_city} alt="" className="w-full h-full" />
            </div>
            <div className="text-white">Solo</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[230px] h-[140px] rounded-xl overflow-hidden">
              <img src={yogyakarta_city} alt="" className="w-full h-full" />
            </div>
            <div className="text-white">Yogyakarta</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[230px] h-[140px] rounded-xl overflow-hidden">
              <img src={semarang_city} alt="" className="w-full h-full" />
            </div>
            <div className="text-white">Semarang</div>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="bg-white w-[255px] h-[40px] rounded-xl text-blue-500 font-semibold"
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
          <ul className="flex gap-24">
            <li>Music</li>
            <li>Arts</li>
            <li>Outdoors</li>
            <li>Workshop</li>
            <li>Sport</li>
            <li>Festival</li>
            <li>Fashion</li>
          </ul>
        </div>
        <div>
          <div className="w-[300px] h-[350px] bg-blue-600 rounded-[40px] overflow-hidden">
            <img
              src={event_img_1}
              alt=""
              className="h-3/5 w-full object-cover"
            />
            <div>
              <div className="text-white">Wed, 15 Nov, 4:00 PM</div>
              <div className="text-white">Sights & Sounds Exhibition</div>
            </div>
          </div>
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
        <div className="flex gap-16">
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
