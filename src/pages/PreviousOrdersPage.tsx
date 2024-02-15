import { useGetOldOrders } from "../hooks";
import { Product } from "../types";

type Props = {
  data: Product[];
  loading: boolean;
  error: string;
};

export function PreviousOrderPage() {
  const { data, loading, error } = useGetOldOrders(20);

  if (!data) {
    return <div></div>;
  }

  return (
    <div className="h-screen">
      {" "}
      {data.map((order) => (
        <div>{order.name}</div>
      ))}{" "}
    </div>
  );
}
