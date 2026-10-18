import { Text, View } from 'react-native';
import { styles } from './styles';
import { Book } from '../../types';
import { Cover } from '../cover';

export function ShelfItem({
  title,
  author,
  genre,
  status,
  cover = 'https://www.thebookdesigner.com/wp-content/uploads/2024/02/91pSpl1oVVL._SL1500_.jpg',
}: Book) {
  return (
    <View style={styles.shelfItemContainer} id="Shelf Item">
      <View style={styles.shelfItemCoverView}>
        <View style={styles.shelfItemCover}>
          <Cover src={cover} title={title} />
        </View>
      </View>
      <View style={styles.shelfItemContent}>
        <View>
          <Text style={styles.shelfItemTitle} numberOfLines={1}>{title}</Text>
          <Text style={styles.shelfItemAuthor} numberOfLines={1}>By {author}</Text>
        </View>
        <Text style={styles.shelfItemText} numberOfLines={1}>Genre: {genre}</Text>
        <Text style={styles.shelfItemText}>Status: {status}</Text>
      </View>
    </View>
  );
}
