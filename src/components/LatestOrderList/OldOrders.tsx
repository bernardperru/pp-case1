import { Product, Response } from "../../types";
import { OldOrderItem } from "./OldOrderItem";

export function OldOrders({ data, loading, error }: Response<Product>) {
  let colorSwitch = true;

  const getColor = () => {
    const color = colorSwitch;
    colorSwitch = !colorSwitch;
    return color;
  };

  if (!data) {
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
        <div className="font-['Open Sans'] text-[14px] underline">Se alle</div>
      </div>
      <div className="py-2">
        <div className="flex flex-col gap-2 min-h-[310px] rounded-[10px] bg-[#F5F5F5] p-5">
          {data.map((item) => (
            <OldOrderItem item={item} color={getColor()}></OldOrderItem>
          ))}
        </div>
      </div>
    </div>
  );
}
