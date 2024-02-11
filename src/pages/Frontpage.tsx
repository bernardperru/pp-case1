import { useEffect, useState } from "react";
import { Api, BeerReponse, FavoriteItem, OrderListItem } from "../Api";
import { OrderList } from "../components/OrderList/OrderList";
import { LatestOrderList } from "../components/LatestOrderList/LatestOrderList";
import { FavoriteProductList } from "../components/FavoriteProductList/FavoriteProductList";
import { useFetch } from "../hooks/useFetch";
import { LatestOrderListItem } from "../components/LatestOrderList/LatestOrderItem";

export function FrontPage() {
  const {
    data: favorites,
    loading: loadingFavorites,
    error: errorFavorites,
  } = useFetch<FavoriteItem[]>("https://api.punkapi.com/v2/beers");
  const {
    data: latest,
    loading: loadingLatest,
    error: errorLatest,
  } = useFetch<LatestOrderListItem[]>("https://api.punkapi.com/v2/beers");
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

  console.log(loading);
  return (
    <div className="pl-60">
      <div className="py-10">VELKOMMEN TIL BABYBOB A/S</div>
      <div className="flex gap-[25px]">
        <OrderList orderList={data}></OrderList>
        {latest && <LatestOrderList latestOrderList={latest}></LatestOrderList>}
        {favorites && (
          <FavoriteProductList favoriteItems={favorites}></FavoriteProductList>
        )}
      </div>
    </div>
  );
}
