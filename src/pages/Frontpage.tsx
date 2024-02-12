import { useEffect, useState } from "react";
import { Api, BeerReponse, FavoriteItem, OrderListItem } from "../Api";
import { OrderList } from "../components/OrderList/OrderList";
import { LatestOrderList } from "../components/LatestOrderList/LatestOrderList";
import { FavoriteProductList } from "../components/FavoriteProductList/FavoriteProductList";
import { useFetch } from "../hooks/useFetch";
import { LatestOrderListItem } from "../components/LatestOrderList/LatestOrderItem";
import {
  KampagneCard,
  KampagneProps,
} from "../components/Kampagne/KampagneCard";

const kampagner: KampagneProps[] = [
  {
    title: "Classic senge og skabe",
    interact: () => {},
    renderDuration: () => {
      return (
        <div className="flex flex-row items-start px-[6px] py-[3px] gap-[10px] bg-[#854223] rounded-[2px] w-fit text-white">
          <p className="font-['Open Sans'] font-normal text-[12px]">
            August 2022 - september 2022
          </p>
        </div>
      );
    },
  },
  {
    title: "wally pusleborde",
    interact: () => {},
    renderDuration: () => {
      return (
        <div className="flex flex-row items-center px-[6px] py-[3px] gap-[5px] bg-[#C8C5BE] rounded-[2px] w-fit">
          <img
            className="w-[12px] h-[12px]"
            src={"/icons/hourglass.svg"}
            alt="Workflow"
          />
          <p className="font-['Open Sans'] font-normal text-[12px] text-[#261F18]">
            Oktober 2022
          </p>
        </div>
      );
    },
  },
  {
    title: "Alle tekstiler",
    interact: () => {},
    renderDuration: () => {
      return (
        <div className="flex flex-row items-center px-[6px] py-[3px] gap-[5px] bg-[#C8C5BE] rounded-[2px] w-fit">
          <img
            className="w-[12px] h-[12px]"
            src={"/icons/hourglass.svg"}
            alt="Workflow"
          />
          <p className="font-['Open Sans'] font-normal text-[12px] text-[#261F18]">
            December 2022
          </p>
        </div>
      );
    },
  },
];
/* Frame 41 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 3px 6px;
// gap: 5px;

// /* Oktober 2022 */

// width: 77px;
// height: 16px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 400;
// font-size: 12px;
// line-height: 16px;
// display: flex;
// align-items: center;

// color: #261F18;

export function FrontPage() {
  const {
    data: favorites,
    loading: loadingFavorites,
    error: errorFavorites,
  } = useFetch<FavoriteItem[]>(
    "https://api.punkapi.com/v2/beers?page=1&per_page=5"
  );
  const {
    data: latest,
    loading: loadingLatest,
    error: errorLatest,
  } = useFetch<LatestOrderListItem[]>(
    "https://api.punkapi.com/v2/beers?page=1&per_page=7"
  );
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

  return (
    <div className="pl-60">
      <div className="py-10">VELKOMMEN TIL BABYBOB A/S</div>
      <div className="flex gap-[25px]">
        {data && <OrderList orderList={data} />}
        {latest && <LatestOrderList latestOrderList={latest} />}
        {favorites && <FavoriteProductList favoriteItems={favorites} />}
      </div>
      <div className="flex gap-6 py-4">
        <div className="w-[288px] h-[310px] bg-sengeogskabe">
          <KampagneCard
            interact={kampagner[0].interact}
            renderDuration={kampagner[0].renderDuration}
            title={kampagner[0].title}
          ></KampagneCard>
        </div>
        <div className="w-[288px] h-[310px] bg-wallypusleborde">
          <KampagneCard
            interact={kampagner[1].interact}
            renderDuration={kampagner[1].renderDuration}
            title={kampagner[1].title}
          ></KampagneCard>{" "}
        </div>
        <div className="w-[288px] h-[310px] bg-alletekstiler">
          <KampagneCard
            interact={kampagner[2].interact}
            renderDuration={kampagner[2].renderDuration}
            title={kampagner[2].title}
          ></KampagneCard>{" "}
        </div>
      </div>
    </div>
  );
}
