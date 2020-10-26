import { IProduct } from './Product';

export interface IProductWithPage {
  products: IProduct[];
  total: number;
  page: number;
}
