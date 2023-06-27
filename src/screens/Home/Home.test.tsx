import 'react-native';
import React from 'react';
import { fireEvent, screen } from '@testing-library/react-native';
import { render, waitFor, act } from '~/helpers';
import Home from './index';

const mockData = {
  Search: [
    {
      Title: 'Batman',
      Year: '2005',
      imdbID: '1',
      Type: 'movies',
      Poster: 'https://example.com/coolImage.png',
    },
    {
      Title: 'Spider man',
      Year: '2010',
      imdbID: '2',
      Type: 'movies',
      Poster: 'https://example.com/coolPeterImage.png',
    },
  ],
};

type Props = {
  getMovies: () => void;
  NavigationActions: {
    navigate: () => void;
  };
};

jest.mock(
  '~/services',
  (): Props => ({
    ...jest.requireActual('~/services'),
    getMovies: jest.fn().mockImplementation(() => mockData),
    NavigationActions: {
      navigate: jest.fn(),
    },
  }),
);

describe('Home screen', () => {
  it('should render home screen', async () => {
    render(<Home />);

    expect(await screen.findByTestId('1')).not.toBeNull();
    expect(screen.container).not.toBeNull();
  });

  it('should render home screen with button called', async () => {
    render(<Home />);

    const button = await screen.findByTestId('1');
    fireEvent(button, 'press');

    expect(button).not.toBeNull();
    expect(screen.container).not.toBeNull();
  });
});
