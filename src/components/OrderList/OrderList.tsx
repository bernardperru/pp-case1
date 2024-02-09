import { useEffect, useState } from "react";
import { Api, OrderListItem } from "../../Api";
import { OrderItem } from "./OrderItem";

export function OrderList() {
  const [data, setData] = useState<OrderListItem[]>();
  const api = new Api();

  useEffect(() => {
    const getBeers = async () => {
      const orderList = await api.getOrderListBeer();
      setData(orderList);
    };
    if (!data) {
      getBeers();
    }
  });

  if (!data) {
    return <div></div>;
  }

  return (
    <div className="absolute bg-[#F5F5F5] w-3/12 left-60 rounded-xl">
      <span>12 produkter</span> <span>total: 400000</span>
      {data.map((item) => (
        <OrderItem item={item}></OrderItem>
      ))}
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
