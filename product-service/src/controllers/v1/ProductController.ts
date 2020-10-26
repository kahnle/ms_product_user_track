import { Request, Response } from 'express';
import Logger from '../../libs/Logger';
import { SuccessResponse, InternalErrorResponse, BadRequestResponse } from '../../libs/ApiResponse';
import { get, controller, post, bodyValidator } from '../../decorators';
import ProductRepo from '../../repository/ProductRepo';
import { Types } from 'mongoose';
import { ISomeObject, IProduct } from '../../types';
import { getKeyValue } from '../../utils/object.util';

@controller('/v1')
export default class ProductController {
  @get('/products')
  async list(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string);
      const limit = parseInt(req.query.limit as string);
      const status = req.query.status;
      const query: any = req.query.query || null;
      const filter: ISomeObject = {};
      if (status) {
        filter.status = status;
      }
      const sortObj: ISomeObject = {};
      if (req.query.sort) {
        const sort = req.query.sort as string;
        const listDataSort = sort.split(',');
        listDataSort.forEach((data) => {
          if (data.indexOf('-') >= 0) sortObj[data.substr(1)] = -1;
        });
      }
      const products = await ProductRepo.find(limit, page, filter, query, sortObj);
      return new SuccessResponse('success', products).send(res);
    } catch (error) {
      return new InternalErrorResponse(error.message).send(res);
    }
  }

  @get('/products/:id')
  async productDetail(req: Request, res: Response) {
    try {
      const productId = new Types.ObjectId(req.params.id);
      const product = await ProductRepo.findInfoById(productId);
      if (!product) {
        return new BadRequestResponse('product not exists').send(res);
      } else {
        return new SuccessResponse('success', product).send(res);
      }
    } catch (error) {
      return new BadRequestResponse(error.message).send(res);
    }
  }
}
