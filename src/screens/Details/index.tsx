import React from 'react';
import { NavigationActions } from '~/services';
import { useMovieStore } from '~/stores';
import * as S from './styles';

const Details = () => {
  const { goBack } = NavigationActions;
  const movieSelected = useMovieStore(state => state.movieSelected);

  return (
    <S.Wrapper>
      <S.IconTextWrapper onPress={goBack}>
        <S.LeftIcon />
      </S.IconTextWrapper>
      <S.ImagePoster
        source={{
          uri: movieSelected?.Poster,
        }}
      />
      <S.TextWrapper>
        <S.Text>{`[${movieSelected?.Type ?? ''}]`}</S.Text>
        <S.Text>{`${movieSelected?.Title ?? ''}/${
          movieSelected?.Year ?? ''
        }`}</S.Text>
      </S.TextWrapper>
    </S.Wrapper>
  );
};

export default Details;
