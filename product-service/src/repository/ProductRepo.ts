import Product, { ProductModel } from '../model/Product';
import { Types } from 'mongoose';
import { IProductWithPage } from '../types';
import { pagingLimit } from '../config';

export default class ProductRepo {
  public static async find(
    limit: number,
    page: number,
    filter: {},
    query: string | null,
    sort: {},
  ): Promise<IProductWithPage> {
    if (!page) {
      page = 1;
    }
    if (!limit) {
      limit = parseInt(pagingLimit ? pagingLimit : '10');
    }

    let productList: Product[] = [];
    let productCount: Product[] = [];
    if (query) {
      productList = await ProductModel.find({
        $and: [{ $text: { $search: query } }, { ...filter }],
      })
        .skip(limit * (page - 1))
        .limit(limit)
        .sort({ ...sort })
        .lean<Product>()
        .exec();
      productCount = await ProductModel.find({
        $and: [{ $text: { $search: query } }, { ...filter }],
      });
    } else {
      productList = await ProductModel.find({ ...filter })
        .skip(limit * (page - 1))
        .limit(limit)
        .sort({ ...sort })
        .lean<Product>()
        .exec();
      productCount = await ProductModel.find({ ...filter });
    }
    return {
      products: productList,
      total: productCount.length,
      page: page,
    };
  }

  public static findInfoById(id: Types.ObjectId): Promise<Product | null> {
    return ProductModel.findOne({ _id: id }).lean<Product>().exec();
  }
}
