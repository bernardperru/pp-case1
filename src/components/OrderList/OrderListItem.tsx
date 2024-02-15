import { CartItem, useCart } from '../../context/CartContext';

type Props = {
	item: CartItem;
	color: boolean;
};

export function OrderListItem({ item, color }: Props) {
	const { addFavoriteItem, isFavorite, removeFavoriteItem, getItemQuantity } = useCart();

	return (
		<li
			className={
				color ? 'flex place-content-between bg-[#FFFFFF] h-[58px] pr-2' : 'flex place-content-between h-[58px] pr-2'
			}>
			<div className="flex items-center justify-center gap-[13px]">
				<div className="rounded-[3px] w-[50px] h-[50px] bg-contain bg-pillowpattern">
					{isFavorite(item.product.id) ? (
						<img
							className="hover:border-black border-[1px] rounded-md h-[25px] w-[25px]"
							src={'/icons/heart.svg'}
							onClick={() => {
								removeFavoriteItem(item.product.id);
							}}
							alt="Workflow"
						/>
					) : (
						<img
							className="hover:border-black border-[1px] rounded-md h-[25px] w-[25px]"
							src={'/icons/emptyheart.svg'}
							onClick={() => {
								addFavoriteItem(item.product);
							}}
							alt="Workflow"
						/>
					)}
				</div>
				<div className="truncate w-[200px] flex flex-col  justify-center">
					<p className="uppercase font-medium text-[16px] pt-1 text-[#261F18]">{item.product.name}</p>
					<p className="font-['Open Sans'] font-[400] text-[14px] text-[#261F18]">{item.product.id}</p>
				</div>
			</div>
			<div className="flex gap-[60px] font-[400] text-[14px] text-[#261F18] items-center justify-center">
				<p className="w-4">{getItemQuantity(item.product.id)}</p>
				<p className="w-10">{item.product.first_brewed}</p>
				<p className="w-4">{item.product.ph}</p>
			</div>
		</li>
	);
}
