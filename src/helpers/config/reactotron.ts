/*eslint-disable*/
import Reactotron from 'reactotron-react-native';

declare global {
  interface Console {
    tron: any;
  }
}

if (__DEV__) {
  const tron = Reactotron.configure().useReactNative().connect();

  console.tron = tron;
}
