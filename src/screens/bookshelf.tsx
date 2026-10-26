import { StyleSheet, Text, TextInput, View } from 'react-native';
import { getMockBooks } from '../common/constants/mocks';
import { Book } from '../common/types';
import { BookshelfList } from '../features/bookshelf-list';
import { useNavigation, useTheme } from '@react-navigation/native';
import { BookshelfStackParamList } from '../navigation/navigation.types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppColors } from '../common/themes';
import { Button } from '@components/button';
import { IconButton } from '@common/components/icon-button';

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
          {/* filter button shows filter options */}
          <IconButton icon="funnel" />
        </View>
        <View style={themedStyles.buttonsContainer}>
          <Button title="Add" onPress={() => navigation.navigate('Add')} icon="circle-plus" />
          <Button title="Edit" icon="square-pen" />
          <Button title="Remove" icon="circle-x" />
        </View>
        <View style={themedStyles.border} />
      </View>
      <BookshelfList books={mockBooks} />
      <View style={{position: 'absolute', right: 24, bottom: 24}} >
        <IconButton icon="plus" onPress={() => navigation.navigate('Add')} />
      </View>
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
      height: 50,
      width: '85%',
      marginBottom: 12,
      borderRadius: 8,
      backgroundColor: colors.input,
      fontSize: 24,
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
