import react from "react";
import event_img_1 from "../assets/img/event-img-1.png";
import { FaMapPin, FaClock } from "react-icons/fa6";

function Event() {
  return (
    <div className="bg-[#F4F7FF] w-screen h-screen">
      <div className="bg-white w-80 flex">
        {/* LEFT */}
        <div className="">
          <div className="relative w-64 h-96 rounded-3xl overflow-hidden">
            <img
              src={event_img_1}
              alt=""
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 text-white">
              <div>Wed, 15 nov 14:00</div>
              <div>Sights & Sounds Exhibition</div>
              <div></div>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex flex-col">
          {/* TITLE */}
          <div>
            <div>Sights & Sounds Exhibition</div>
            <div className="flex gap-10">
              <div>
                <div>
                  <img src={FaMapPin} alt="" />
                  <div>Jakarta, Indonesia</div>
                </div>
              </div>
              <div>
                <img src={FaClock} alt="" />
                <div>Wed, 15 Nov, 4:00 PM</div>
              </div>
            </div>
          </div>
          {/* TITLE */}
          <div>
            <div>attendes</div>
            <div></div>
          </div>
          <hr />
          {/* EVENT DETAIL */}
          <div>
            <div>Event Detail</div>
            <div>
              After his controversial art exhibition "Tear and Consume" back in
              November 2018, in which guests were invited to tear up…
            </div>
            <div>Read More</div>
          </div>
          <div>
            <div>Location</div>
            <div></div>
            <div>
              <button>But Tickets</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
