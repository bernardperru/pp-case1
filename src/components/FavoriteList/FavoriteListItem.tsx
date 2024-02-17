import { useCart } from '../../context/CartContext';
import { Product } from '../../types';

export type FavItemProps = {
	item: Product;
	edit: boolean;
};

export function FavoriteListItem({ item, edit }: FavItemProps) {
	const { addToCart, removeFavoriteItem } = useCart();

	return (
		<div className="flex flex-row gap-[13px]">
			<div className="rounded-[3px] w-[50px] h-[50px] bg-pillowpattern bg-contain" />
			<div className="truncate w-[200px]">
				<p className="uppercase font-medium text-[16px] text-[#261F18]">{item.name}</p>
				<p className="font-[400] text-[14px] text-[#261F18]">{item.id}</p>
			</div>
			{edit ? (
				<button className="bg-[#C4C9C1] rounded-[24px] px-2 h-[33px]" onClick={() => removeFavoriteItem(item.id)}>
					<img className="w-[20px] h-[20px]" src={'/icons/removefromfavorites.svg'} alt="Workflow" />
				</button>
			) : (
				<button className="bg-[#C4C9C1] rounded-[24px] px-2 h-[33px]" onClick={() => addToCart(item)}>
					<img className="w-[20px] h-[20px]" src={'/icons/addtolist.svg'} alt="Workflow" />
				</button>
			)}
		</div>
	);
}
