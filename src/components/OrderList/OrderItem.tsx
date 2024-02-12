import { OrderListItem } from "../../Api";

type Props = {
  item: OrderListItem;
  favorite: boolean;
};

export function OrderItem({ item, favorite }: Props) {
  return (
    <>
      {favorite ? (
        <li className="flex place-content-between bg-[#FFFFFF] h-[58px] p-2">
          <div className="flex items-start gap-[13px]">
            <div className="rounded-[3px] w-[50px] h-[50px] bg-contain bg-pillowpattern">
              <img
                className="hover:border-black border-[1px] rounded-md"
                src="/icons/heart.svg"
                onClick={() => {
                  favorite = false;
                }}
                alt="Workflow"
              />
            </div>
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
      ) : (
        <li className="flex place-content-between bg-[#FFFFFF] h-[58px] p-2">
          <div className="flex items-start gap-[13px]">
            <div className="rounded-[3px] w-[50px] h-[50px] bg-contain bg-pillowpattern">
              <img
                className="hover:border-black border-[1px] rounded-md h-[25px] w-[25px]"
                onClick={() => {
                  favorite = true;
                }}
                src="/icons/emptyheart.svg"
                alt="Workflow"
              />
            </div>
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
      )}
    </>
  );
}

// /* image 7 */

// width: 58px;
// height: 58px;

// background: url(image.png);
// border-radius: 3px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
// z-index: 0;
