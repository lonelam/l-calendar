import { cleanup, findByText, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Home from '.';

test('render home', async () => {
  render(<Home />);
  const ipAddrNode = document.querySelector('.ip-addr');
  expect(ipAddrNode).not.toBeNull();
  await act(async () => {
    const findResult = await findByText(ipAddrNode as HTMLElement, '1.1.1.1');
    expect(findResult).toContainHTML('1.1.1.1');
  });
});
