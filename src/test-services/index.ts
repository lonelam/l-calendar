import { rootContainer } from '../inversify.config';
import { MyHomeIpService } from '../services/my-home-ip-service';
import { MockMyHomeIpService } from './mock-my-home-ip-service';

export function loadAllMockServices() {
  rootContainer.bind('mock_ip').toConstantValue('1.1.1.1');
  rootContainer.bind(MyHomeIpService).to(MockMyHomeIpService);
}
