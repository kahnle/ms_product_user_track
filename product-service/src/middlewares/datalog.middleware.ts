import mung from 'express-mung';
import { serviceName } from '../config';

export const LogMiddleware = (service: any) => {
  return mung.json(function transform(body: any, req, res) {
    const data = {
      service: serviceName,
      path: req.url,
      ip: req.ip ? req.ip : '',
      uniqueid: req.session ? req.session.userId : '',
      method: req.method,
      headers: JSON.stringify(req.headers),
      params: req.params ? JSON.stringify(req.params) : '',
      body: req.body ? JSON.stringify(req.body) : '',
      query: req.query ? JSON.stringify(req.query) : '',
      res_status: body.status ? body.status : '',
    };
    service.sendLog(data).catch((error: any) => {
      console.log(error);
    });
    return body;
  });
};
