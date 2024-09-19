import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders homepage header', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // Find the text that actually exists in your app
  const headerElement = screen.getByText(/Breaking the Silence on Gambling Addiction Among Young Men/i);
  expect(headerElement).toBeInTheDocument();
});
