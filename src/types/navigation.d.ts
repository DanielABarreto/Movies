declare type MainStackParams = {
  PUBLIC: undefined;
};

declare type PublicStackParams = {
  HOME: undefined;
  DETAILS: undefined;
};

declare type PublicStackScreenProps<T extends keyof PublicStackParams> =
  import('@react-navigation/native-stack').NativeStackScreenProps<
    PublicStackParams,
    T
  >['route'];
