import { useState } from "react";
import { Response } from "../types";
import { useFetch } from "./useFetch";

export type Product = {
  id: number;
  name: string;
  first_brewed: string;
  attenuation_level: number;
  ph: number;
};

export function useGetOrder() {
  const [response, setResponse] = useState<Response<Product>>({
    data: null,
    error: "",
    loading: true,
  });
  const url = "https://api.punkapi.com/v2/beers?page=1&per_page=7";

  setResponse(useFetch<Product>(url));

  return response;
}
