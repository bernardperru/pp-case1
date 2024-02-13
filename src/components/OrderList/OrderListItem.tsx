import { useState } from "react";
import { Product } from "../../hooks/useGetOrder";

type Props = {
  item: Product;
  favorite: boolean;
  color: boolean;
};

export function OrderListItem({ item, favorite, color }: Props) {
  const [favoriteItem, setFavoriteItem] = useState(favorite);

  return (
    <li
      className={
        color
          ? "flex place-content-between bg-[#FFFFFF] h-[58px] pr-2"
          : "flex place-content-between h-[58px] pr-2"
      }
    >
      <div className="flex items-center justify-center gap-[13px]">
        <div className="rounded-[3px] w-[50px] h-[50px] bg-contain bg-pillowpattern">
          <img
            className="hover:border-black border-[1px] rounded-md h-[25px] w-[25px]"
            src={favoriteItem ? "/icons/heart.svg" : "/icons/emptyheart.svg"}
            onClick={() => {
              setFavoriteItem(!favoriteItem);
            }}
            alt="Workflow"
          />
        </div>
        <div className="truncate w-[200px] flex flex-col  justify-center">
          <p className="uppercase font-medium text-[16px] pt-1 text-[#261F18]">
            {item.name}
          </p>
          <p className="font-['Open Sans'] font-[400] text-[14px] text-[#261F18]">
            {item.id}
          </p>
        </div>
      </div>
      <div className="flex gap-[60px] font-[400] text-[14px] text-[#261F18] items-center justify-center">
        <p className="w-4">{item.attenuation_level}</p>
        <p className="w-10">{item.first_brewed}</p>
        <p className="w-4">{item.ph}</p>
      </div>
    </li>
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
