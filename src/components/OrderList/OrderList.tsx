import { useEffect, useState } from "react";
import { Api, OrderListItem } from "../../Api";
import { OrderItem } from "./OrderItem";
import { useFetch } from "../../hooks/useFetch";

export function OrderList() {
  const { data, loading, error } = useFetch<OrderListItem[]>(
    "https://api.punkapi.com/v2/beers"
  );

  if (loading) {
    return <>loading</>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div></div>;
  }

  if (!data) {
    return <div></div>;
  }

  return (
    <div>
      {/*frame 40*/}
      <div className="w-[660px] h-[25px] left-[239px] top-[223px]">
        {/*frame 42*/}
        <div className="flex justify-between items-center gap-[15px] w-[660px] h-[24px]">
          {/*frame 30*/}
          <div className="flex items-center gap-3 w-[147px] h-[24px]">
            <img
              className="w-[25px] h-[25px] "
              src="/icons/list1.svg"
              alt="Workflow"
            />
            <div className="font-[Oswald] uppercase font-medium text-[16px] leading-[24px]">
              Bestillingsliste
            </div>
          </div>
          <div className="w-[138px] h-[23px] font-[Open Sans] text-[14px] underline leading-[23px] font-normal">
            Gå til bestillingslisten
          </div>
        </div>
      </div>
      <div className="absolute bg-[#F5F5F5] w-[672px] h-[310px] left-[240px] top-[269px] rounded-xl">
        <span>12 produkter</span> <span>total: 400000</span>
        {data.map((item) => (
          <OrderItem item={item}></OrderItem>
        ))}
      </div>
    </div>
  );
}

// /* Rectangle 4 */

// position: absolute;
// width: 672px;
// height: 310px;
// left: 240px;
// top: 269px;

// background: #F5F5F5;
// border-radius: 10px;
