import React from 'react';
import { act, cleanup, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  const linkElement = screen.getByText(/l-calendar/i);
  expect(linkElement).toBeInTheDocument();
  // wait some time for the whole app's asynchrous rendering
  await act(
    async () =>
      await new Promise<void>((resolve, reject) => {
        setTimeout(resolve, 500);
      })
  );
});
