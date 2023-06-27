declare interface Svg {
  width: number;
  height: number;
  xml: string;
}

declare type XmlSvg = typeof import('~/assets/svg/svg').default;
