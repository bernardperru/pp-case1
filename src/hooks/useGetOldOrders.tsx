import { Product } from "../types";
import { useFetch } from "./useFetch";

export function useGetOldOrders(amount: number) {
  const url = "https://api.punkapi.com/v2/beers?page=1&per_page=" + amount;

  return useFetch<Product[]>(url);
}
