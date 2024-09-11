import React, { useEffect, useState } from "react";
import ticket_1 from "../assets/icon/ticket-1.png";

function Tickets(props) {
    const [num, setNum] = useState(0);
    useEffect(() => {
        const current = props.currentData;
        console.log("inicurret",current)
        current[props.index] = {
          id: props.data.id,
          name: props.data.name,
          price: num * props.data.price,
          quantity: num,
        };
        props.onChange([...current]);
      }, [num]);
    
    // const plus = () => {
    //   const newData = { ...props.data };
    //   if (num < 10) {
    //     newData.quantity = num + 1;
    //     newData.price = props.data.price * newData.quantity;
    //     dispatch(changeSeat(newData));
    //     setNum(newData.quantity);
    //   }
    // };
    // const min = () => {
    //   const newData = { ...props.data };
    //   if (num > 0) {
    //     newData.quantity = num - 1;
    //     newData.price = props.data.price * newData.quantity;
    //     dispatch(changeSeat(newData));
    //     setNum(newData.quantity);
    //   }
    // };
    return (
      <div className="flex w-full items-start gap-2">
        <div className="flex flex-col gap-4 py-[25px]">
              <div className="flex gap-12">
                <div className="flex gap-4">
                  <div className="w-[45px] h-[45px]">
                    <img src={ticket_1} alt="" />
                  </div>
                  <div>
                    <div className="font-semibold">SECTION {props.data.name}, ROW 1</div>
                    <div className="text-gray-500">{props.data.quantity} Seats available</div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-semibold">Rp{props.data.price.toLocaleString("id")}</div>
                  <div className="text-gray-500">per person</div>
                </div>
              </div>
              <div className="flex items-center pl-16 justify-between">
                <div className="font-semibold">Quantity</div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={()=> setNum(num -1)}
                    className="border border-gray-500 w-[30px] h-[30px] rounded-lg"
                  >
                    -
                  </button>
                  <div className="font-semibold">{num}</div>
                  <button
                    onClick={()=> setNum(num +1)}
                    className="border border-gray-500 w-[30px] h-[30px] rounded-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
      </div>
    );
  }

  export default Tickets