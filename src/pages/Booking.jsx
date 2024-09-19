import react from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import stadium_img from "../assets/img/stadium.png";
import stadium_query_img from "../assets/img/stadium-query.png";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import {
  addQty,
  addEventId,
  addEventTitle,
  addTotalPayment,
  addTicketSection,
  addSectionId,
  addQuantity,
} from "../redux/reducers/transaction";
import Tickets from "../components/Tickets";

function Booking() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();
  const [section, setSection] = react.useState([]);
  const [event, setEvent] = react.useState([]);
  console.log(event)

  const token = useSelector((state) => state.auth.token);
  if (token === null) {
    navigate("/login");
  }

  react.useEffect(() => {
    (async function () {
      const response = await fetch(
        "http://103.93.58.89:21217/events/section/" + id
      );
      if (!response.ok) {
        console.log("err");
      }
      const json = await response.json();
      const results = json.results;
      setSection(results);
      console.log("ini json", json);
    })();
    (async function () {
      const response = await fetch(
        "http://103.93.58.89:21217/events/list/" + id
      );
      if (!response.ok) {
        console.log("err");
      }
      const json = await response.json();
      const results = json.results;
      setEvent(results);
      console.log("ini json", json);
    })();
  }, []);

  const [selectedSections, setSelectedSections] = useState([]);

  const ticketSection = selectedSections.reduce((prev, curr) => {
    const arr = prev;
    if (curr.quantity !== 0) {
      arr.push(`${curr.name}(${curr.quantity})`);
    }
    return arr;
  }, []);
  const quantity = selectedSections.reduce(
    (prev, curr) => prev + curr.quantity,
    0
  );
  const price = selectedSections.reduce((prev, curr) => prev + curr.price, 0);

  const sectionId = selectedSections.reduce((prev, curr) => {
    const arr = prev;
    if (curr.quantity !== 0) {
      arr.push(curr.id);
    }
    return arr;
  }, []);
  const quantityArray = selectedSections.reduce((prev, curr) => {
    const arr = prev;
    if (curr.quantity !== 0) {
      arr.push(curr.quantity);
    }
    return arr;
  }, []);

  console.log(event.title)
  dispatch(addQuantity(quantityArray));
  dispatch(addQty(quantity));
  dispatch(addEventId(id));
  dispatch(addSectionId(sectionId));
  dispatch(addTotalPayment(price));
  dispatch(addTicketSection(ticketSection));
  dispatch(addEventTitle(event.title));

  // const [name, SetName] = react.useState("-");
  // const [quan, SetQuan] = react.useState("-");
  // const [price, SetPrice] = react.useState("-");
  // let [count, set] = react.useState(0);
  // function min() {
  //   count = count - 1;
  //   set(count);
  // }
  // function plus(id, title) {
  //   count = count + 1;
  //   set(count);
  // }
  // if (count <= -1) {
  //   count = 0;
  // }
  // const [name1, SetName1] = react.useState("");
  // const [num1, SetNum1] = react.useState(0);
  // const [quan1, SetQuan1] = react.useState(0);
  // const [price1, SetPrice1] = react.useState(0);
  // const [name2, SetName2] = react.useState("");
  // const [num2, SetNum2] = react.useState(0);
  // const [quan2, SetQuan2] = react.useState(0);
  // const [price2, SetPrice2] = react.useState(0);
  // const [name3, SetName3] = react.useState("");
  // const [num3, SetNum3] = react.useState(0);
  // const [quan3, SetQuan3] = react.useState(0);
  // const [price3, SetPrice3] = react.useState(0);

  // function plus1() {
  //   if (num1 < 4) {
  //     SetNum1(num1 + 1);
  //     SetName1("Reg(" + (num1 + 1) + ")");
  //     SetQuan1(num1 + 1);
  //     SetPrice1((num1 + 1) * 15);
  //     SetName("Reg(" + (num1 + 1) + ")" + name2 + name3);
  //     SetQuan(num1 + 1 + quan2 + quan3);
  //     SetPrice((num1 + 1) * 15 + price2 + price3);
  //   }
  // }
  // function plus2() {
  //   if (num2 < 4) {
  //     SetNum2(num2 + 1);
  //     SetName2("Vip(" + (num2 + 1) + ")");
  //     SetQuan2(num2 + 1);
  //     SetPrice2((num2 + 1) * 35);
  //     SetName(name1 + "Vip(" + (num2 + 1) + ")" + name3);
  //     SetQuan(num2 + 1 + quan1 + quan3);
  //     SetPrice((num2 + 1) * 35 + price1 + price3);
  //   }
  // }
  // function plus3() {
  //   if (num3 < 4) {
  //     SetNum3(num3 + 1);
  //     SetName3("Vvip(" + (num3 + 1) + ")");
  //     SetQuan3(num3 + 1);
  //     SetPrice3((num3 + 1) * 50);
  //     SetName(name1 + name2 + "Vvip(" + (num3 + 1) + ")");
  //     SetQuan(num1 + num2 + (1 + quan3));
  //     SetPrice(price1 + price2 + (num3 + 1) * 50);
  //   }
  // }
  // function minus1() {
  //   if (num1 > 0) {
  //     SetNum1(num1 - 1);
  //     SetQuan1(num1 - 1);
  //     SetPrice1((num1 - 1) * 15);
  //     if (num1 <= 1) {
  //       SetName1("");
  //       SetQuan(num2 + num3);
  //       SetName("" + name2 + name3);
  //       if (name.length <= 6) {
  //         SetName("-");
  //       }
  //       if (quan <= 1) {
  //         SetQuan("-");
  //       }
  //       if (price <= 15) {
  //         SetPrice("-");
  //       }
  //     } else {
  //       SetName1("Reg(" + (num1 - 1) + ")");
  //       SetName("Reg(" + (num1 - 1) + ")" + name2 + name3);
  //       SetQuan(num1 - 1 + quan2 + quan3);
  //       SetPrice((num1 - 1) * 15 + price2 + price3);
  //     }
  //   }
  // }
  // function minus2() {
  //   if (num2 > 0) {
  //     SetNum2(num2 - 1);
  //     SetQuan2(num2 - 1);
  //     SetPrice2((num2 - 1) * 15);
  //     if (num2 <= 1) {
  //       SetName2("");
  //       SetQuan(num1 + num3);
  //       SetName(name1 + "" + name3);
  //       if (name.length <= 6) {
  //         SetName("-");
  //       }
  //       if (quan <= 1) {
  //         SetQuan("-");
  //       }
  //       if (price <= 35) {
  //         SetPrice("-");
  //       }
  //     } else {
  //       SetName(name1 + "Vip(" + (num2 - 1) + ")" + name3);
  //       SetName2("Vip(" + (num2 - 1) + ")");
  //       SetQuan(quan1 + num2 - 1 + quan3);
  //       SetPrice(price1 + (num2 - 1) * 35 + price3);
  //     }
  //   }
  // }
  // function minus3() {
  //   if (num3 > 0) {
  //     SetNum3(num3 - 1);
  //     SetQuan3(num3 - 1);
  //     SetPrice3((num3 - 1) * 15);
  //     if (num3 <= 1) {
  //       SetName3("");
  //       SetQuan(num2 + num1);
  //       SetName(name1 + name2 + "");
  //       if (name.length <= 7) {
  //         SetName("-");
  //       }
  //       if (quan <= 1) {
  //         SetQuan("-");
  //       }
  //       if (price <= 50) {
  //         SetPrice("-");
  //       }
  //     } else {
  //       console.log("SetNameELSE");
  //       SetName(name1 + name2 + "Vvip(" + (num3 - 1) + ")");
  //       SetName3("Vvip(" + (num3 - 1) + ")");
  //       SetQuan(quan1 + quan2 + num3 - 1);
  //       SetPrice(price1 + price2 + (num3 - 1) * 15);
  //     }
  //   }
  // }


  // react.useEffect(()=>{
  //   const current = props.currentData
  //   current[props.index] = {
  //     name : props.data.name,
  //     price: num = props.data.price,
  //   };
  //   props.Onchange(current)
  // })
  return (
    <div className="md:bg-[#F4F7FF] ">
      <Navbar />
      <div className="flex flex-col items-center w-full h-full md:pt-[70px]">
        <div className="flex bg-white p-20 md:w-[94%] rounded-3xl gap-10">
          {/* LEFT */}
          <div className="md:flex basis-3/6 hidden">
            <div className="w-[600px] h-[600px]">
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
              <div className="w-full h-full md:hidden ">
                <img
                  src={stadium_query_img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {section.map((item,index) => {
              console.log(selectedSections)
              console.log("-----------------")
              return (
                <Tickets
                key={item.id}
                data={item}
                index={index}
                currentData={selectedSections}
                onChange={setSelectedSections}
                />
              );
            })}
            {/* <div className="flex flex-col gap-4 py-[25px]">
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
                  <button
                    onClick={minus}
                    className="border border-gray-500 w-[30px] h-[30px] rounded-lg"
                  >
                    -
                  </button>
                  <div className="font-semibold">{num1}</div>
                  <button
                    onClick={plus}
                    className="border border-gray-500 w-[30px] h-[30px] rounded-lg"
                  >
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
                  <button
                    onClick={minus2}
                    className="border border-gray-500 w-[30px] h-[30px] rounded-lg"
                  >
                    -
                  </button>
                  <div className="font-semibold">{num2}</div>
                  <button
                    onClick={plus2}
                    className="border border-gray-500 w-[30px] h-[30px] rounded-lg"
                  >
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
                    <div className="font-semibold">SECTION VVIP,ROW 3</div>
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
                  <button
                    onClick={minus3}
                    className="border border-gray-500 w-[30px] h-[30px] rounded-lg"
                  >
                    -
                  </button>
                  <div className="font-semibold">{num3}</div>
                  <button
                    onClick={plus3}
                    className="border border-gray-500 w-[30px] h-[30px] rounded-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            </div> */}
            <hr />
            <div className="pt-[25px] font-semibold">
              <div className="flex flex-col gap-4 ">
                <div className="flex justify-between">
                  <div className="font-semibold">Ticket Section</div>
                  <div className="text-[#508D4E] font-semibold"> {ticketSection.length == 0 ? "-" : ticketSection.join(", ")}</div>
                </div>
                <div className="flex justify-between">
                  <div className="font-semibold">Quantity</div>
                  <div className="text-[#508D4E] font-semibold">{quantity === 0 ? "-" : quantity}</div>
                </div>
                <div className="flex justify-between">
                  <div className="font-semibold">Total Payment</div>
                  <div className="text-[#508D4E] font-semibold">{price === 0 ? "-" : `Rp. ${price.toLocaleString("id")}`}</div>
                </div>
              </div>
              <Link to="/payment" className="pt-10">
                <button className="w-80 bg-[#508D4E] text-white h-10 rounded-xl shadow-sm shadow-[#508D4E]">
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
