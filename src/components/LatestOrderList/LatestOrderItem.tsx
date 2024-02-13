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
          ? "flex gap-[50px] bg-white p-[5px] h-[33px]"
          : "flex gap-[50px] p-[5px] h-[33px]"
      }
    >
      <div className="flex gap-[20px]">
        <div className="w-16 uppercase text-center font-[400] text-[14px] text-[#261F18]">
          {item.first_brewed}
        </div>
        <div className="w-8 uppercase font-bold text-[14px] text-[#261F18]">
          #{item.attenuation_level}
        </div>
      </div>
      <div className="flex gap-[20px]">
        <div className="font-['Open Sans'] text-[14px] underline">Se ordre</div>
        <div className="font-['Open Sans'] text-[14px] underline">
          Genbestil
        </div>
      </div>
    </div>
  );
}

// /* #4134534 */

// width: 66px;
// height: 19px;

// font-family: 'Open Sans';
// font-style: normal;
// font-weight: 600;
// font-size: 14px;
// line-height: 19px;
// /* identical to box height */
// display: flex;
// align-items: center;
// text-transform: uppercase;

// color: #261F18;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;
