import styled, { css } from 'styled-components/native';
import { Text as TextComponent } from '@react-native-material/core';

export const Wrapper = styled.View`
  flex: 1%;
  padding-top: 50px;
  ${({ theme }) => css`
    background-color: ${theme.color.primaryDark};
  `}
`;

export const Card = styled.TouchableOpacity`
  width: 120px;
  height: 180px;
  ${({ theme }) => css`
    border-radius: ${theme.spacing.xs};
    margin-top: ${theme.spacing.xs};
    margin-horizontal: ${theme.spacing.sm};
  `}
`;

export const ImageMovies = styled.Image`
  flex: 1;
  width: 100%;
  ${({ theme }) => css`
    border-radius: ${theme.spacing.xs};
  `}
`;

export const ImagePoster = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 100%;
  height: 300px;
`;

export const Text = styled(TextComponent).attrs({
  variant: 'h4',
})`
  ${({ theme }) => css`
    margin-left: ${theme.spacing.sm};
    margin-top: ${theme.spacing.xs};
    color: ${theme.color.primaryWhite};
  `}
`;
