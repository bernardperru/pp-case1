import { useState } from "react";
import { Product, Response } from "../types";
import { useFetch } from "./useFetch";

export function useGetFavorites() {
  const [response, setResponse] = useState<Response<Product>>({
    data: null,
    error: "",
    loading: true,
  });
  const url = "https://api.punkapi.com/v2/beers?page=1&per_page=5";

  setResponse(useFetch<Product>(url));

  return response;
}
