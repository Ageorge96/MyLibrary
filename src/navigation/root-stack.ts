import { HomeScreen } from '../screens/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BookshelfStack } from './bookshelf-stack';

export const RootStack = createBottomTabNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: { screen: HomeScreen },
    Bookshelf: { screen: BookshelfStack },
    Wishlist: HomeScreen,
    Settings: HomeScreen,
  },
  screenOptions: ({ theme }) => ({
    sceneStyle: { backgroundColor: theme.colors.background },
    tabBarStyle: {
      backgroundColor: theme.colors.primary,
    },
    tabBarLabelStyle: { fontWeight: 'bold', color: 'black' },
    tabBarIconStyle: { color: 'black' },
    headerShown: false,
  }),
});
