import { OrderListItem } from "../../Api";

type Props = {
  item: OrderListItem;
};

export function OrderItem({ item }: Props) {
  return (
    <div className="flex gap-2">
      <div>{item.name}</div>
      <div>{item.first_brewed}</div>
      <div>{item.ph}</div>
      <div>{item.attenuation_level}</div>
    </div>
  );
}
