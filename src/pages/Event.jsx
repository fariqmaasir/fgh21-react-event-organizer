import react from "react";
import event_img_1 from "../assets/img/event-img-1.png";
import map_img from "../assets/img/map.png";
import { FaMapPin, FaClock, FaHeart } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Event() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center w-screen bg-[#F4F7FF] w-full h-full p-[50px]">
        <div className="flex bg-white p-20 w-4/5 rounded-3xl gap-10">
          {/* LEFT */}
          <div className="basis-3/5 flex flex-col gap-12 items-center">
            <div className="relative w-[375px] h-[486px] rounded-3xl overflow-hidden">
              <img
                src={event_img_1}
                alt=""
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 text-white"></div>
            </div>
            <div className="flex items-center text-xl gap-3">
              <div>
                <FaHeart />
              </div>
              <div>Add to Wishlist</div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="flex flex-col gap-8">
            {/* TITLE */}
            <div className="flex flex-col gap-8">
              <div className="text-[24px] font-semibold w-48">
                Sights & Sounds Exhibition
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
            </div>
            {/* TITLE */}
            <div>
              <div>Attendes</div>
              <div></div>
            </div>
            <hr />
            {/* EVENT DETAIL */}
            <div className="flex flex-col gap-5">
              <div className="font-semibold text-[25px]">Event Detail</div>
              <div className="text-gray-400">
                After his controversial art exhibition "Tear and Consume" back
                in November 2018, in which guests were invited to tear up…
              </div>
              <div className="text-blue-600">Read More</div>
            </div>
            <div className="flex flex-col gap-5">
              <div>Location</div>
              <div>
                <img src={map_img} alt="" />
              </div>
              <div>
                <button className="w-80 bg-blue-500 text-white h-10 rounded-xl shadow-sm shadow-blue-500">
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
