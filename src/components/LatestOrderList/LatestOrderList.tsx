import { useFetch } from "../../hooks/useFetch";
import { LatestOrderItem, LatestOrderListItem } from "./LatestOrderItem";

type Props = {
  latestOrderList: LatestOrderListItem[];
};

export function LatestOrderList({ latestOrderList }: Props) {
  let colorSwitch = true;

  const getColor = () => {
    const color = colorSwitch;
    colorSwitch = !colorSwitch;
    return color;
  };

  if (!latestOrderList) {
    return <div></div>;
  }

  return (
    <div className="w-[350px]">
      <div className="flex place-content-between items-center">
        <div className="flex items-center gap-3">
          <img
            className="w-[25px] h-[25px] "
            src="/icons/latestorder.svg"
            alt="Workflow"
          />
          <div className=" uppercase font-medium text-[16px]">
            seneste ordrer
          </div>
        </div>
        <div className="font-[Open Sans] text-[14px] underline">Se alle</div>
      </div>
      <div className="py-2">
        <div className="min-h-[310px] rounded-[10px] bg-[#F5F5F5] p-4">
          <div className="flex-col items-start py-2 gap-[7px]">
            {latestOrderList.map((item) => (
              <LatestOrderItem item={item} color={getColor()}></LatestOrderItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Group 9 */

// position: absolute;
// width: 350px;
// height: 358px;
// left: 946px;
// top: 223px;
