import { OrderList } from "../components/OrderList/OrderList";
import { OldOrders } from "../components/LatestOrderList/OldOrders";
import { FavoriteList } from "../components/FavoriteProductList/FavoriteList";
import { useGetOrder } from "../hooks/useGetOrder";
import { useGetFavorites } from "../hooks/useGetFavorites";
import { useGetOldOrders } from "../hooks/useGetOldOrders";

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
    background: "bg-sengeogskabe",
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
    background: " bg-wallypusleborde",
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
    background: " bg-alletekstiler",
  },
];

export function FrontPage() {
  const favorites = useGetFavorites();
  const oldOrders = useGetOldOrders();
  const order = useGetOrder();

  const addToOrder = (id: number) => {};

  return (
    <div className="pl-60">
      <div className="py-10">VELKOMMEN TIL BABYBOB A/S</div>
      <div className="flex gap-[25px]">
        <OrderList
          data={order.data}
          loading={order.loading}
          error={order.error}
        />
        <OldOrders
          data={oldOrders.data}
          loading={oldOrders.loading}
          error={oldOrders.error}
        />
        <FavoriteList
          data={favorites.data}
          loading={favorites.loading}
          error={favorites.error}
        />
      </div>
      <div className="flex gap-6 py-4">
        {kampagner.map((kampagne) => (
          <div className={"w-[288px] h-[310px] " + kampagne.background}>
            <KampagneCard
              interact={kampagne.interact}
              renderDuration={kampagne.renderDuration}
              title={kampagne.title}
            ></KampagneCard>
          </div>
        ))}
      </div>
    </div>
  );
}
