import { ShelfItem } from '@components/shelf-item/shelf-item';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { getMockBooks } from '../common/constants/mocks';
import { Book } from '../common/types';

export function BookshelfScreen() {
  const mockBook = getMockBooks() as Book

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.input} />
        <View style={styles.filter}>
          {/* To be converted to button */}
          <Text
            style={{
              color: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Filter
          </Text>
        </View>
      </View>
      {/* filter button shows filter options */}
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button title="Add" />
        </View>
        <View style={styles.button}>
          <Button title="Edit" />
        </View>
        <View style={styles.button}>
          <Button title="Remove" />
        </View>
      </View>
      <View style={styles.border} />

      {/* shelf item */}
      <ShelfItem {...mockBook}/>

      {/* Extra items to be deleted */}
      <View style={styles.shelfItemContainer} id="Shelf Item">
        <View style={styles.shelfItemContent}>
          <Text style={styles.shelfItemText}>Title:</Text>
          <Text style={styles.shelfItemText}>Author:</Text>
          <Text style={styles.shelfItemText}>Genre:</Text>
          <Text style={styles.shelfItemText}>Status:</Text>
        </View>
        <View style={styles.shelfItemCoverView}>
          <View style={styles.shelfItemCover}>
            <Text>Cover</Text>
          </View>
        </View>
      </View>
      <View style={styles.shelfItemContainer} id="Shelf Item">
        <View style={styles.shelfItemContent}>
          <Text style={styles.shelfItemText}>Title:</Text>
          <Text style={styles.shelfItemText}>Author:</Text>
          <Text style={styles.shelfItemText}>Genre:</Text>
          <Text style={styles.shelfItemText}>Status:</Text>
        </View>
        <View style={styles.shelfItemCoverView}>
          <View style={styles.shelfItemCover}>
            <Text>Cover</Text>
          </View>
        </View>
      </View>
      <View style={styles.shelfItemContainer} id="Shelf Item">
        <View style={styles.shelfItemContent}>
          <Text style={styles.shelfItemText}>Title:</Text>
          <Text style={styles.shelfItemText}>Author:</Text>
          <Text style={styles.shelfItemText}>Genre:</Text>
          <Text style={styles.shelfItemText}>Status:</Text>
        </View>
        <View style={styles.shelfItemCoverView}>
          <View style={styles.shelfItemCover}>
            <Text>Cover</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchContainer: {
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  input: {
    flex: 10,
    width: '80%',
    marginBottom: 12,
    borderRadius: 20,
    backgroundColor: '#ffffff',
  },
  filter: {
    flex: 1,
    height: 40,
    width: 30,
    backgroundColor: 'black',
  },
  buttonsContainer: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  button: {
    flex: 1,
  },
  border: {
    height: 4,
    width: '100%',
    marginTop: 10,
    backgroundColor: '#C19A6B',
  },
  shelfItemContainer: {
    height: '20%',
    width: '100%',
    flexDirection: 'row',
    borderBottomColor: '#C19A6B',
    borderBottomWidth: 2,
  },
  shelfItemContent: {
    flex: 3,
    paddingTop: 6,
    paddingLeft: 8,
    paddingBottom: 6,
    justifyContent: 'space-between',
  },
  shelfItemText: {
    fontSize: 18,
  },
  shelfItemCoverView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shelfItemCover: {
    height: '80%',
    width: '80%',
    // styles to be deleted
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
