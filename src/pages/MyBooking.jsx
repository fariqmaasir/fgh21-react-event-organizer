import react from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { FaCalendar, FaSpinner } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function MyBooking() {
  const navigate = useNavigate();
  const [loading, setLoading] = react.useState(true);
  function formatTimestamp(timestamp) {
    const options = { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short', 
      hour: 'numeric', 
      minute: 'numeric', 
      hour12: true 
    };
  
    return new Date(timestamp).toLocaleString('en-US', options);
  }
  function formatTimestampToDay(timestamp) {
    const options = { 
      day: 'numeric'
      // month: 'short'
    };
  
    return new Date(timestamp).toLocaleString('en-US', options);
  }
  function formatTimestampToMonth(timestamp) {
    const options = { 
      // day: 'numeric', 
      month: 'short'
    };
  
    return new Date(timestamp).toLocaleString('en-US', options);
  }
  const token = useSelector((state) => state.auth.token);
  if (token === null) {
    navigate("/login");
  }
  const [booking, setBooking] = react.useState([{}, {}]);
  // const data = [
  //   {
  //     id: 1,
  //     title: "Sights & Sounds Exhibition",
  //     date: "Wed, 15 Nov, 4:00 PM",
  //     dates: "15",
  //     day: "Wed",
  //     location: "Jakarta,Indonesia",
  //   },
  //   {
  //     id: 2,
  //     title: "Jakarta Fair",
  //     date: "Wed, 22 Nov, 4:00 PM",
  //     dates: "22",
  //     day: "Wed",
  //     location: "Jakarta,Indonesia",
  //   },
  //   {
  //     id: 3,
  //     title: "Kdot",
  //     date: "Wed, 15 Nov, 4:00 PM",
  //     dates: "17",
  //     day: "Wed",
  //     location: "Jakarta,Indonesia",
  //   },
  //   {
  //     id: 4,
  //     title: "The Weeknd",
  //     date: "Wed, 15 Nov, 4:00 PM",
  //     dates: "18",
  //     day: "Wed",
  //     location: "Jakarta,Indonesia",
  //   },
  // ];
  react.useEffect(() => {
    (async function () {
      setLoading(false)
      const response = await fetch("http://localhost:8888/transactions/users", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setBooking(json.results);
      setLoading(true)
      console.log(json.results);
    })();
  }, []);
  let datas = true;
  function showData() {
    if (booking.length == 0) {
      datas = false;
    }
  }
  console.log("aku");
  showData();
  console.log(datas);
  return (
    <div className="md:bg-[#F4F7FF]">
      <Navbar />
      <div className="flex w-full md:pt-[70px]">
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
            {booking.map((item) => {
              return (
                <div className="flex gap-5 px-5">
                  <div className="shadow-md w-[50px] h-[75px] rounded-xl flex flex-col items-center justify-center">
                    <div className="text-[#FF8900] font-semibold">
                      {formatTimestampToDay(item.date)}
                    </div>
                    <div className="text-[#C1C5D0]">{formatTimestampToMonth(item.date)}</div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="font-semibold text-[24px] tracking-wider">
                      {item.eventTitle}
                    </div>
                    <div>
                      <div className="text-[#373A42BF]/75">{item.location}</div>
                      <div className="text-[#373A42BF]/75">{formatTimestamp(item.date)}</div>
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
      <div
        className={
          loading
            ? "hidden"
            : "top-0 bg-black/60 h-screen w-full fixed flex justify-center items-center"
        }
      >
        <div className="animate-spin">
          <FaSpinner className="text-7xl text-white"/>
        </div>
      </div>
      {/* <CreateEvent /> */}
    </div>
  );
}
export default MyBooking;
