import { ShelfItem } from '@components/shelf-item/shelf-item';
import { FlatList, View } from 'react-native';
import { Book } from '../../common/types';
import { styles } from './styles';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

interface BookshelfListProps {
  books: Book[]
}

export function BookshelfList({books}: BookshelfListProps) {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={item => <ShelfItem {...item.item} />}
        ItemSeparatorComponent={
          <View
            style={styles.itemSeparator}
          />
        }
        contentContainerStyle={{ paddingBottom: tabBarHeight + 24}}
      />
    </View>
  );
}
