import { IProduct } from '../../../../src/types/Product';
import Product from '../../../../src/model/Product';
import { Types } from 'mongoose';
import { IProductWithPage } from '../../../../src/types';
import ProductController from '../../../../src/controllers/v1/ProductController';

jest.unmock('../../../../src/repository/ProductRepo');

export const PRODUCT_ID = new Types.ObjectId();

export const mockProductFindInfoById = jest.fn(
  async (ida: Types.ObjectId): Promise<Product | null> => {
    if (PRODUCT_ID.equals(ida))
      return {
        _id: PRODUCT_ID,
        status: 'publish',
      } as Product;
    return null;
  },
);

export const FILTER_PUBLISH_STATUS = 'publish';
export const mockProductFind = jest.fn(
  async (
    limit: number,
    page: number,
    filter: any,
    query: string | null,
    sort: {},
  ): Promise<IProductWithPage> => {
    if (filter.status === 'publish') {
      return {
        products: [
          {
            _id: new Types.ObjectId(),
            name: 'product name one',
            description: 'production description one',
            sku: 'sku1',
            categories: 'cate1,cate2',
            image: 'http://image1.jpeg',
            price: 10,
            qty: 10,
            status: 'publish',
          } as Product,
          {
            _id: new Types.ObjectId(),
            name: 'product name three',
            description: 'production description three',
            sku: 'sku3',
            categories: 'cate1',
            image: 'http://image3.jpeg',
            price: 30,
            qty: 30,
            status: 'publish',
          } as Product,
          {
            _id: new Types.ObjectId(),
            name: 'product name five',
            description: 'production description five',
            sku: 'sku5',
            categories: 'cate1,cate2',
            image: 'http://image1.jpeg',
            price: 40,
            qty: 24,
            status: 'publish',
          } as Product,
        ],
        total: 3,
        page: page,
      };
    }

    if (filter.status === 'notfound') {
      return {
        products: [],
        total: 0,
        page: page,
      };
    }

    if ((query = 'product')) {
      return {
        products: [
          {
            _id: new Types.ObjectId(),
            name: 'product name one',
            description: 'production description one',
            sku: 'sku1',
            categories: 'cate1,cate2',
            image: 'http://image1.jpeg',
            price: 10,
            qty: 10,
            status: 'publish',
          } as Product,
          {
            _id: new Types.ObjectId(),
            name: 'product name two',
            description: 'production description two',
            sku: 'sku2',
            categories: 'cate1,cate2,cate3',
            image: 'http://image2.jpeg',
            price: 20,
            qty: 20,
            status: 'disable',
          } as Product,
          {
            _id: new Types.ObjectId(),
            name: 'product name three',
            description: 'production description three',
            sku: 'sku3',
            categories: 'cate1',
            image: 'http://image3.jpeg',
            price: 30,
            qty: 30,
            status: 'publish',
          } as Product,
          {
            _id: new Types.ObjectId(),
            name: 'product name four',
            description: 'production description four',
            sku: 'sku4',
            categories: 'cate1,cate2,cate4',
            image: 'http://image4.jpeg',
            price: 25,
            qty: 20,
            status: 'disable',
          } as Product,
          {
            _id: new Types.ObjectId(),
            name: 'product name five',
            description: 'production description five',
            sku: 'sku5',
            categories: 'cate1,cate2',
            image: 'http://image1.jpeg',
            price: 40,
            qty: 24,
            status: 'publish',
          } as Product,
          {
            _id: new Types.ObjectId(),
            name: 'product name six',
            description: 'production description six',
            sku: 'sku6',
            categories: 'cate1,cate2,cate6',
            image: 'http://image6.jpeg',
            price: 52,
            qty: 24,
            status: 'disable',
          } as Product,
        ],
        total: 6,
        page: page,
      };
    }

    if ((query = 'notfound')) {
      return {
        products: [],
        total: 0,
        page: page,
      };
    }

    return {
      products: [
        {
          _id: new Types.ObjectId(),
          name: 'product name one',
          description: 'production description one',
          sku: 'sku1',
          categories: 'cate1,cate2',
          image: 'http://image1.jpeg',
          price: 10,
          qty: 10,
          status: 'publish',
        } as Product,
        {
          _id: new Types.ObjectId(),
          name: 'product name two',
          description: 'production description two',
          sku: 'sku2',
          categories: 'cate1,cate2,cate3',
          image: 'http://image2.jpeg',
          price: 20,
          qty: 20,
          status: 'disable',
        } as Product,
        {
          _id: new Types.ObjectId(),
          name: 'product name three',
          description: 'production description three',
          sku: 'sku3',
          categories: 'cate1',
          image: 'http://image3.jpeg',
          price: 30,
          qty: 30,
          status: 'publish',
        } as Product,
        {
          _id: new Types.ObjectId(),
          name: 'product name four',
          description: 'production description four',
          sku: 'sku4',
          categories: 'cate1,cate2,cate4',
          image: 'http://image4.jpeg',
          price: 25,
          qty: 20,
          status: 'disable',
        } as Product,
        {
          _id: new Types.ObjectId(),
          name: 'product name five',
          description: 'production description five',
          sku: 'sku5',
          categories: 'cate1,cate2',
          image: 'http://image1.jpeg',
          price: 40,
          qty: 24,
          status: 'publish',
        } as Product,
        {
          _id: new Types.ObjectId(),
          name: 'product name six',
          description: 'production description six',
          sku: 'sku6',
          categories: 'cate1,cate2,cate6',
          image: 'http://image6.jpeg',
          price: 52,
          qty: 24,
          status: 'disable',
        } as Product,
      ],
      total: 6,
      page: page,
    };
  },
);

jest.mock('../../../../src/repository/ProductRepo', () => ({
  get findInfoById() {
    return mockProductFindInfoById;
  },
  get find() {
    return mockProductFind;
  },
}));
