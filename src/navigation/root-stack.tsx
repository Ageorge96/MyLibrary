import { HomeScreen } from '../screens/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BookshelfStack } from './bookshelf-stack';
import { Icon } from '@components/icons';
import { getTabBarIcon } from '@common/helper/get-tab-bar-icon';

export const RootStack = createBottomTabNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: { screen: HomeScreen },
    Bookshelf: { screen: BookshelfStack },
    Wishlist: HomeScreen,
    Settings: HomeScreen,
  },
  screenOptions: ({ route, theme }) => ({
    sceneStyle: { backgroundColor: theme.colors.background },
    tabBarStyle: {
      backgroundColor: theme.colors.primary,
    },
    tabBarIcon: () => {
      const tabIcon = getTabBarIcon(route.name);
      return <Icon name={tabIcon} size={'m'}/>
    },
    tabBarLabelStyle: { fontSize: 18, fontWeight: 'bold', color: theme.colors.contrastText },
    tabBarIconStyle: { color: theme.colors.contrastText },
    headerShown: false,
  }),
});
