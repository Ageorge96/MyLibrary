import { Image, Text, View } from 'react-native';
import { getMockBooks } from '../../constants/mocks';
import { Book } from '../../types';
import { styles } from './styles';

export function BookCardAlt() {
  const mockBook = getMockBooks() as Book; //check inference

  return (
    <View style={styles.bookCardAlt}>
      <View style={styles.cardCoverAlt}>
        <Image
          source={{
            uri: 'https://www.thebookdesigner.com/wp-content/uploads/2024/02/91pSpl1oVVL._SL1500_.jpg',
          }}
          resizeMode="cover"
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            bottom: 0,
          }}
        />
      </View>
      <View style={styles.cardContentAlt}>
        <Text numberOfLines={1}>Title: {mockBook.title}</Text>
        <Text numberOfLines={1}>Author: {mockBook.author}</Text>
        <Text>Genre: {mockBook.genre}</Text>
      </View>
    </View>
  );
}
