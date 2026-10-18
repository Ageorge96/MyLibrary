import { ShelfItem } from '@components/shelf-item/shelf-item';
import { FlatList, View } from 'react-native';
import { Book } from '../../common/types';
import { styles } from './styles';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';

interface BookshelfListProps {
  books: Book[]
}

export function BookshelfList({books}: BookshelfListProps) {
  const { colors } = useTheme();
  const themedStyles = styles({colors})
  const tabBarHeight = useBottomTabBarHeight();
  
  return (
    <View style={themedStyles.container}>
      <FlatList
        data={books}
        renderItem={item => <ShelfItem {...item.item} />}
        ItemSeparatorComponent={
          <View
            style={themedStyles.itemSeparator}
          />
        }
        contentContainerStyle={{ paddingBottom: tabBarHeight + 24}}
      />
    </View>
  );
}
