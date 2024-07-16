import react from "react";
import event_img_1 from "../assets/img/event-img-1.png";

function Homepage() {
  return (
    <div>
      {/* DATE CONTENT */}
      <div className="flex flex-col justify-center items-center ">
        <div className="flex items-center gap-2 bg-red-200 h-8 w-40 flex justify-center items-center rounded-2xl text-red-500 font-semibold">
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
      {/* CITY LIST */}
      <div>
        <div></div>
      </div>
    </div>
  );
}

export default Homepage;
