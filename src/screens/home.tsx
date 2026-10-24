import { StyleSheet, Text, View } from 'react-native';
import { HomeSection } from '../features/home-section';
import { Book } from '../common/types';
import { getMockBooks } from '../common/constants/mocks';

export function HomeScreen() {
  const mockBookmarks = getMockBooks(4) as Array<Book>; //check inference

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer} >
        <Text style={styles.header} >Andre's Library</Text>
      </View>
      <View style={styles.carousalView} >
        <Text style={{fontSize: 32}} >Carousal Placeholder</Text>
      </View>
      <HomeSection title="My Bookmark" books={mockBookmarks} />
      <HomeSection title="My Wishlist" books={mockBookmarks} alt />
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
