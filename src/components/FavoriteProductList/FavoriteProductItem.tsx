export type FavoriteItem = {
  id: number;
  name: string;
};

type Props = {
  item: FavoriteItem;
};

export function FavoriteProductItem({ item }: Props) {
  return (
    <div className="flex items-start gap-[13px]">
      <div className="rounded-[3px] w-[50px] h-[50px] bg-slate-500"></div>
      <div className="p-0 truncate w-[200px]">
        <p className="uppercase font-medium text-[16px] pt-1 text-[#261F18]">
          {item.name}
        </p>
        <p className="font-sans font-[400] text-[14px] text-[#261F18]">
          {item.id}
        </p>
      </div>
    </div>
  );
}
