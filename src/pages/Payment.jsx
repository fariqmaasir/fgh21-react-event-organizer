import react from "react";
import NavbarProfile from "../components/NavbarProfile";
import Footer from "../components/Footer";
import bank from "../assets/icon/bank.png";
import card from "../assets/icon/card.png";
import atm_card from "../assets/icon/atm.png";
import emoney from "../assets/icon/e-money.png";
import retail from "../assets/icon/retail.png";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  function myBook() {
    navigate("/my-booking");
  }
  return (
    <div className="flex flex-col md:bg-[#F4F7FF]">
      <NavbarProfile />
      <div className="flex flex-col items-center w-screen h-full md:pt-[70px]">
        <div className="flex bg-white p-20 md:w-[94%] rounded-3xl gap-10">
          {/* LEFT */}
          <div className="md:flex flex-col basis-1/2 font-semibold hidden">
            <div className="pb-10 text-[20px]">Payment Method</div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-[15px]">
                <input type="radio" name="payment" id="card" />
                <img src={card} alt="" />
                <label htmlFor="card">Card</label>
              </div>
              <div className="pl-6 flex items-center">
                <div>
                  <img src={atm_card} alt="" />
                </div>
                <div className="flex justify-center items-center border-dashed border-2 border-indigo-600 w-11 h-11 ml-5 rounded-xl">
                  <FaPlus className="text-indigo-600" />
                </div>
              </div>
              <div className="flex items-center gap-[15px]">
                <input type="radio" name="payment" id="bank" />
                <img src={bank} alt="" />
                <label htmlFor="bank">Bank Transfer</label>
              </div>
              <div className="flex items-center gap-[15px]">
                <input type="radio" name="payment" id="retail" />
                <img src={retail} alt="retail" />
                <label htmlFor="">Retail</label>
              </div>
              <div className="flex items-center gap-[15px]">
                <input type="radio" name="payment" id="emoney" />
                <img src={emoney} alt="emoney" />
                <label htmlFor="">E-Money</label>
              </div>
            </div>
          </div>
          <div className="md:block hidden w-px h-96 bg-black"></div>
          {/* RIGHT */}
          <div className="flex flex-col gap-5 font-semibold">
            <div className="block md:hidden">
              <div className="pb-10 text-[20px]">Payment Method</div>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-[15px]">
                  <input type="radio" name="payment" id="card" />
                  <img src={card} alt="" />
                  <label htmlFor="card">Card</label>
                </div>
                <div className="pl-6 flex items-center">
                  <div>
                    <img src={atm_card} alt="" />
                  </div>
                  <div className="flex justify-center items-center border-dashed border-2 border-indigo-600 w-11 h-11 ml-5 rounded-xl">
                    <FaPlus className="text-indigo-600" />
                  </div>
                </div>
                <div className="flex items-center gap-[15px]">
                  <input type="radio" name="payment" id="bank" />
                  <img src={bank} alt="" />
                  <label htmlFor="bank">Bank Transfer</label>
                </div>
                <div className="flex items-center gap-[15px]">
                  <input type="radio" name="payment" id="retail" />
                  <img src={retail} alt="retail" />
                  <label htmlFor="">Retail</label>
                </div>
                <div className="flex items-center gap-[15px]">
                  <input type="radio" name="payment" id="emoney" />
                  <img src={emoney} alt="emoney" />
                  <label htmlFor="">E-Money</label>
                </div>
              </div>
            </div>
            <div>
              <div className="text-[20px]">Ticket Detail</div>
              <div className="pt-[25px]">
                <div className="flex flex-col gap-4 ">
                  <div className="flex justify-between">
                    <div className="font-semibold">Event</div>
                    <div className="text-blue-500 font-semibold">
                      Sights & Sounds Exhibition
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="font-semibold">Ticket Section</div>
                    <div className="text-blue-500 font-semibold">VIP</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="font-semibold">Quantity</div>
                    <div className="text-blue-500 font-semibold">2</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="font-semibold">Total Payment</div>
                    <div className="text-blue-500 font-semibold">$70</div>
                  </div>
                </div>
                <div className="pt-[50px]" onClick={myBook}>
                  <button className="w-full md:w-80 bg-blue-500 text-white h-10 rounded-xl shadow-sm shadow-blue-500">
                    Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
