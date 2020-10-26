import express from 'express';
import asyncHandler from '../../../helpers/asyncHandler';
import LogRepo from '../../../database/repository/LogRepo';
import Log from '../../../database/model/Log';
import { SuccessResponse } from '../../../libs/ApiResponse';
import validator, { ValidationSource } from '../../../helpers/validator';
import schema from './schema';

const router = express.Router();

router.post(
  '/',
  validator(schema.create),
  asyncHandler(async (req, res) => {
    const SaveLog = await LogRepo.create({
      service: req.body.service,
      path: req.body.path,
      ip: req.body.ip,
      uniqueid: req.body.uniqueid,
      method: req.body.method,
      headers: req.body.headers,
      params: req.body.params,
      body: req.body.body,
      res_status: req.body.res_status,
    } as Log);

    new SuccessResponse('saving log success', SaveLog).send(res);
  }),
);

export default router;