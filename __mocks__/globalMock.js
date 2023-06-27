import { useFocusEffect } from '@react-navigation/native';
import '@react-navigation/native-stack';
import { NativeModules } from 'react-native';


const reactotron = {
  configure: () => reactotron,
  useReactNative: () => reactotron,
  use: () => reactotron,
  connect: () => reactotron
};

jest.mock('reactotron-react-native', () => ({
  ...reactotron
}));

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-navigation/native-stack', () => {
  return {
    createAppContainer: jest
      .fn()
      .mockReturnValue(function NavigationContainer(props) {
        return null;
      }),
    createDrawerNavigator: jest.fn(),
    createMaterialTopTabNavigator: jest.fn(),
    createStackNavigator: jest.fn(),
    StackActions: {
      push: jest
        .fn()
        .mockImplementation((x) => ({ ...x, type: 'Navigation/PUSH' })),
      replace: jest
        .fn()
        .mockImplementation((x) => ({ ...x, type: 'Navigation/REPLACE' }))
    },
    NavigationActions: {
      navigate: jest.fn().mockImplementation((x) => x)
    }
  };
});

export const mockedNavigate = jest.fn();

jest.mock('~/services', () => ({
  ...jest.requireActual('~/services'),
  NavigationActions: {
    ...jest.requireActual('~/services').NavigationActions,
    navigate: () => mockedNavigate,
    replace: () => mockedNavigate
  }
}));

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      ...actualNav.useNavigation,
      goBack: mockedNavigate,
      canGoBack: () => true,
    }),
    useIsFocused: () => true,
    useRoute: jest.fn().mockImplementation(() => ({ })),
    useFocusEffect: jest.fn(),
  };
});

jest.mock('i18n-js', () => ({
  t: jest.fn((str) => str)
}));

NativeModules.StatusBarManager = {
  getHeight: jest.fn(),
  setStyle: jest.fn(),
  setHidden: jest.fn(),
  setNetworkActivityIndicatorVisible: jest.fn(),
};

const mockedDispatch = jest.fn();

jest.mock('@react-navigation/native-stack', () => {
  const actualNav = jest.requireActual('@react-navigation/native-stack');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
      dispatch: mockedDispatch
    }),
    useIsFocused: () => true,
    useRoute: () => ({
      params: {
        email: ''
      },
      name: 'EmailLogin'
    })
  };
});

const language = 'pt_BR';

NativeModules.SettingsManager = {
  settings: {
    AppleLocale: language,
    AppleLanguages: [language]
  },
  I18nManager: {
    localeIdentifier: language
  }
};

NativeModules.StatusBarManager = {
  getHeight: jest.fn((callBack) => {
    callBack({ height: 10 })
  }),
};
