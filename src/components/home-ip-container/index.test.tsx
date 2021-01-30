import { render, findByText } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import HomeIpContainer from '.';

test('render ip container with mock ip', async () => {
  render(<HomeIpContainer />);
  const ipAddrNode = document.querySelector('.ip-addr');
  expect(ipAddrNode).not.toBeNull();
  await act(async () => {
    const findResult = await findByText(ipAddrNode as HTMLElement, '1.1.1.1');
    expect(findResult).toContainHTML('1.1.1.1');
  });
});
