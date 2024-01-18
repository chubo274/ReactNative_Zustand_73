/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';
import {configureLocalization} from 'shared/localization';

configureLocalization('vn'); // fixed React has detected a change in the order of Hooks called by withI18nextTranslation

AppRegistry.registerComponent(appName, () => App);
