import React from 'react';
import { render } from '@testing-library/react';
import PlayButton from '../../renderer/src/components/PlayButton';

test('renders play button', () => {
  const { getByText } = render(<PlayButton />);
  expect(getByText('Jouer')).toBeTruthy();
});
