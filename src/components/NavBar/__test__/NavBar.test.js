import { render, screen } from '@testing-library/react';
import NavBar from '../NavBar';

test('Ensures Home link in NavBar', () => {
  render(<NavBar />);
  const navBarElement = screen.getByText(/Home/i);
  expect(navBarElement).toBeInTheDocument();
});
