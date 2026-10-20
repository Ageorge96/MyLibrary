import { HomeScreen } from '../screens/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BookshelfStack } from './bookshelf-stack';

export const RootStack = createBottomTabNavigator({
  initialRouteName: 'Bookshelf',
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
    tabBarLabelStyle: { fontSize: 18, fontWeight: 'bold', color: theme.colors.contrastText },
    tabBarIconStyle: { color: theme.colors.contrastText },
    headerShown: false,
  }),
});
