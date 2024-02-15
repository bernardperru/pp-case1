import { useState } from "react";
import { OrderListItem } from "./OrderListItem";
import { CartItem, useCart } from "../../context/CartContext";

export function OrderList() {
  const [listLength, setListLength] = useState(4);
  const { cartItems, cartTotal, cartQuantity } = useCart();

  const take = (amount: number): CartItem[] => {
    if (cartItems) {
      const array = [...cartItems];
      return array.slice(0, amount);
    }

    return [];
  };

  let colorSwitch = true;

  const getColor = () => {
    const color = colorSwitch;
    colorSwitch = !colorSwitch;
    return color;
  };

  if (!cartItems) {
    return <div></div>;
  }

  return (
    <div className="w-[672px] h-fit">
      <div className="flex place-content-between items-center">
        <div className="flex items-center gap-3 pb-2">
          <img
            className="w-[25px] h-[25px]"
            src="/icons/list1.svg"
            alt="Workflow"
          />
          <p className="uppercase font-medium text-[16px]">Bestillingsliste</p>
        </div>
        <p className="font-[Open Sans] text-[14px] underline">
          Gå til bestillingslisten
        </p>
      </div>
      <div className="w-[672px] min-h-[310px] rounded-[10px] bg-[#F5F5F5] p-4">
        <div className="flex place-content-between">
          <div className="p-[3px] bg-[#F1ECE6] rounded-[2px] w-fit">
            <p className="font-['Open Sans'] text-[12px] truncate">
              {cartQuantity()} produkter
            </p>
          </div>
          <div className="p-[3px] bg-[#F1ECE6] rounded-[2px] max-w-[110px]">
            <p className="font-[Open Sans] text-[12px] truncate">
              total: {cartTotal()} dkk
            </p>
          </div>
        </div>
        <ul className="pt-2 flex flex-col gap-2">
          {take(listLength).map((item, index) => (
            <OrderListItem
              key={index}
              color={getColor()}
              item={item}
            ></OrderListItem>
          ))}
        </ul>
      </div>

      <div className="flex place-content-center">
        {listLength === 4 ? (
          <button
            className="bg-[#CFCCC5] rounded-[23px] w-[95px] h-[35px] text-center"
            onClick={() => {
              setListLength(100);
            }}
          >
            vis alle
          </button>
        ) : (
          <button
            className="bg-[#CFCCC5] rounded-[23px] w-[95px] h-[35px] text-center"
            onClick={() => {
              setListLength(4);
            }}
          >
            vis færre
          </button>
        )}
      </div>
    </div>
  );
}
