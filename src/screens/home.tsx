import { StyleSheet, Text, View } from 'react-native';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.homeSections}>
        <Text style={styles.sectionHeading}>My Library</Text>
        <View style={styles.bookCard}>
          <Text>Book card</Text>
        </View>
      </View>
      <View style={styles.homeSections}>
        <Text style={styles.sectionHeading}>My Bookmarks</Text>
        <View style={styles.bookCard}>
          <Text>Book card</Text>
        </View>
      </View>
      <View style={styles.homeSections}>
        <Text style={styles.sectionHeading}>My Wishlist</Text>
        <View style={styles.bookCard}>
          <Text>Book card</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  homeSections: {
    flex: 1,
    paddingTop: 8,
    paddingHorizontal: 8,
    paddingBottom: 20,
    justifyContent: 'flex-start',
  },
  sectionHeading: {
    fontSize: 24,
    marginBottom: 8,
  },
  bookCard: {
    flex: 1,
    width: 300,
    backgroundColor: '#e5decf',
    borderColor: '#b4b4b4',
    borderWidth: 1,
    borderRadius: 24,
    elevation: 14,
    // placeholder styles = to be deleted
    justifyContent: 'center',
    alignItems: 'center',
  },
});
