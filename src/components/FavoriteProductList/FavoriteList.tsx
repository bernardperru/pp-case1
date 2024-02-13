import { useState } from "react";
import {
  FavoriteItem,
  FavoriteProductItem,
  FavItemProps,
} from "./FavoriteProductItem";

type Props = {
  favoriteItems: FavoriteItem[];
  interact: () => void;
};

export function FavoriteList({ favoriteItems }: Props) {
  const [edit, setEdit] = useState(false);
  const [list, setList] = useState(favoriteItems);

  const removeFromFavorites = (itemToBeRemoved: FavoriteItem) => {
    setList(list.filter((item) => item.id !== itemToBeRemoved.id));
    //should make a call to the api also
  };

  const addToOrder = (itemToBeRemoved: FavoriteItem) => {
    //should increase the orderlist
  };

  return (
    <div className="w-[350px]">
      <div className="flex place-content-between items-center">
        <div className="flex items-center gap-3 ">
          <img
            className="w-[25px] h-[25px] "
            src="/icons/handsheart.svg"
            alt="Workflow"
          />
          <div className=" uppercase font-medium text-[16px]">
            favorit produkter
          </div>
        </div>
        {edit ? (
          <button
            className="font-['Open Sans'] text-[14px] underline"
            onClick={() => setEdit(false)}
          >
            Gem
          </button>
        ) : (
          <button
            className="font-[Open Sans] text-[14px] underline"
            onClick={() => setEdit(true)}
          >
            Redigér
          </button>
        )}
      </div>
      <div className="py-2">
        <div className="min-h-[310px] rounded-[10px] bg-[#F5F5F5] p-4">
          <div className="flex flex-col items-start py-2 gap-[7px]">
            {list.map((item) => (
              <FavoriteProductItem
                item={item}
                edit={edit}
                remove={removeFromFavorites}
                add={addToOrder}
              ></FavoriteProductItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
