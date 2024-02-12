export type LatestOrderListItem = {
  first_brewed: string;
  attenuation_level: number;
};

type Props = {
  item: LatestOrderListItem;
  color: boolean;
};

export function LatestOrderItem({ item, color }: Props) {
  return (
    <div
      className={
        color
          ? "flex gap-[60px] bg-white p-[5px] h-[33px]"
          : "flex gap-[60px] p-[5px]  h-[33px]"
      }
    >
      <div className="flex gap-[20px]">
        <div className="w-16 uppercase text-center font-[400] text-[14px] text-[#261F18]">
          {item.first_brewed}
        </div>
        <div className="w-8 uppercase  font-[400] text-[14px] text-[#261F18]">
          {item.attenuation_level}
        </div>
      </div>
      <div className="flex gap-[20px]">
        <div className="font-[Open Sans] text-[14px] underline">Se ordre</div>
        <div className="font-[Open Sans] text-[14px] underline">Genbestil</div>
      </div>
    </div>
  );
}
