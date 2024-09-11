import react from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import CreateEvent from "../components/CreateEvent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa6";
import DetailEvent from "../components/DetailEvent";
function Create() {
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
  const navigate = useNavigate();
  const [showEvent, setShowEvent] = react.useState(true);
  const token = useSelector((state) => state.auth.token);
  if (token === null) {
    navigate("/login");
  }
  const [event, setEvent] = react.useState([]);

  if (token === null) {
    navigate("/login");
  }
  async function dataEvent() {
    setLoading(false)
    const response = await fetch("http://localhost:8888/events/users", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const json = await response.json();
    setEvent(json.results);
    setLoading(true)
    console.log(json.results);
  }
  react.useEffect(() => {
    // Fetch event data
    dataEvent();
    // Toggle scroll lock
    if (!showEvent) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup function
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showEvent, token]);

  function main() {
    setShowEvent(!showEvent);
  }

  async function deleteEvent(id) {
    const response = await fetch (`http://localhost:8888/events/${id}`,{
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    dataEvent();
  }
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
            {event.length === 0 ? (
              <div className="flex flex-col items-center py-40">
                <div className="font-semibold text-[24px]">
                  No Events created
                </div>
                <div className="font-medium text-[#B3B8B8] w-[340px] text-center">
                  It appears you haven't created any events yet. Maybe try
                  create one?
                </div>
              </div>
            ) : (
              event.map((item) => (
                <div key={item.id} className="flex justify-between px-5">
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
                      <div className="flex gap-3">
                        <button className="text-[#508D4E] font-medium cursor-pointer">
                          Detail
                        </button>
                        <button className="text-[#508D4E] font-medium cursor-pointer">
                          Update
                        </button>
                        <button onClick={()=>deleteEvent(item.id)} className="text-[#508D4E] font-medium cursor-pointer">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer className="bg-[#F4F7FF]" />
        <CreateEvent />
        <DetailEvent/>
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

export default Create;
