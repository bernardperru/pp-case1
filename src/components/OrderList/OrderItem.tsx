import { OrderListItem } from "../../Api";

type Props = {
  item: OrderListItem;
};

export function OrderItem({ item }: Props) {
  return (
    <li className="flex place-content-between bg-[#FFFFFF] h-[58px] p-2">
      <div className="flex items-start gap-[13px]">
        <div className="rounded-[3px] w-[50px] h-[50px] bg-slate-500"></div>
        <div className="p-0 truncate w-[200px]">
          <p className="uppercase font-medium text-[16px] pt-1 text-[#261F18]">
            {item.name}
          </p>
          <p className="font-sans font-[400] text-[14px] text-[#261F18]">
            {item.id}
          </p>
        </div>
      </div>
      <div className="flex gap-[60px] py-[10px] px-[20px] font-[400] text-[14px] text-[#261F18]">
        <p className="w-4">{item.attenuation_level}</p>
        <p className="w-10">{item.first_brewed}</p>
        <p className="w-4">{item.ph}</p>
      </div>
    </li>
  );
}
