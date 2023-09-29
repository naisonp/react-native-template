import { AppRegistry, Text, TextInput } from 'react-native';
import Config from 'react-native-config';

import App from './src/App';
import Storybook from './.storybook';
import { name as appName } from './app.json';

import './src/i18n/i18n';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

const getRootComponent = () => {
  if (Config.STORYBOOK_ENABLED === 'true') {
    return Storybook;
  }

  return App;
};

AppRegistry.registerComponent(appName, getRootComponent);
