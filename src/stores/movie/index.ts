import { create } from 'zustand';
import { MovieProps } from '~/services';
import { MovieStore } from './types';

const useMovieStore = create<MovieStore>(set => ({
  movieSelected: undefined,
  updateMovieSelected: (movieSelected: MovieProps) => set({ movieSelected }),
}));

export { useMovieStore };
