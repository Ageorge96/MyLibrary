import { HomeScreen } from '../screens/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BookshelfStack } from './bookshelf-stack';
import { Icon } from '@components/icons';
import { getTabBarIcon } from '@common/helper/get-tab-bar-icon';
import { RootStackParamList } from './navigation.types';
import { AppColors } from '@common/themes';

export const RootStack = createBottomTabNavigator<RootStackParamList>({
  initialRouteName: 'Home',
  screens: {
    Home: { screen: HomeScreen },
    Bookshelf: { screen: BookshelfStack },
    Wishlist: HomeScreen,
    Settings: HomeScreen,
  },
  screenOptions: ({ route, theme }) => {
    const appColors = theme.colors as AppColors;
    
    return ({
    sceneStyle: { backgroundColor: theme.colors.background },
    tabBarStyle: {
      backgroundColor: theme.colors.primary,
    },
    tabBarIcon: () => {
      const tabIcon = getTabBarIcon(route.name);
      return <Icon name={tabIcon} size={'m'}/>
    },
    tabBarLabelStyle: { fontSize: 18, fontWeight: 'bold', color: appColors.contrastText },
    tabBarIconStyle: { color: appColors.contrastText },
    headerShown: false,
  })},
});
