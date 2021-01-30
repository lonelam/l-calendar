import axios from 'axios';
import { injectable } from 'inversify';

@injectable()
export class MyHomeIpService {
  async getMyhomeIp(): Promise<string> {
    try {
      const resp = await axios.get<string>('https://api.myip.com');
      if (resp.status === 200) {
        return JSON.parse(resp.data).ip;
      }
    } catch {
    } finally {
      return '-';
    }
  }
}
