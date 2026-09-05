import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/home';

export const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screens: { Home: HomeScreen },
  screenOptions: {contentStyle: {backgroundColor: '#f6eee3'}}
});
