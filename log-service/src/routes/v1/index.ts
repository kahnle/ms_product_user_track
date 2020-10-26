import express from 'express';
import log from './log';

const router = express.Router();

router.use('/log', log);

export default router;