import { render, screen } from '@testing-library/react';
import { PlayButton } from '../src/components/PlayButton';

it('renders play button', () => {
  render(<PlayButton />);
  expect(screen.getByText(/Jouer/i)).toBeInTheDocument();
});
