import Config from 'react-native-config';

export const env = {
  ENV: Config.ENV,
  BASE_PATH: Config.BASE_PATH,
  KEYCLOAK: Config.KEYCLOAK,
  SITEF_HOST: Config.SITEF_HOST,
  GRAYLOG_HOST: Config.GRAYLOG_HOST,
  GRAYLOG_SOURCE: Config.GRAYLOG_SOURCE
};
