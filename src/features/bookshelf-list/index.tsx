import { ShelfItem } from '@components/shelf-item';
import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import { ShelfBook } from '@classes/shelf-book';

interface BookshelfListProps {
  books: ShelfBook[];
}

export function BookshelfList({ books }: BookshelfListProps) {
  const { colors } = useTheme();
  const themedStyles = styles(colors);
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={themedStyles.container}>
      {books.length !== 0 ? (
        <FlatList
          data={books}
          renderItem={item => <ShelfItem book={item.item} />}
          ItemSeparatorComponent={<View style={themedStyles.itemSeparator} />}
          contentContainerStyle={{ paddingBottom: tabBarHeight + 24 }}
          keyExtractor={item => item.title}
        />
      ) : (
        <View
          style={{
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{fontSize: 24}} >Your Bookshelf is empty</Text>
        </View>
      )}
    </View>
  );
}
