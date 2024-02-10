import { useEffect, useState } from "react";
import { Api, BeerReponse } from "../Api";
import { OrderList } from "../components/OrderList/OrderList";
import { LatestOrderList } from "../components/LatestOrderList/LatestOrderList";
import { FavoriteProductList } from "../components/FavoriteProductList/FavoriteProductList";
import { useFetch } from "../hooks/useFetch";

export function FrontPage() {
  const { data, loading, error } = useFetch<BeerReponse>(
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

  console.log(loading);
  return (
    <div className="pl-60">
      <OrderList></OrderList>
      <LatestOrderList></LatestOrderList>
      <FavoriteProductList></FavoriteProductList>
    </div>
  );
}
