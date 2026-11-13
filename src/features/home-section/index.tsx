import { BookCard } from '@components/book-card';
import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';
import { Book } from '../../common/types';

interface HomeSectionProps {
  title: string;
  books: Book[];
}

export function HomeSection({ title, books }: HomeSectionProps) {
  return (
    <View style={styles.homeSection}>
      <Text style={styles.sectionHeading}>{title}</Text>
      <FlatList
        data={books}
        renderItem={item => <BookCard {...item.item} />}
        ItemSeparatorComponent={<View style={styles.itemSeparator} />}
        keyExtractor={item => item.title}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        horizontal
      />
    </View>
  );
}
