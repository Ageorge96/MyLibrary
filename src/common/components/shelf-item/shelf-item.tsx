import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import { Book } from '../../types';

export function ShelfItem({
  title,
  author,
  genre,
  status,
  cover = 'Cover',
}: Book) {
  return (
    <View style={styles.shelfItemContainer} id="Shelf Item">
      <View style={styles.shelfItemCoverView}>
        <View style={styles.shelfItemCover}>
          <Image
          source={{
            uri: 'https://www.thebookdesigner.com/wp-content/uploads/2024/02/91pSpl1oVVL._SL1500_.jpg',
          }}
          accessibilityLabel={cover}
          resizeMode="cover"
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            bottom: 0,
          }}
        />
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
