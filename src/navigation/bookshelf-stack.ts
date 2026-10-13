import { createNativeStackNavigator, createNativeStackScreen } from "@react-navigation/native-stack";
import { BookshelfScreen } from "../screens/bookshelf";
import { AddBookScreen } from "../screens/add-book";


export const BookshelfStack = createNativeStackNavigator({
  screens: {
    Index: createNativeStackScreen({
      screen: BookshelfScreen
    }),
    Add: createNativeStackScreen({
      screen: AddBookScreen,
      options: {
        headerShown: true,
      }
    }),
  },
  screenOptions: {
    headerShown: false,
    contentStyle: { backgroundColor: '#f6eee3' },
  },
})