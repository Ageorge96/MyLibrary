import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  shelfItemContainer: {
    height: 150,
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 15,
  },
  shelfItemContent: {
    flex: 3,
    paddingHorizontal: 8,
    paddingVertical: 12,
    justifyContent: 'space-between',
  },
  shelfItemTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  shelfItemAuthor: {
    fontSize: 18,
    fontWeight: 'bold',
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
    height: '85%',
    width: '80%',
    // styles to be deleted
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
})