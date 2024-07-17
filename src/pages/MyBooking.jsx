import react from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { FaCalendar } from "react-icons/fa6";

function MyBooking() {
  return (
    <div className="bg-[#F4F7FF]">
      <Navbar />
      <div className="flex w-screen w-full h-full pt-[70px]">
        <Sidebar />
        <div className="flex flex-col bg-white p-10 h-screen w-[70%] rounded-3xl gap-10">
          {/* TOP */}
          <div className="basis-1/6 flex flex-col gap-12">
            <div className="flex justify-between items-center px-5">
              <div className="font-semibold">My Booking</div>
              <div className="min-w-[125px] h-[50px] bg-[#EAF1FF] flex items-center justify-center rounded-xl">
                <button
                  onClick=""
                  className="text-blue-600 font-medium text-[12px]"
                >
                  <div className="flex items-center gap-2">
                    <FaCalendar />
                    March
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div className="flex flex-col gap-8 basis-5/6 items-center pt-[75px]">
            <div className="font-semibold text-[24px]">No tickets bought</div>
            <div className="font-medium text-[#B3B8B8] w-[340px] text-center">
              It appears you haven't bought any tickets yet. Maybe try searching
              these?
            </div>
          </div>
        </div>
      </div>
      <Footer className="bg-[#F4F7FF]" />
      {/* <CreateEvent /> */}
    </div>
  );
}
export default MyBooking;
