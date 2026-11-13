import { Text, View } from 'react-native';
import { styles } from './styles';
import { Book } from '../../types';
import { useTheme } from '@react-navigation/native';
import { Cover } from '../cover';

export function BookCard({
  title,
  author,
  genre,
  status,
  cover, // 'https://www.thebookdesigner.com/wp-content/uploads/2024/02/91pSpl1oVVL._SL1500_.jpg'
}: Book) {
  const { colors } = useTheme();
  const themedStyles = styles(colors);

  return (
    <View style={themedStyles.bookCard}>
      <View style={themedStyles.cardCover}>
        <Cover src={cover} title={title} />
      </View>
      <View style={themedStyles.cardContent}>
        <Text numberOfLines={2} style={themedStyles.cardHeader}>
          {title}
        </Text>
        <Text numberOfLines={1} style={themedStyles.cardHeader}>
          By {author}
        </Text>
        <Text style={themedStyles.cardText} >Genre: {genre}</Text>
        <Text style={themedStyles.cardText} >Status: {status}</Text>
      </View>
    </View>
  );
}
