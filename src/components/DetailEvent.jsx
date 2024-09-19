import react from "react";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function DetailEvent({ id, show, onClose }) {
  const token = useSelector((state) => state.auth.token);
  const [event, setEvent] = react.useState([]);

  async function dataEvent() {
    const response = await fetch(`http://103.93.58.89:21217/events/list/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const json = await response.json();
    setEvent(json.results);
    console.log(json.results);
  }

  react.useEffect(() => {
    if (show) {
      dataEvent();
    }
  }, [show]);

  if (!show) return null;
  return (
      <div className="fixed top-0 left-0 bg-black/50 w-full h-screen flex justify-center items-center">
        <div
          className="bg-white w-[1105px] flex flex-col gap-5 p-[30px] rounded-3xl"
        // onSubmit={createEvent}
        >
          <div className="flex items-center justify-between">
            <div className="font-semibold text-[20px]">Detail Event</div>
            <button type="button" onClick={onClose}>
              <FaX className="text-xl" />
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <div className="flex border border-[#C1C5D0]  overflow-hidden w-[482px] rounded-xl h-10">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    defaultValue={event.title}
                    // placeholder="Input Name Event ..."
                    className="items-center w-[482px] pl-4 outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="location">Location</label>
                <div className="flex border border-[#C1C5D0]  overflow-hidden w-[482px] rounded-xl h-10">
                  <input
                    id="location"
                    name="location"
                    type="text"
                    // placeholder="Select Location"
                    className="items-center w-[482px] pl-4 outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="price">Price</label>
                <div className="flex border border-[#C1C5D0]  overflow-hidden w-[482px] rounded-xl h-10">
                  <input
                    id="price"
                    name="price"
                    type="text"
                    // placeholder="Input Price ..."
                    className="items-center w-[482px] pl-4 outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="category">Category</label>
                <div className="flex border border-[#C1C5D0]  overflow-hidden w-[482px] rounded-xl h-10">
                  <input
                    id="category"
                    name="category"
                    type="text"
                    // placeholder="Select Category"
                    className="items-center w-[482px] pl-4 outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="date">Date Time Show</label>
                <div className="flex border border-[#C1C5D0]  overflow-hidden w-[482px] rounded-xl h-10">
                  <input
                    id="date"
                    name="date"
                    type="text"
                    // placeholder="01/01/2022"
                    className="items-center w-[482px] pl-4 outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="img">Image</label>
                <div className="flex border border-[#C1C5D0]  overflow-hidden w-[482px] rounded-xl h-10">
                  <input
                    id="img"
                    name="img"
                    type="type"
                    // placeholder="Choose File ..."
                    className="items-center w-[482px] pl-4 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="detail">Detail</label>
            <div className="flex border border-[#C1C5D0]  overflow-hidden w-full rounded-xl h-[95px] pb-10">
              <input
                id="detail"
                name="detail"
                type="text"
                defaultValue={event.descriptions}
                // placeholder="Input Detail ..."
                className="items-center w-full pl-4 outline-none"
              />
            </div>
          </div>
          <div className="right-0">
          </div>
        </div>
      </div>
  );
}

export default DetailEvent;
