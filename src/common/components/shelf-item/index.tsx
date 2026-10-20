import { Text, View } from 'react-native';
import { styles } from './styles';
import { Book } from '../../types';
import { Cover } from '../cover';
import { useTheme } from '@react-navigation/native';

export function ShelfItem({
  title,
  author,
  genre,
  status,
  cover = 'https://www.thebookdesigner.com/wp-content/uploads/2024/02/91pSpl1oVVL._SL1500_.jpg',
}: Book) {
  const { colors } = useTheme();
  const themedStyles = styles(colors);

  return (
    <View style={themedStyles.shelfItemContainer} id="Shelf Item">
      <View style={themedStyles.shelfItemCoverView}>
        <View style={themedStyles.shelfItemCover}>
          <Cover src={cover} title={title} />
        </View>
      </View>
      <View style={themedStyles.shelfItemContent}>
        <View>
          <Text style={themedStyles.shelfItemTitle} numberOfLines={1}>{title}</Text>
          <Text style={themedStyles.shelfItemAuthor} numberOfLines={1}>By {author}</Text>
        </View>
        <Text style={themedStyles.shelfItemText} numberOfLines={1}>Genre: {genre}</Text>
        <Text style={themedStyles.shelfItemText}>Status: {status}</Text>
      </View>
    </View>
  );
}
