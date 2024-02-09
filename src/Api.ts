export type BeerReponse = {
  id: number;
  name: string;
  first_brewed: string;
};

export class Api {
  public async getBeer() {
    const url = "https://api.punkapi.com/v2/beers";
    const beerRequest = await fetch(url, { method: "GET" });
    const beerResponse = (await beerRequest.json()) as BeerReponse[];

    return beerResponse;
  }
}
