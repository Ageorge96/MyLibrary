import { ComponentType, useState } from 'react';
import { DetailsFormPage } from './details-page';
import { View } from 'react-native';
import { CoverFormPage } from './cover-page';
import { useNavigation, useTheme } from '@react-navigation/native';
import { styles } from './styles';
import { Button } from '@components/button';
import { useForm } from 'react-hook-form';
import { ShelfBook } from '../../core/classes/shelf-book';
import {
  AddBookData,
  AddBookPages,
  BookshelfNavigationProp,
  FormPageProps,
} from './types';

const addBookScreens: Record<AddBookPages, ComponentType<FormPageProps>> = {
  details: DetailsFormPage,
  cover: CoverFormPage,
};

export function AddBookForm() {
  const { colors } = useTheme();
  const themedStyles = styles(colors);
  const navigation = useNavigation<BookshelfNavigationProp>();
  const [page, setPage] = useState<AddBookPages>('details');
  const { control, handleSubmit } = useForm<AddBookData>({
    defaultValues: {
      title: '',
      author: '',
      genre: [],
      status: undefined,
      bookmark: 0,
      cover: '',
    },
  });

  const onSubmit = ({
    title,
    author,
    genre,
    status,
    bookmark,
    cover,
  }: AddBookData) => {
    const newBook = new ShelfBook(8, 1234, title, author, genre, status, cover);
    newBook.editBookmark(bookmark);
    console.log(newBook.itemDetails);
    navigation.goBack();
  };

  const FormPagination = addBookScreens[page];

  return (
    <>
      <FormPagination control={control} />

      <View style={themedStyles.navigationContainer}>
        {page === 'details' ? (
          <View style={themedStyles.navButtonView}>
            <Button title="Continue" onPress={() => setPage('cover')} />
          </View>
        ) : (
          <>
            <View style={themedStyles.navButtonView}>
              <Button title="Back" onPress={() => setPage('details')} />
            </View>
            <View style={themedStyles.navButtonView}>
              <Button title="Continue" onPress={handleSubmit(onSubmit)} />
            </View>
          </>
        )}
      </View>
    </>
  );
}
