import { useEffect, useState } from "react";

interface Response<T> {
  data: T | null;
  loading: boolean;
  error: string;
}

export function useFetch<T>(url: string) {
  const [response, setResponse] = useState<Response<T>>({
    data: null,
    error: "",
    loading: true,
  });

  useEffect(() => {
    const get = async () => {
      const request = await fetch(url, { method: "GET" });
      const response = (await request.json()) as T;
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
