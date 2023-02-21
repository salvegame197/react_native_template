import {useColorScheme} from 'react-native';
import {Theme, StatusBar} from '../../../constants/colors';
import {String} from '../../../constants/string';

const lightMode = {
  colors: {
    primary: Theme.LIGHT,
  },
  fonts: {
    medium: 'Montserrat-Medium',
    bold: 'Montserrat-Bold',
  },
};

const darkMode = {
  colors: {
    primary: Theme.DARK,
  },
  fonts: {
    medium: 'Montserrat-Medium',
    bold: 'Montserrat-Bold',
  },
};

const theme = {
  light: lightMode,
  dark: darkMode,
};

const themeStatusBar = {
  light: {
    barStyle: StatusBar.STYLE_LIGHT,
    backgroundColor: Theme.LIGHT,
  },
  dark: {
    barStyle: StatusBar.STYLE_DARK,
    backgroundColor: Theme.DARK,
  },
};

export const ThemeOs = () => {
  if (useColorScheme() === String.DARK) {
    return theme.dark;
  } else {
    return theme.light;
  }
};

export const ThemeStatusBarOs = () => {
  if (useColorScheme() === String.DARK) {
    return themeStatusBar.dark;
  } else {
    return themeStatusBar.light;
  }
};
export default ThemeOs;
