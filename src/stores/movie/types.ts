import { MovieProps } from '~/services';

export interface MovieStore {
  movieSelected?: MovieProps;
  updateMovieSelected: (movieSelected: MovieProps) => void;
}
