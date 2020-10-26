export interface IProduct {
  name: string;
  description: string;
  sku: string;
  categories: string;
  image: string;
  price: number;
  qty: number;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
}
