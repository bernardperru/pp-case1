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
    //group11
    <div className="w-[673px] h-[372px] left-[239px] top-[223px]">
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
      {/*group10*/}
      <div className="w-[673px] h-[372px] left-[239px] top-[223px]">
        {/*rectangle*/}
        <div className="w-[672px] h-[310px] left-[240px] top-[269px] rounded-[10px] bg-[#F5F5F5] p-3">
          <div className="flex gap-[490px]">
            {/*frame41*/}
            <div className="flex items-start p-[3px] gap-[10px] bg-[#F1ECE6] rounded-[2px]  w-fit">
              <div className="flex items-center font-[Open Sans] font-normal text-[12px] leading-[16px]">
                12 produkter
              </div>
            </div>
            {/*frame50*/}
            <div className="flex items-end p-[3px] gap-[10px] bg-[#F1ECE6] rounded-[2px] w-fit ">
              <div className="flex items-center font-[Open Sans] font-normal text-[12px] leading-[16px] h-[16px]">
                total: 400000
              </div>
            </div>
          </div>
          <div className="flex-col items-start p-0 gap-[7px]">
            {/* {data.map((item) => (
              <OrderItem item={item}></OrderItem>
            ))} */}
            <OrderItem item={data[0]}></OrderItem>
          </div>
        </div>
      </div>
    </div>
  );
}
