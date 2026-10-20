import { AppColors } from "@common/themes";
import { StyleSheet } from "react-native";

export const styles= (colors: AppColors) => StyleSheet.create({
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
    fontWeight: 'bold',
    color: colors.text,
  },
  shelfItemAuthor: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  shelfItemText: {
    fontSize: 18,
    color: colors.text,
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