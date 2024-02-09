import { OrderListItem } from "../../Api";

type Props = {
  item: OrderListItem;
};

export function OrderItem({ item }: Props) {
  return <div>{item.name}</div>;
}
