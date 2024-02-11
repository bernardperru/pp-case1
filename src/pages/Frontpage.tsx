import { useEffect, useState } from "react";
import { Api, BeerReponse, FavoriteItem } from "../Api";
import { OrderList } from "../components/OrderList/OrderList";
import { LatestOrderList } from "../components/LatestOrderList/LatestOrderList";
import { FavoriteProductList } from "../components/FavoriteProductList/FavoriteProductList";
import { useFetch } from "../hooks/useFetch";

export function FrontPage() {
  const { data, loading, error } = useFetch<FavoriteItem[]>(
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
      <div className="py-10">VELKOMMEN TIL BABYBOB A/S</div>
      <div className="flex gap-[25px]">
        <OrderList></OrderList>
        <LatestOrderList></LatestOrderList>
        <FavoriteProductList favoriteItems={data}></FavoriteProductList>
      </div>
    </div>
  );
}
