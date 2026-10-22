import { JSX, useState } from 'react';
import { DetailsPage } from './details-page';
import { View } from 'react-native';
import { CoverPage } from './cover-page';
import { useNavigation, useTheme } from '@react-navigation/native';
import { styles } from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BookshelfStackParamList } from '../../navigation/navigation.types';
import { Button } from '@components/button';

const addBookPagination = {
  details: <DetailsPage />,
  cover: <CoverPage />,
} satisfies Record<string, JSX.Element | null>;

type AddBookPages = keyof typeof addBookPagination;

type BookshelfNavigationProp = NativeStackNavigationProp<
  BookshelfStackParamList,
  'Add'
>;

export function AddBookForm() {
  const { colors } = useTheme();
  const themedStyles = styles(colors);
  const navigation = useNavigation<BookshelfNavigationProp>();
  const [page, setPage] = useState<AddBookPages>('details');

  return (
    <>
      {addBookPagination[page]}
      <View style={themedStyles.navigationContainer}>
        {page === 'cover' ? (
          <View style={themedStyles.navButtonView}>
            <Button title="Back" onPress={() => setPage('details')} />
          </View>
        ) : null}
        <View style={themedStyles.navButtonView}>
          <Button
            title="Continue"
            onPress={() => {
              if (page === 'details') {
                setPage('cover');
              } else {
                navigation.goBack();
              }
            }}
          />
        </View>
      </View>
    </>
  );
}
