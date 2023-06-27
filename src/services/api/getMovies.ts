import Config from 'react-native-config';
import api from './api';
import { MoviesProps } from './moviesType';

type Props = MoviesProps;

export const getMovies = async (): Promise<Props | string> => {
  try {
    const url = `?apikey=${Config.API_KEY ?? ''}&s=batman`;

    const response = await api.get<Props>(url);
    return response.data;
  } catch (error: unknown) {
    return error as string;
  }
};
