import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  Home: undefined;
  Bookshelf: NavigatorScreenParams<BookshelfStackParamList>;
  Wishlist: undefined;
  Settings: undefined;
}

export type BookshelfStackParamList = {
  Index: undefined;
  Add: undefined;
  Search: undefined;
}