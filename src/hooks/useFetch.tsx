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

// src/hooks/useStarshipByUrlService.ts

// import { useEffect, useState } from 'react';
// import { Service } from '../types/Service'; // Define your Service type
// import { Starship } from '../types/Starship'; // Define your Starship interface

// const useStarshipByUrlService = (url: string) => {
//   const [result, setResult] = useState<Service<Starship>>({ status: 'loading' });

//   useEffect(() => {
//     if (url) {
//       setResult({ status: 'loading' });
//       fetch(url)
//         .then(response => response.json())
//         .then(response => setResult({ status: 'loaded', payload: response }))
//         .catch(error => setResult({ status: 'error', error }));
//     }
//   }, [url]);

//   return result;
// };

// export default useStarshipByUrlService;
