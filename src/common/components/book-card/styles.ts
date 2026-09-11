import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  bookCard: {
    height: 125,
    width: 250,
    backgroundColor: '#e5decf',
    borderColor: '#b4b4b4',
    borderWidth: 1,
    borderRadius: 24,
    elevation: 14,
    flexDirection: 'row'
  },
  cardContent: {
    flex: 2,
    padding: 8,
    justifyContent: 'space-between',
  },
  cardCover: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    backgroundColor: '#B77B6E' //#959889 olive
  },
  bookCardAlt: {
    height: 200,
    width: '40%',
    backgroundColor: '#e5decf',
    borderColor: '#b4b4b4',
    borderWidth: 1,
    borderRadius: 24,
    elevation: 14,
  },
  cardContentAlt: {
    flex: 2,
    padding: 8,
    justifyContent: 'space-between',
  },
  cardCoverAlt: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    backgroundColor: '#B77B6E'
  },
})