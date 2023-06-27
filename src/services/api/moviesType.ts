export type MoviesProps = {
  Search: MovieProps[];
};

export type MovieProps = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};
