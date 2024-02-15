import { Product } from "../types";
import { useFetch } from "./useFetch";

export function useGetOldOrders(amount: number, page: number) {
  const url =
    "https://api.punkapi.com/v2/beers?page=" + page + "&per_page=" + amount;

  return useFetch<Product[]>(url);
}
