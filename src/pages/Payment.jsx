import react from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bank from "../assets/icon/bank.png";
import card from "../assets/icon/card.png";
import atm_card from "../assets/icon/atm.png";
import emoney from "../assets/icon/e-money.png";
import retail from "../assets/icon/retail.png";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addTotalPayment, resetAll } from "../redux/reducers/transaction";

function Payment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  if (token === null) {
    navigate("/login");
  }

  const eventTitle = useSelector((state) => state.transaction.eventTitle);
  console.log(eventTitle)
  const qty = useSelector((state) => state.transaction.qty);
  const eventId = useSelector((state) => state.transaction.eventId);
  const totalPayment = useSelector((state) => state.transaction.totalPayment);
  const ticketSection = useSelector((state) => state.transaction.ticketSection);
  const sectionId = useSelector((state) => state.transaction.sectionId);
  const quan = useSelector((state) => state.transaction.quantity);
  const [payMethod, setPayMethod] = react.useState(0);
  console.log(qty)
  console.log(eventId)
  console.log(totalPayment)
  console.log(ticketSection)
  console.log(sectionId)
  console.log(quan)
  react.useEffect(()=>{
    if (qty === 0 || eventId === 0 || totalPayment === 0 || ticketSection == [] || sectionId == [] || quan == []) {
      navigate("/my-booking")
    }
  },[])
  function tooglePayment(event) {
    setPayMethod(event.target.value);
  }

  const id = Math.ceil(Math.random() * 100000000)
  const body = JSON.stringify({
    user_id: Math.ceil(Math.random() * 100),
    amount: parseInt(totalPayment),
    item_id: `PROD${id}`,
    item_name: eventTitle,
  });
  
  async function paymentApi() {
    try {
      const response = await fetch("http://localhost:8181/midtrans/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
      const json = await response.json();
      console.log(json);
      if(json.code = 200){
        window.location.href = json.data.redirect_url
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
    
  const formData = new URLSearchParams({
    eventId: parseInt(eventId),
    paymentId: parseInt(payMethod),
    sectionId: parseInt(sectionId),
    ticketQuantity: parseInt(quan),
  });
  for (const value of formData.values()) {
    console.log(value);
  }
  async function payment() {
    try {
      const response = await fetch("http://103.93.58.89:21217/transactions/payment", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const json = await response.json()
      console.log(json)
      // paymentApi()
      dispatch(resetAll())
    } catch (error) {
      console.error("Error to proceed data");
      navigate("/login");
      return;
    }
    navigate("/my-booking");
  }
  return (
    <div className="flex flex-col md:bg-[#F4F7FF]">
      <Navbar />
      <div className="flex flex-col items-center w-screen h-full md:pt-[70px]">
        <div className="flex bg-white p-20 md:w-[94%] rounded-3xl gap-10">
          {/* LEFT */}
          <div className="md:flex flex-col basis-1/2 font-semibold hidden">
            <div className="pb-10 text-[20px]">Payment Method</div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-[15px]">
                <input type="radio" name="payment" id="card" value={1} onChange={tooglePayment}/>
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
                <input type="radio" name="payment" id="bank" value={2} onChange={tooglePayment}/>
                <img src={bank} alt="" />
                <label htmlFor="bank">Bank Transfer</label>
              </div>
              <div className="flex items-center gap-[15px]">
                <input type="radio" name="payment" id="retail" value={2} onChange={tooglePayment}/>
                <img src={retail} alt="retail" />
                <label htmlFor="">Retail</label>
              </div>
              <div className="flex items-center gap-[15px]">
                <input type="radio" name="payment" id="emoney" value={2} onChange={tooglePayment}/>
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
                    <div className="text-[#508D4E] font-semibold">
                    {eventId === 0 ? "-" : eventTitle}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="font-semibold">Ticket Section</div>
                    <div className="text-[#508D4E] font-semibold">   {ticketSection.length === 0 ? "-" : ticketSection.join(", ")}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="font-semibold">Quantity</div>
                    <div className="text-[#508D4E] font-semibold">{qty === 0 ? "-" : qty}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="font-semibold">Total Payment</div>
                    <div className="text-[#508D4E] font-semibold">{totalPayment === 0
                    ? "-"
                    : `Rp.${totalPayment.toLocaleString("id")}`}</div>
                  </div>
                </div>
                <div className="pt-[50px]" onClick={payment}>
                  <button className="w-full md:w-80 bg-[#508D4E] text-white h-10 rounded-xl shadow-sm shadow-[#508D4E]">
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
