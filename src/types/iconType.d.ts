declare module '*.png' {
  import { ImageSourcePropType } from 'react-native';
  const value: ImageSourcePropType;
  export default value;
}

declare interface IconType extends TouchableType {
  name: keyof XmlSvg;
  touchable?: boolean;
  color?: string;
  width?: number | string;
  height?: number | string;
  onPress?(): void;
}
