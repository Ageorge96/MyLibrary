import { BookCard } from '@components/book-card/book-card';
import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';
import { Book } from '../../common/types';
import { BookCardAlt } from '@components/book-card/book-card-alt';

interface HomeSectionProps {
  title: string;
  books: Book[];
  alt?: boolean;
}

export function HomeSection({title, books, alt}: HomeSectionProps) {

  return (
    <View style={styles.homeSection}>
      <Text style={styles.sectionHeading}>{title}</Text>
        {!alt ? <FlatList
          data={books}
          renderItem={item => <BookCard {...item.item} />}
          ItemSeparatorComponent={<View style={styles.itemSeparator} />}
          keyExtractor={item => item.title}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          horizontal
        /> : <FlatList
          data={books}
          renderItem={item => <BookCardAlt {...item.item} />}
          ItemSeparatorComponent={<View style={styles.itemSeparator} />}
          keyExtractor={item => item.title}
          horizontal
        />}
    </View>
  );
}
