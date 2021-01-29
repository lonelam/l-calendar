import { findByText, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Home from '.';
import { rootContainer } from '../../inversify.config';
import { MyHomeIpService } from '../../services/my-home-ip-service';
import { MockMyHomeIpService } from '../../test-services/mock-my-home-ip-service';

beforeAll(() => {
  rootContainer.bind('mock_ip').toConstantValue('1.1.1.1');
  rootContainer.bind(MyHomeIpService).to(MockMyHomeIpService);
});
test('render home', async () => {
  render(<Home />);
  const ipAddrNode = document.querySelector('.ip-addr');
  expect(ipAddrNode).not.toBeNull();
  await act(async () => {
    const findResult = await findByText(ipAddrNode as HTMLElement, '1.1.1.1');
    expect(findResult).toContainHTML('1.1.1.1');
  });
});
