import { StyleSheet, Text, View } from 'react-native';
import { HomeSection } from '../features/home-section';
import { getMockShelfBooks } from '../common/constants/mocks';
import { ShelfBook } from '@classes/shelf-book';


export function HomeScreen() {
  const mockBookmarks = getMockShelfBooks(4) as Array<ShelfBook>; //check inference

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer} >
        <Text style={styles.header} >Andre's Library</Text>
      </View>
      <View style={styles.carousalView} >
        <Text style={{fontSize: 32}} >Carousal Placeholder</Text>
        <Text style={{fontSize: 12}} >{'<To be implemented after real data is added>'}</Text>
      </View>
      <HomeSection title="My Bookmark" books={mockBookmarks} />
      <HomeSection title="My Wishlist" books={mockBookmarks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
  },
  header: {
    fontSize: 36,
  },
  carousalView: {
    height: '30%',
    // styles to delete
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
