import { inject } from 'inversify';
import { MyHomeIpService } from '../services/my-home-ip-service';

export class MockMyHomeIpService extends MyHomeIpService {
  createTime = Date.now();

  @inject('mock_ip')
  mockIp = '123.123.564.123';

  async getMyhomeIp(): Promise<string> {
    return this.mockIp;
  }
}
