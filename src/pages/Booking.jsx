import react from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Booking() {
  return (
    <div className="bg-[#F4F7FF] ">
      <Navbar />
      <div className="flex flex-col items-center w-screen h-full pt-[70px]">
        <div className="flex bg-white p-20 w-[94%] rounded-3xl gap-10">
          {/* LEFT */}
          <div className="flex basis-3/6">
            <div className="w-[450px] h-[450px]">
              <img
                src={stadium_img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* RIGHT */}
          <div>
            <div className="flex flex-col gap-4 py-[25px]">
              <div className="flex gap-12">
                <div className="flex gap-4">
                  <div className="w-[45px] h-[45px]">
                    <img src={ticket_1} alt="" />
                  </div>
                  <div>
                    <div className="font-semibold">SECTION REG,ROW 1</div>
                    <div className="text-gray-500">12 Seats avaliable</div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-semibold">$15</div>
                  <div className="text-gray-500">per person</div>
                </div>
              </div>
              <div className="flex items-center pl-16 justify-between">
                <div className="font-semibold">Quantity</div>
                <div className="flex items-center gap-3">
                  <button className="border border-gray-500 w-[30px] h-[30px] rounded-lg">
                    -
                  </button>
                  <div className="font-semibold">0</div>
                  <button className="border border-gray-500 w-[30px] h-[30px] rounded-lg">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-[25px]">
              <div className="flex gap-12">
                <div className="flex gap-4">
                  <div className="w-[45px] h-[45px]">
                    <img src={ticket_2} alt="" />
                  </div>
                  <div>
                    <div className="font-semibold">SECTION VIP,ROW 2</div>
                    <div className="text-gray-500">9 Seats avaliable</div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-semibold">$35</div>
                  <div className="text-gray-500">per person</div>
                </div>
              </div>
              <div className="flex items-center pl-16 justify-between">
                <div className="font-semibold">Quantity</div>
                <div className="flex items-center gap-3">
                  <button className="border border-gray-500 w-[30px] h-[30px] rounded-lg">
                    -
                  </button>
                  <div className="font-semibold">0</div>
                  <button className="border border-gray-500 w-[30px] h-[30px] rounded-lg">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-[25px]">
              <div className="flex gap-12">
                <div className="flex gap-4">
                  <div className="w-[45px] h-[45px]">
                    <img src={ticket_3} alt="" />
                  </div>
                  <div>
                    <div className="font-semibold">SECTION VVIP,ROW 1</div>
                    <div className="text-gray-500">6 Seats avaliable</div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-semibold">$50</div>
                  <div className="text-gray-500">per person</div>
                </div>
              </div>
              <div className="flex items-center pl-16 justify-between">
                <div className="font-semibold">Quantity</div>
                <div className="flex items-center gap-3">
                  <button className="border border-gray-500 w-[30px] h-[30px] rounded-lg">
                    -
                  </button>
                  <div className="font-semibold">0</div>
                  <button className="border border-gray-500 w-[30px] h-[30px] rounded-lg">
                    +
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="pt-[25px] font-semibold">
              <div className="flex flex-col gap-4 ">
                <div className="flex justify-between">
                  <div>Ticket Section</div>
                  <div className="text-blue-500">VIP</div>
                </div>
                <div className="flex justify-between">
                  <div>Quantity</div>
                  <div className="text-blue-500">2</div>
                </div>
                <div className="flex justify-between">
                  <div>Total Payment</div>
                  <div className="text-blue-500">$70</div>
                </div>
              </div>
              <Link to="/payment" className="pt-[50px]">
                <button className="w-80 bg-blue-500 text-white h-10 rounded-xl shadow-sm shadow-blue-500">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Booking;
