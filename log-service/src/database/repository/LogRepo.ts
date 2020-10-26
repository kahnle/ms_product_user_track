import Log, { LogModel } from '../model/Log';

export default class LogRepo {
  public static async create(log: Log): Promise<Log> {
    const now = new Date();
    log.createdAt = now;
    log.updatedAt = now;
    const createdLog = await LogModel.create(log);
    return createdLog.toObject();
  }
}