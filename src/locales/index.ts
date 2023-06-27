import I18n from 'i18n-js';
import { NativeModules, Platform } from 'react-native';
import en from './en-US';
import pt from './pt-BR';

const normalizeTranslate: {[key: string]: string} = {
	en_US: 'en_US',
	pt_BR: 'pt_BR',
	en: 'en_US',
	pt_US: 'pt_BR',
	en_BR: 'en_US',
};

I18n.translations = {
	en_US: en,
	pt_BR: pt,
	en_BR: en,
};

const getDeviceLanguage = () => {
	if (Platform.OS === 'ios') {
		return (NativeModules.SettingsManager.settings.AppleLocale ||
			NativeModules.SettingsManager.settings.AppleLanguages[0]) as string;
	}

	return NativeModules.I18nManager.localeIdentifier as string;
};

const deviceLanguageFormat = getDeviceLanguage().replace('-', '_');

const translateNormalize: string = normalizeTranslate[deviceLanguageFormat];
const iHaveThisLanguage = I18n.translations[translateNormalize];

iHaveThisLanguage
	? (I18n.locale = translateNormalize)
	: (I18n.defaultLocale = 'pt_BR');

const translate = (
	key: keyof typeof pt,
	placeholders?: Record<string, string | number>
) => I18n.t(key, placeholders);

export default translate;
