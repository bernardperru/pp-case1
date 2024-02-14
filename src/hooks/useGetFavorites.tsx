import { useEffect, useState } from "react";
import { Response } from "../types";
import { Product } from "./useGetOrder";

export function useGetFavorites() {
  const [response, setResponse] = useState<Response<Product>>({
    data: null,
    error: "",
    loading: true,
  });
  const url = "https://api.punkapi.com/v2/beers?page=1&per_page=5";

  useEffect(() => {
    const get = async () => {
      const request = await fetch(
        "https://api.punkapi.com/v2/beers?page=1&per_page=5",
        { method: "GET" }
      );
      const response = await request.json();
      setResponse({ error: "", data: response, loading: false });
    };

    try {
      get();
    } catch (error) {
      setResponse({ data: null, error: "error", loading: false });
    }
  }, [url]);

  return response;
}
