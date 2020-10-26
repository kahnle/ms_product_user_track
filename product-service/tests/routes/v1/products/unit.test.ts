import { mockProductFindInfoById, mockProductFind, PRODUCT_ID } from './mock';

import supertest from 'supertest';
import app from '../../../../src/app';

import { Types } from 'mongoose';

describe('ProductDetail by id route', () => {
  beforeEach(() => {
    mockProductFindInfoById.mockClear();
  });

  const request = supertest(app);
  const endpoint = '/v1/products/';

  it('Should send error when invalid id is passed', async () => {
    const response = await request.get(endpoint + 'abc');
    expect(response.status).toBe(400);
    expect(response.body.message).toMatch(/must be a single/);
    expect(mockProductFindInfoById).not.toBeCalled();
  });

  it('Should Should send error when product do not exists for id', async () => {
    const response = await request.get(endpoint + new Types.ObjectId().toHexString());
    expect(response.status).toBe(400);
    expect(response.body.message).toMatch(/not exists/);
    expect(mockProductFindInfoById).toBeCalled();
  });

  it('Should Should send success when product exists for id', async () => {
    const response = await request.get(endpoint + PRODUCT_ID.toHexString());
    expect(response.status).toBe(200);
    expect(mockProductFindInfoById).toBeCalled();
  });
});

describe('ProductList', () => {
  beforeEach(() => {
    mockProductFind.mockClear();
  });

  const request = supertest(app);
  const endpoint = '/v1/products/';

  it('Should return array null when pass filter not found', async () => {
    const response = await request.get(endpoint + '?status=notfound');
    expect(response.status).toBe(200);
    expect(response.body.data.products).toEqual([]);
    expect(mockProductFind).toBeCalled();
  });

  it('Should return array prodict when pass query found', async () => {
    const response = await request.get(endpoint + '?query=product');
    expect(response.status).toBe(200);
    expect(response.body.data.products.length).not.toBe(0);
    expect(mockProductFind).toBeCalled();
  });
});
