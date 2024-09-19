import react from "react";
import { FaHeart, FaSpinner } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import CreateEvent from "../components/CreateEvent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function MyWishlist() {
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
  const [showEvent, setShowEvent] = react.useState(true);
  const token = useSelector((state) => state.auth.token);
  if (token === null) {
    navigate("/login");
  }
  const [event, setEvent] = react.useState([{}]);
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
  async function getWishlist() {
    try {
      setLoading(false)
      const response = await fetch(
        "http://103.93.58.89:21217/events/wishlist/user",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
      setEvent(json.results);
      setLoading(true)
    } catch (error) {
      console.error(error.message);
    }
  }
  react.useEffect(() => {
    getWishlist();
  }, []);
  // function main() {
  //   setShowEvent(!showEvent);
  //   console.log(showEvent);
  // }

  async function deleteWishlist(id) {
    setLoading(false)
    const response = await fetch(
      "http://103.93.58.89:21217/events/wishlist/" + id,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      getWishlist();
      setLoading(true)
    }
  }

  let datas = true;
  function showData() {
    if (event.length == 0) {
      datas = false;
    }
  }
  showData();
  return (
    <div className="md:bg-[#F4F7FF]">
      <Navbar />
      <div className="flex w-full h-full md:pt-[70px]">
        <div className="md:block hidden">
          <Sidebar />
        </div>
        <div className="flex flex-col bg-white p-10 h-screen w-screen md:w-[70%] rounded-3xl gap-10">
          {/* TOP */}
          <div className="flex flex-col gap-12">
            <div className="flex justify-between items-center px-5">
              <div className="font-semibold text-[20px]">My Wishlist</div>
              {/* <div className="min-w-[125px] h-[50px] bg-[#EAF1FF] flex items-center justify-center rounded-xl">
                <button
                  onClick={main}
                  className="text-blue-600 font-medium text-[12px]"
                >
                  Create
                </button>
              </div> */}
            </div>
          </div>
          {/* BOTTOM */}
          <div className="flex flex-col gap-10 overflow-y-scroll scrollbar-hide">
            <div className={datas ? "hidden" : ""}>
              <div className="flex flex-col items-center py-40">
                <div className="font-semibold text-[24px]">
                  No wishlist selected
                </div>
                <div className="font-medium text-[#B3B8B8] w-[340px] text-center">
                  It looks like you haven't selected your wishlist yet. Maybe
                  try looking this up?
                </div>
              </div>
            </div>
            {event.map((item) => {
              return (
                <div className="flex justify-between px-5">
                  <div className="flex gap-5">
                    <div className="shadow-md w-[50px] h-[75px] rounded-xl flex flex-col items-center justify-center">
                      <div className="text-[#FF8900] font-semibold">
                        {formatTimestampToDay(item.date)}
                      </div>
                      <div className="text-[#C1C5D0]">{formatTimestampToMonth(item.date)}</div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="font-semibold text-[24px] tracking-wider">
                        {item.title}
                      </div>
                      <div>
                        <div className="text-[#373A42BF]/75">
                          {item.location}
                        </div>
                        <div className="text-[#373A42BF]/75">{formatTimestamp(item.date)}</div>
                      </div>
                    </div>
                  </div>
                  <button type="button" onClick={() => deleteWishlist(item.id)}>
                    <FaHeart className="text-3xl text-[#508D4E] hover:text-[#8ced89]" />
                  </button>
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
    </div>
  );
}

export default MyWishlist;
