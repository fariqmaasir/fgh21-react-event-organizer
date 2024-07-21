import react from "react";
import { FaX } from "react-icons/fa6";

function CreateEvent() {
  const [showEvent, setShowEvent] = react.useState(false);
  function main() {
    setShowEvent(!showEvent);
    console.log(showEvent);
  }
  return (
    <div className={showEvent ? "hidden" : ""}>
      <div className="absolute top-0 left-0 bg-black/50 w-full h-screen flex justify-center items-center">
        <form className="bg-white w-[1105px] flex flex-col gap-5 p-[30px] rounded-3xl">
          <div className="flex items-center justify-between">
            <div className="font-semibold text-[20px]">Create Event</div>
            <button type="button" onClick={main}>
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
                    placeholder="Input Name Event ..."
                    className="items-center w-[482px] pl-4"
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
                    placeholder="Select Location"
                    className="items-center w-[482px] pl-4"
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
                    placeholder="Input Price ..."
                    className="items-center w-[482px] pl-4"
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
                    placeholder="Select Category"
                    className="items-center w-[482px] pl-4"
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
                    placeholder="01/01/2022"
                    className="items-center w-[482px] pl-4"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="img">Image</label>
                <div className="flex border border-[#C1C5D0]  overflow-hidden w-[482px] rounded-xl h-10">
                  <input
                    id="img"
                    name="img"
                    type="text"
                    placeholder="Choose File ..."
                    className="items-center w-[482px] pl-4"
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
                placeholder="Input Detail ..."
                className="items-center w-full pl-4"
              />
            </div>
          </div>
          <div className="right-0">
            <button
              type="submit"
              className="w-80 bg-blue-500 font-semibold text-white h-[60px] rounded-xl shadow-sm shadow-blue-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
