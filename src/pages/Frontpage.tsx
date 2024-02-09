import { useEffect, useState } from "react";
import { Api, BeerReponse } from "../Api";

export function FrontPage() {
  const [data, setData] = useState<BeerReponse[]>();
  const api = new Api();

  useEffect(() => {
    const getBeers = async () => {
      const beer = await api.getBeer();
      setData(beer);
    };
    if (!data) {
      getBeers();
    }
  });

  if (!data) {
    return <div></div>;
  }

  return (
    <div className="pl-60">
      {data.map((beer) => (
        <div>{beer.name}</div>
      ))}
    </div>
  );
}
