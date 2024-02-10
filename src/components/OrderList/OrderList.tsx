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
    <div className="">
      {/*frame 40*/}
      <div className="">
        {/*frame 42*/}
        <div className="flex place-content-between items-center w-[660px]">
          {/*frame 30*/}
          <div className="flex items-center gap-3 ">
            <img
              className="w-[25px] h-[25px] "
              src="/icons/list1.svg"
              alt="Workflow"
            />
            <div className=" uppercase font-medium text-[16px]">
              Bestillingsliste
            </div>
          </div>
          <div className="font-[Open Sans] text-[14px] underline">
            Gå til bestillingslisten
          </div>
        </div>
      </div>
      {/*group10*/}
      <div className="py-2">
        {/*rectangle*/}
        <div className="w-[672px] h-[310px] rounded-[10px] bg-[#F5F5F5] p-4">
          <div className="flex place-content-between">
            {/*frame41*/}
            <div className="p-[3px] bg-[#F1ECE6] rounded-[2px] w-fit">
              <div className="font-[Open Sans] text-[12px] truncate">
                {data.length} produkter
              </div>
            </div>
            {/*frame50*/}
            <div className="p-[3px] bg-[#F1ECE6] rounded-[2px] max-w-[110px]">
              <div className="font-[Open Sans] text-[12px] truncate">
                total: 4000 dkk
              </div>
            </div>
          </div>
          <div className="flex-col items-start py-2 gap-[7px]">
            {/* {data.map((item) => (
              <OrderItem item={item}></OrderItem>
            ))} */}
            <OrderItem item={data[0]}></OrderItem>
            <OrderItem item={data[1]}></OrderItem>
            <OrderItem item={data[2]}></OrderItem>
            <OrderItem item={data[3]}></OrderItem>
          </div>
        </div>
      </div>
    </div>
  );
}
