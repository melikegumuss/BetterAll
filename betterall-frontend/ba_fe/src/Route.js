import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './screens/Home';
import LoginScreen from './screens/LoginScreen';
import StartupScreen from './screens/StartupScreen';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
  },
});

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    LoginScreen: LoginScreen,
    StartupScreen: StartupScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
