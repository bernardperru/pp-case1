import { Product } from '../../types';

type Props = {
	item: Product;
	isWhite: boolean;
};

export function PreviousOrder({ item, isWhite }: Props) {
	return (
		<div
			className={
				isWhite ? 'flex place-content-between bg-white p-[5px] h-[33px]' : 'flex place-content-between p-[5px] h-[33px]'
			}>
			<div className="flex flex-row gap-[20px]">
				<div className="uppercase text-center font-[400] text-[14px] text-[#261F18]">{item.first_brewed}</div>
				<div className="uppercase font-bold text-[14px] text-[#261F18]">#{item.attenuation_level}</div>
			</div>
			<div className="flex flex-row gap-[20px]">
				<div className="font-['Open Sans'] text-[14px] underline">Se ordre</div>
				<div className="font-['Open Sans'] text-[14px] underline">Genbestil</div>
			</div>
		</div>
	);
}
