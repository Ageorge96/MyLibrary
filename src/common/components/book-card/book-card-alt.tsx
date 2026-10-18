import { Text, View } from 'react-native';
import { Book } from '../../types';
import { styles } from './styles';
import { useTheme } from '@react-navigation/native';
import { Cover } from '../cover';

export function BookCardAlt({ title, author, genre, cover = 'https://www.thebookdesigner.com/wp-content/uploads/2024/02/91pSpl1oVVL._SL1500_.jpg' }: Book) {
  const { colors } = useTheme();
  const themedStyles = styles({colors})

  return (
    <View style={themedStyles.bookCardAlt}>
      <View style={themedStyles.cardCoverAlt}>
        <Cover src={cover} title={title} />
      </View>
      <View style={themedStyles.cardContentAlt}>
        <Text numberOfLines={1} style={themedStyles.cardText} >{title}</Text>
        <Text numberOfLines={1} style={themedStyles.cardText} >By {author}</Text>
        <Text>Genre: {genre}</Text>
      </View>
    </View>
  );
}
