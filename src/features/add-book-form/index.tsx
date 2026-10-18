import { JSX, useState } from 'react';
import { DetailsPage } from './details-page';
import { Button, View } from 'react-native';
import { CoverPage } from './cover-page';
import { useNavigation, useTheme } from '@react-navigation/native';
import { styles } from './styles';

const addBookPagination = {
  details: <DetailsPage />,
  cover: <CoverPage />,
} satisfies Record<string, JSX.Element | null>;

type AddBookPages = keyof typeof addBookPagination;

export function AddBookForm() {
  const { colors } = useTheme();
  const themedStyles = styles({colors})
  const navigation = useNavigation();
  const [page, setPage] = useState<AddBookPages>('details');

  return (
    <>
      {addBookPagination[page]}
      <View
        style={themedStyles.navigationContainer}
      >
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
