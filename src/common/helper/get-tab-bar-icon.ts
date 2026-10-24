import { IconMap } from "@common/components/icons/icon-map";
import { RootStackNames } from "../../navigation/navigation.types";

export function getTabBarIcon(name: RootStackNames): IconMap {
  const tabBarMapper: Record<RootStackNames, IconMap> = {
    Home: 'home',
    Bookshelf: 'library',
    Wishlist: 'star',
    Settings: 'settings',
  }

  return tabBarMapper[name]
}