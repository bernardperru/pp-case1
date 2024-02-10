import { useEffect, useState } from "react";
import { Api, OrderListItem } from "../../Api";
import { OrderItem } from "./OrderItem";
import { useFetch } from "../../hooks/useFetch";

export function OrderList() {
  const { data, loading, error } = useFetch<OrderListItem[]>(
    "https://api.punkapi.com/v2/beers"
  );
  const [listLength, setListLength] = useState(4);

  const take = (amount: number): OrderListItem[] => {
    if (data) {
      const array = [...data];
      return array.slice(0, amount);
    }
    return [];
  };

  if (loading) {
    return <>loading</>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div></div>;
  }

  if (!data) {
    return <div></div>;
  }

  return (
    //group11
    <div className="w-[672px] h-fit">
      {/*frame 40*/}
      <div className="">
        {/*frame 42*/}
        <div className="flex place-content-between items-center w-[660px]">
          {/*frame 30*/}
          <div className="flex items-center gap-3 ">
            <img
              className="w-[25px] h-[25px] "
              src="/icons/list1.svg"
              alt="Workflow"
            />
            <div className=" uppercase font-medium text-[16px]">
              Bestillingsliste
            </div>
          </div>
          <div className="font-[Open Sans] text-[14px] underline">
            Gå til bestillingslisten
          </div>
        </div>
      </div>
      {/*group10*/}
      <div className="py-2">
        {/*rectangle*/}
        <div className="w-[672px] min-h-[310px] rounded-[10px] bg-[#F5F5F5] p-4">
          <div className="flex place-content-between">
            {/*frame41*/}
            <div className="p-[3px] bg-[#F1ECE6] rounded-[2px] w-fit">
              <div className="font-[Open Sans] text-[12px] truncate">
                {data.length} produkter
              </div>
            </div>
            {/*frame50*/}
            <div className="p-[3px] bg-[#F1ECE6] rounded-[2px] max-w-[110px]">
              <div className="font-[Open Sans] text-[12px] truncate">
                total: 4000 dkk
              </div>
            </div>
          </div>
          <div className="flex-col items-start py-2 gap-[7px]">
            {take(listLength).map((item) => (
              <OrderItem item={item}></OrderItem>
            ))}
          </div>
        </div>
      </div>
      <div className="flex place-content-center">
        {listLength === 4 ? (
          <button
            className="bg-[#CFCCC5] rounded-[23px] w-[95px] h-[35px] text-center"
            onClick={() => {
              setListLength(data.length);
            }}
          >
            vis alle
          </button>
        ) : (
          <button
            className="bg-[#CFCCC5] rounded-[23px] w-[95px] h-[35px] text-center"
            onClick={() => {
              setListLength(4);
            }}
          >
            vis færre
          </button>
        )}
      </div>
    </div>
  );
}

// /* Frame 11 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 6px 20px;
// gap: 10px;

// position: absolute;
// width: 95px;
// height: 35px;
// left: 529px;
// top: 560px;

// background: #CFCCC5;
// border-radius: 23px;

// /* Vis alle */

// width: 37px;
// height: 23px;

// font-family: 'Oswald';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 23px;
// /* identical to box height, or 164% */

// color: #6A474C;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Vector */

// width: 8px;
// height: 4px;

// border: 1.25px solid #6A474C;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;
