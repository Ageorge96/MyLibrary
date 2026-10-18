import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import { Book } from '../../types';
import { useTheme } from '@react-navigation/native';

export function BookCard({ title, author, genre, status, cover = 'Cover' }: Book) {
  const { colors } = useTheme();
  const themedStyles = styles({colors})

  return (
    <View style={themedStyles.bookCard}>
      <View style={themedStyles.cardCover}>
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
      <View style={themedStyles.cardContent}>
        <Text numberOfLines={2} style={themedStyles.cardText}>
          {title}
        </Text>
        <Text numberOfLines={1} style={themedStyles.cardText}>
          By {author}
        </Text>
        <Text>Genre: {genre}</Text>
        <Text>Status: {status}</Text>
      </View>
    </View>
  );
}
