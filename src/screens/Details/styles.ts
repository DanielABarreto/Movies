import styled, { css } from 'styled-components/native';
import { Text as TextComponent } from '@react-native-material/core';
import { Svg } from '~/components';

export const Wrapper = styled.View`
  flex: 1%;
  padding-top: 50px;
  ${({ theme }) => css`
    background-color: ${theme.color.primaryDark};
  `}
`;

export const ImagePoster = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 100%;
  height: 600px;
`;

export const Text = styled(TextComponent).attrs({
  variant: 'h5',
})`
  ${({ theme }) => css`
    margin-left: ${theme.spacing.sm};
    margin-top: ${theme.spacing.xs};
    color: ${theme.color.primaryWhite};
  `}
`;

export const LeftIcon = styled(Svg).attrs(({ theme }) => ({
  color: theme.color.primaryWhite,
  name: 'leftIcon',
}))``;

export const IconTextWrapper = styled.TouchableOpacity`
  top: 70px;
  left: 10px;
  position: absolute;
  z-index: 999;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    background-color: ${theme.color.primaryDark};
    border-radius: ${theme.spacing.xl};
  `}
`;

export const TextWrapper = styled.View`
  flex-direction: row;
`;
