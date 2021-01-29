import axios from 'axios';
import { injectable } from 'inversify';
import { rootContainer } from '../inversify.config';

@injectable()
export class MyHomeIpService {
  constructor() {}

  async getMyhomeIp(): Promise<string> {
    try {
      const resp = await axios.get<string>('https://laizn.com/ip');
      if (resp.status === 200) {
        return resp.data;
      }
    } catch {
    } finally {
      return '-';
    }
  }
}
