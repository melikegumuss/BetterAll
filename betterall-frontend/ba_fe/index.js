/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import RegisterScreen from './src/screens/RegisterScreen/index';
//import StartupScreen from './src/screens/StartupScreen/index';
import LoginScreen from './src/screens/LoginScreen/index';

AppRegistry.registerComponent(appName, () => LoginScreen);
