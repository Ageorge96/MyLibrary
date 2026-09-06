import { HomeScreen } from '../screens/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BookshelfScreen } from '../screens/bookshelf';

export const RootStack = createBottomTabNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: { screen: HomeScreen },
    Bookshelf: { screen: BookshelfScreen },
    Wishlist: HomeScreen,
    Settings: HomeScreen,
  },
  screenOptions: {
    sceneStyle: { backgroundColor: '#f6eee3' },
    tabBarStyle: {
      backgroundColor: '#C19A6B',
    },
    tabBarLabelStyle: { fontWeight: 'bold', color: 'black' },
    tabBarIconStyle: { color: 'black' },
    headerShown: false,
  },
});
