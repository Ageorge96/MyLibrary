import { StyleSheet, Text, TextInput, View } from 'react-native';
import { getMockBooks } from '../common/constants/mocks';
import { Book } from '../common/types';
import { BookshelfList } from '../features/bookshelf-list';
import { useNavigation, useTheme } from '@react-navigation/native';
import { BookshelfStackParamList } from '../navigation/navigation.types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppColors } from '../common/themes';
import { Button } from '@components/button';

type BookshelfNavigationProp = NativeStackNavigationProp<
  BookshelfStackParamList,
  'Index'
>;

// separate component into a feature and leave this as only the screen containing the feature component
export function BookshelfScreen() {
  const navigation = useNavigation<BookshelfNavigationProp>();
  const mockBooks = getMockBooks(8) as Book[];
  const { colors } = useTheme();
  const themedStyles = styles(colors);

  return (
    <View style={themedStyles.container}>
      <View style={themedStyles.headerContainer}>
        <View style={themedStyles.searchContainer}>
          <TextInput style={themedStyles.input} />
          <View style={themedStyles.filter}>
            {/* To be converted to button */}
            <Text
              style={{
                color: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Filter
            </Text>
          </View>
        </View>
        {/* filter button shows filter options */}
        <View style={themedStyles.buttonsContainer}>
          <Button title="Add" onPress={() => navigation.navigate('Add')} />
          <Button title="Edit" />
          <Button title="Remove" />
        </View>
        <View style={themedStyles.border} />
      </View>
      <BookshelfList books={mockBooks} />
    </View>
  );
}

const styles = (colors: AppColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    headerContainer: {
      backgroundColor: colors.secondary,
    },
    searchContainer: {
      width: '100%',
      paddingTop: 10,
      paddingHorizontal: 12,
      flexDirection: 'row',
      gap: 10,
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    input: {
      flex: 10,
      width: '80%',
      marginBottom: 12,
      borderRadius: 8,
      backgroundColor: colors.input,
    },
    filter: {
      flex: 1,
      height: 40,
      width: 30,
      // to be deleted
      backgroundColor: colors.primary,
    },
    buttonsContainer: {
      paddingBottom: 10,
      paddingHorizontal: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    border: {
      height: 4,
      width: '100%',
      backgroundColor: colors.secondary,
    },
  });
