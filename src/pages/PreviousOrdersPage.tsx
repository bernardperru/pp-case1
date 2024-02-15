import { PreviousOrder } from "../components";
import { useGetOldOrders } from "../hooks";
import { usePagination } from "../hooks/usePagination";
import { Product } from "../types";

export function PreviousOrderPage() {
  const { Pagination, paginationData } = usePagination(5);
  const { data, loading, error } = useGetOldOrders(
    paginationData.first,
    paginationData.page
  );

  if (!data) {
    return <div></div>;
  }

  return (
    <div className="h-screen flex flex-col items-center p-5">
      {data.map((order) => (
        <PreviousOrder color={true} item={order}></PreviousOrder>
      ))}

      <Pagination pagesNumber={5}></Pagination>
    </div>
  );
}
