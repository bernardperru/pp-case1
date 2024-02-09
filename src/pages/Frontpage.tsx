import { useEffect, useState } from "react";
import { Api, BeerReponse } from "../Api";
import { OrderList } from "../components/OrderList/OrderList";
import { LatestOrderList } from "../components/LatestOrderList/LatestOrderList";
import { FavoriteProductList } from "../components/FavoriteProductList/FavoriteProductList";

export function FrontPage() {
  const [data, setData] = useState<BeerReponse[]>();
  const api = new Api();

  useEffect(() => {
    const getBeers = async () => {
      const beer = await api.getBeer();
      setData(beer);
    };
    if (!data) {
      getBeers();
    }
  });

  if (!data) {
    return <div></div>;
  }

  return (
    <div className="pl-60">
      <OrderList></OrderList>
      <LatestOrderList></LatestOrderList>
      <FavoriteProductList></FavoriteProductList>
    </div>
  );
}
