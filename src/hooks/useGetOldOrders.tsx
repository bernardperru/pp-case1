import { useState } from "react";
import { Response } from "../types";

import { Product } from "./useGetOrder";
import { useFetch } from "./useFetch";

export function useGetOldOrders() {
  const [response, setResponse] = useState<Response<Product>>({
    data: null,
    error: "",
    loading: true,
  });
  const url = "https://api.punkapi.com/v2/beers?page=1&per_page=7";

  setResponse(useFetch<Product>(url));

  return response;
}
