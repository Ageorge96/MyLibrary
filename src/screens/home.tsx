import { StyleSheet, Text, View } from 'react-native';
import { BookCardAlt } from '../common/components/book-card/book-card-alt';
import { BookCard } from '../common/components/book-card';

export function HomeScreen() {

  return (
    <View style={styles.container}>
      <View style={styles.header} >
        <Text style={styles.title} >Andre's Library</Text>
      </View>
      <View style={styles.carousalView} >
        <Text style={{fontSize: 32}} >Carousal Placeholder</Text>
      </View>
      <View style={styles.homeSection}>
        <Text style={styles.sectionHeading}>My Bookmarks</Text>
        <View>
          <BookCard />
        </View>
      </View>
      <View style={styles.homeSection}>
        <Text style={styles.sectionHeading}>My Wishlist</Text>
        <View>
          <BookCardAlt />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
  },
  carousalView: {
    height: '30%',
    backgroundColor: 'gray',
    // styles to delete
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeSection: {
    height: '23%',
    paddingTop: 8,
    paddingHorizontal: 8,
    marginBottom: 6,
    justifyContent: 'flex-start',
  },
  sectionHeading: {
    fontSize: 24,
    marginBottom: 8,
  },
});
