export interface ICreateLogBody {
  service: string;
  path: string;
  ip: string;
  uniqueid: string;
  method: string;
  headers: string;
  params: string;
  body: string;
  query: string;
}