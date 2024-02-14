import { useEffect, useState } from "react";
import { Response } from "../types";

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

  useEffect(() => {
    const get = async () => {
      const request = await fetch(url, {
        method: "GET",
      });
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
