import {
  FavoriteItem,
  FavoriteProductItem,
  FavItemProps,
} from "./FavoriteProductItem";

type Props = {
  favoriteItems: FavoriteItem[];
};

export function FavoriteProductList({ favoriteItems }: Props) {
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
        <div className="font-[Open Sans] text-[14px] underline">Redigér</div>
      </div>
      <div className="py-2">
        <div className="min-h-[310px] rounded-[10px] bg-[#F5F5F5] p-4">
          <div className="flex flex-col items-start py-2 gap-[7px]">
            {favoriteItems.map((item) => (
              <FavoriteProductItem item={item}></FavoriteProductItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
