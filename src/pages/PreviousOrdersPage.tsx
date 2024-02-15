import { PreviousOrder } from "../components";
import { useGetPreviousOrders } from "../hooks";
import { usePagination } from "../hooks/usePagination";

export function PreviousOrderPage() {
  const { Pagination, paginationData } = usePagination(20);
  const { data, loading, error } = useGetPreviousOrders(
    paginationData.first,
    paginationData.page
  );

  if (!data) {
    return <div />;
  }

  return (
    <div className="h-screen flex flex-col items-center p-5">
      {data.map((order) => (
        <PreviousOrder isWhite={true} item={order} />
      ))}

      <Pagination pagesNumber={5} />
    </div>
  );
}
