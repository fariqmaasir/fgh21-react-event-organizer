import react from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { FaCalendar } from "react-icons/fa6";

function MyBooking() {
  const data = [
    {
      id: 1,
      title: "Sights & Sounds Exhibition",
      date: "Wed, 15 Nov, 4:00 PM",
      dates: "15",
      day: "Wed",
      location: "Jakarta,Indonesia",
    },
    {
      id: 2,
      title: "Jakarta Fair",
      date: "Wed, 22 Nov, 4:00 PM",
      dates: "22",
      day: "Wed",
      location: "Jakarta,Indonesia",
    },
    {
      id: 3,
      title: "Kdot",
      date: "Wed, 15 Nov, 4:00 PM",
      dates: "17",
      day: "Wed",
      location: "Jakarta,Indonesia",
    },
    {
      id: 4,
      title: "The Weeknd",
      date: "Wed, 15 Nov, 4:00 PM",
      dates: "18",
      day: "Wed",
      location: "Jakarta,Indonesia",
    },
  ];
  let datas = true;
  function showData() {
    if (data.length == 0) {
      datas = false;
    }
  }
  console.log("aku");
  showData();
  console.log(datas);
  return (
    <div className="md:bg-[#F4F7FF]">
      <Navbar />
      <div className="flex w-screen w-full md:pt-[70px]">
        <div className="md:block hidden">
          <Sidebar />
        </div>
        <div className="flex flex-col bg-white p-10 h-screen w-screen md:w-[70%] rounded-3xl gap-10">
          {/* TOP */}
          <div className="flex flex-col gap-12">
            <div className="flex md:flex-row gap-3 flex-col justify-between md:items-center md:px-5">
              <div className="font-semibold text-[20px]">My Booking</div>
              <div className="w-[125px] h-[50px] bg-[#EAF1FF] flex items-center justify-center rounded-xl">
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
          <div className="flex flex-col gap-10 overflow-y-scroll scrollbar-hide">
            <div className={datas ? "hidden" : ""}>
              <div className="flex flex-col items-center py-40">
                <div className="font-semibold text-[24px]">
                  No tickets bought
                </div>
                <div className="font-medium text-[#B3B8B8] w-[340px] text-center">
                  It appears you haven't bought any tickets yet. Maybe try
                  searching these?
                </div>
              </div>
            </div>
            {data.map((item) => {
              return (
                <div className="flex gap-5 px-5">
                  <div className="shadow-md w-[50px] h-[75px] rounded-xl flex flex-col items-center justify-center">
                    <div className="text-[#FF8900] font-semibold">
                      {item.dates}
                    </div>
                    <div className="text-[#C1C5D0]">{item.day}</div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="font-semibold text-[24px] tracking-wider">
                      {item.title}
                    </div>
                    <div>
                      <div className="text-[#373A42BF]/75">{item.location}</div>
                      <div className="text-[#373A42BF]/75">{item.date}</div>
                    </div>
                    <div className="text-[#508D4E] font-medium cursor-pointer">
                      Detail
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="flex gap-5 px-5">
              <div className="shadow-md w-[50px] h-[75px] rounded-xl flex flex-col items-center justify-center">
                <div className="text-[#FF8900] font-semibold">15</div>
                <div className="text-[#C1C5D0]">Wed</div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="font-semibold text-[24px] tracking-wider">
                  Sights & Sounds Exhibition
                </div>
                <div>
                  <div className="text-[#373A42BF]/75">Jakarta, Indonesia</div>
                  <div className="text-[#373A42BF]/75">
                    Wed, 15 Nov, 4:00 PM
                  </div>
                </div>
                <div className="text-[#508D4E] font-medium">Detail</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer className="bg-[#F4F7FF]" />
      {/* <CreateEvent /> */}
    </div>
  );
}
export default MyBooking;
