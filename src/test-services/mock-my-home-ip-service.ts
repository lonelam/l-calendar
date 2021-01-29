import { injectable } from 'inversify';
import { MyHomeIpService } from '../services/my-home-ip-service';

export class MockMyHomeIpService extends MyHomeIpService {
  constructor() {
    super();
  }

  createTime = Date.now();

  mockIp = '123.123.564.123';

  async getMyhomeIp(): Promise<string> {
    return this.mockIp;
  }
}
