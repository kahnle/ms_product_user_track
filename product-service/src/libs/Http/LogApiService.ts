import { AxiosRequestConfig } from 'axios';
import HttpClient from './HttpClient';
import { ICreateLogBody } from '../../types';
import { logServiceUrl } from '../../config';

export class LogServiceApi extends HttpClient {
  public constructor() {
    super(logServiceUrl?logServiceUrl:'');

    this._initializeRequestInterceptor();
  }

  private _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this._handleRequest,
      this._handleError,
    );
  };

  private _handleRequest = (config: AxiosRequestConfig) => {
    return config;
  };

  public sendLog = (body: ICreateLogBody) => this.instance.post('/v1/log', body);
}
