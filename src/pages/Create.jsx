import react from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import CreateEvent from "../components/CreateEvent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Create() {
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

  react.useEffect(() => {
    // Fetch event data
    (async function () {
      const response = await fetch("http://localhost:8888/events/users", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const json = await response.json();
      setEvent(json.results);
      console.log(json.results);
    })();

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

  return (
    <div className="md:bg-[#F4F7FF]">
      <Navbar />
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
                        <div className="text-[#508D4E] font-medium cursor-pointer">
                          Detail
                        </div>
                        <div className="text-[#508D4E] font-medium cursor-pointer">
                          Update
                        </div>
                        <div className="text-[#508D4E] font-medium cursor-pointer">
                          Delete
                        </div>
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
      <div className={showEvent ? "hidden" : ""}>
        <CreateEvent />
      </div>
    </div>
  );
}

export default Create;
