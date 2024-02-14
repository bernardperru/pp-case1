export interface Response<T> {
  data: T[] | null;
  loading: boolean;
  error: string;
}

export type Product = {
  id: number;
  name: string;
  first_brewed: string;
  attenuation_level: number;
  ph: number;
};
