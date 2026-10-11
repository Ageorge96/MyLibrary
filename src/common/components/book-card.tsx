import { Image, Text, View } from 'react-native';
import { styles } from './book-card/styles';
import { Book } from '../types';

export function BookCard({ title, author, genre, status, cover = 'Cover' }: Book) {

  return (
    <View style={styles.bookCard}>
      <View style={styles.cardCover}>
        <Image
          source={{
            uri: 'https://www.thebookdesigner.com/wp-content/uploads/2024/02/91pSpl1oVVL._SL1500_.jpg',
          }}
          resizeMode="cover"
          accessibilityLabel={cover}
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            bottom: 0,
          }}
        />
      </View>
      <View style={styles.cardContent}>
        <Text numberOfLines={2} style={styles.cardText}>
          {title}
        </Text>
        <Text numberOfLines={1} style={styles.cardText}>
          By {author}
        </Text>
        <Text>Genre: {genre}</Text>
        <Text>Status: {status}</Text>
      </View>
    </View>
  );
}
