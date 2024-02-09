export type BeerReponse = {
  id: number;
  name: string;
  first_brewed: string;
};

export type OrderListItem = {
  id: number;
  name: string;
  first_brewed: string;
  attenuation_level: number;
  ph: number;
};

export type FavoriteItem = {
  id: number;
  name: string;
};

export class Api {
  public async getBeer(): Promise<BeerReponse[]> {
    const url = "https://api.punkapi.com/v2/beers";
    const beerRequest = await fetch(url, { method: "GET" });
    const beerResponse = (await beerRequest.json()) as BeerReponse[];

    return beerResponse;
  }

  public async getOrderListBeer(): Promise<OrderListItem[]> {
    const url = "https://api.punkapi.com/v2/beers";
    const beerRequest = await fetch(url, { method: "GET" });
    const beerResponse = (await beerRequest.json()) as OrderListItem[];

    return beerResponse;
  }

  public async getFavorites(): Promise<FavoriteItem[]> {
    const url = "https://api.punkapi.com/v2/beers";
    const beerRequest = await fetch(url, { method: "GET" });
    const beerResponse = (await beerRequest.json()) as FavoriteItem[];

    return beerResponse;
  }
}
