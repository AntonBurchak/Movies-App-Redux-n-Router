import * as constants from './constants';
import eng from '../../intl/eng';
import ua from '../../intl/ua';

const getLocale = (languageCode) => {
  switch (languageCode) {
    case constants.LANGUAGE_CODES.UA:
      return ua;
    case constants.LANGUAGE_CODES.EN:
      return eng;
    default:
      throw new Error(`Failed to file locale. Language code: ${languageCode}.`);
  }
};

export default getLocale;