import { GENRE, STATUS } from "@common/constants/enums";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Control } from "react-hook-form";
import { BookshelfStackParamList } from "../../navigation/navigation.types";

export type AddBookPages = 'details' | 'cover';

export type BookshelfNavigationProp = NativeStackNavigationProp<
BookshelfStackParamList,
'Add'
>;

export interface AddBookData {
  title: string;
  author: string;
  genre: GENRE[];
  status: STATUS;
  bookmark: number;
  cover: string;
}

export interface FormPageProps {
  control: Control<AddBookData, any, AddBookData>;
}