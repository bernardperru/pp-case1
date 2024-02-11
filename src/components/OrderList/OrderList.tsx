import { useEffect, useState } from "react";
import { Api, OrderListItem } from "../../Api";
import { OrderItem } from "./OrderItem";
import { useFetch } from "../../hooks/useFetch";

type Props = {
  orderList: OrderListItem[];
};

export function OrderList({ orderList }: Props) {
  const [listLength, setListLength] = useState(4);
  const { data, loading, error } = useFetch<OrderListItem[]>(
    "https://api.punkapi.com/v2/beers"
  );

  const take = (amount: number): OrderListItem[] => {
    if (data) {
      const array = [...data];
      return array.slice(0, amount);
    }
    return [];
  };

  if (loading) {
    return <>loading</>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
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
          <p className=" uppercase font-medium text-[16px]">Bestillingsliste</p>
        </div>
        <p className="font-[Open Sans] text-[14px] underline">
          Gå til bestillingslisten
        </p>
      </div>
      <div className="w-[672px] min-h-[310px] rounded-[10px] bg-[#F5F5F5] p-4">
        <div className="flex place-content-between">
          <div className="p-[3px] bg-[#F1ECE6] rounded-[2px] w-fit">
            <p className="font-[Open Sans] text-[12px] truncate">
              {data.length} produkter
            </p>
          </div>
          <div className="p-[3px] bg-[#F1ECE6] rounded-[2px] max-w-[110px]">
            <p className="font-[Open Sans] text-[12px] truncate">
              total: 4000 dkk
            </p>
          </div>
        </div>
        <ul className="py-2">
          {take(listLength).map((item) => (
            <OrderItem item={item}></OrderItem>
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
