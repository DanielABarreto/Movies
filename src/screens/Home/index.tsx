import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import translate from '~/locales';
import { NavigationActions } from '~/services';
import { getMovies } from '~/services';
import { MovieProps, MoviesProps } from '~/services';
import { useMovieStore } from '~/stores';
import * as S from './styles';

const HomeScreen = () => {
  const { navigate } = NavigationActions;
  const [movies, setMovies] = useState<MoviesProps | undefined>();
  const updateMovieSelected = useMovieStore(state => state.updateMovieSelected);

  const CustomItem = (item: MovieProps) => {
    return (
      <S.Card testID={item.imdbID} onPress={() => onPress(item)}>
        <S.ImageMovies
          source={{
            uri: item.Poster,
          }}
        />
      </S.Card>
    );
  };

  const onPress = (item: MovieProps) => {
    updateMovieSelected(item);
    navigate('DETAILS');
  };

  const fetch = async () => {
    const response = await getMovies();

    typeof response !== 'string' && setMovies(response);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <S.Wrapper>
      <S.ImagePoster
        source={{
          uri: 'https://desacordoiscsp.files.wordpress.com/2021/10/thebatman-04_ccexpress.jpeg',
        }}
      />
      <S.Text>{translate('movies')}</S.Text>
      <FlatList
        data={movies?.Search}
        renderItem={({ item }) => CustomItem(item)}
        keyExtractor={item => `${item.imdbID}`}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </S.Wrapper>
  );
};

export default HomeScreen;
