import { Link } from "react-router-dom";
import { Product } from "../../types";
import { PreviousOrder } from "./PreviousOrder";

type previousOrderProp = {
  data: Product[] | undefined;
  loading: boolean;
  error: string;
};

export function PreviousOrderList({ data, loading, error }: previousOrderProp) {
  if (!data) {
    return <div />;
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
        <Link
          to={"/prev_orders"}
          className="font-['Open Sans'] text-[14px] underline"
        >
          Se alle
        </Link>
      </div>
      <div className="py-2">
        <div className="flex flex-col gap-2 min-h-[310px] rounded-[10px] bg-[#F5F5F5] p-5">
          {data.map((item, index) => (
            <PreviousOrder key={index} item={item} isWhite={index % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}
