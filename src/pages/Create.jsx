import react from "react";
import NavbarProfile from "../components/NavbarProfile";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import CreateEvent from "../components/CreateEvent";

function Create() {
  const [showEvent, setShowEvent] = react.useState(true);
  const data = [
    // {
    //   id: 1,
    //   title: "Sights & Sounds Exhibition",
    //   date: "Wed, 15 Nov, 4:00 PM",
    //   dates: "15",
    //   day: "Wed",
    //   location: "Jakarta,Indonesia",
    // },
    // {
    //   id: 2,
    //   title: "Jakarta Fair",
    //   date: "Wed, 22 Nov, 4:00 PM",
    //   dates: "22",
    //   day: "Wed",
    //   location: "Jakarta,Indonesia",
    // },
    // {
    //   id: 3,
    //   title: "Kdot",
    //   date: "Wed, 15 Nov, 4:00 PM",
    //   dates: "17",
    //   day: "Wed",
    //   location: "Jakarta,Indonesia",
    // },
    // {
    //   id: 4,
    //   title: "The Weeknd",
    //   date: "Wed, 15 Nov, 4:00 PM",
    //   dates: "18",
    //   day: "Wed",
    //   location: "Jakarta,Indonesia",
    // },
  ];
  function main() {
    setShowEvent(!showEvent);
    console.log(showEvent);
  }
  let datas = true;
  function showData() {
    if (data.length == 0) {
      datas = false;
    }
  }
  showData();
  return (
    <div className="md:bg-[#F4F7FF]">
      <NavbarProfile />
      <div className="flex w-screen w-full h-full md:pt-[70px]">
        <div className="md:block hidden">
          <Sidebar />
        </div>
        <div className="flex flex-col bg-white p-10 h-screen w-screen md:w-[70%] rounded-3xl gap-10">
          {/* TOP */}
          <div className="flex flex-col gap-12">
            <div className="flex md:flex-row gap-8 flex-col md:justify-between md:items-center px-5">
              <div className="font-semibold text-[20px]">Manage Event</div>
              <div className="w-[125px] h-[50px] bg-[#EAF1FF] flex items-center justify-center rounded-xl">
                <button
                  onClick={main}
                  className="text-blue-600 font-medium text-[12px]"
                >
                  Create
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
                <div className="flex justify-between px-5">
                  <div className="flex gap-5">
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
                        <div className="text-[#373A42BF]/75">
                          {item.location}
                        </div>
                        <div className="text-[#373A42BF]/75">{item.date}</div>
                      </div>
                      <div className="flex gap-3">
                        <div className="text-blue-500 font-medium cursor-pointer">
                          Detail
                        </div>
                        <div className="text-blue-500 font-medium cursor-pointer">
                          Update
                        </div>
                        <div className="text-blue-500 font-medium cursor-pointer">
                          Delete
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer className="bg-[#F4F7FF]" />
      <div className={showEvent ? "hidden" : ""}>
        <CreateEvent />
      </div>
    </div>
  );
}

export default Create;
