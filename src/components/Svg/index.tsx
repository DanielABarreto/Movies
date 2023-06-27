import React, { FC } from 'react';
import { SvgCss } from 'react-native-svg';
import { XmlSvg as svg } from '../../assets';
import { Wrapper } from './styles';

const Svg: FC<IconType> = ({
  name,
  width,
  height,
  color,
  onPress,
  touchable = false,
  ...rest
}) => {
  const scaledWidth = (): number => {
    if (height) {
      return (Number(height) / svg[name].height) * svg[name].width;
    }
    return svg[name].width;
  };

  const scaledHeight = (): number => {
    if (width) {
      return (Number(width) / svg[name].width) * svg[name].height;
    }
    return svg[name].height;
  };

  return (
    <Wrapper disabled={!touchable} onPress={onPress} {...rest}>
      <SvgCss
        fill={color}
        width={scaledWidth()}
        height={scaledHeight()}
        xml={svg[name].xml}
      />
    </Wrapper>
  );
};

export default Svg;
