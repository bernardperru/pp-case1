import {
  CampaignCard,
  CampaignProps,
  FavoriteList,
  OldOrders,
  OrderList,
} from "../components";
import { useGetOldOrders } from "../hooks";

const kampagner: CampaignProps[] = [
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
  const oldOrders = useGetOldOrders();

  return (
    <div className="pl-60">
      <div className="py-10">VELKOMMEN TIL BABYBOB A/S</div>
      <div className="flex gap-[25px]">
        <OrderList />
        <OldOrders
          data={oldOrders.data}
          loading={oldOrders.loading}
          error={oldOrders.error}
        />
        <FavoriteList />
      </div>
      <div className="flex gap-6 py-4">
        {kampagner.map((kampagne) => (
          <div className={"w-[288px] h-[310px] " + kampagne.background}>
            <CampaignCard
              interact={kampagne.interact}
              renderDuration={kampagne.renderDuration}
              title={kampagne.title}
            ></CampaignCard>
          </div>
        ))}
      </div>
    </div>
  );
}
