import { render, screen } from '@testing-library/react';
import App from './App';
import LandingPage from './components/LandingPage'
test('renders learn react link', () => {
  render(<LandingPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
