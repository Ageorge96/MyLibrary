import { AppColors } from "@common/themes";
import { StyleSheet } from "react-native";

export const styles = (colors: AppColors) => StyleSheet.create({
  bookCard: {
    height: 125,
    width: 250,
    backgroundColor: colors.primary,
    borderRadius: 24,
    elevation: 8,
    flexDirection: 'row',
  },
  cardContent: {
    flex: 2,
    padding: 8,
    justifyContent: 'center',
  },
  cardHeader: {
    fontWeight: "bold",
    color: colors.contrastText,
  },
  cardText: {
    color: colors.contrastText,
  },
  cardCover: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderTopLeftRadius: 21,
    borderBottomLeftRadius: 21,
  },
  bookCardAlt: {
    height: 200,
    width: '40%',
    backgroundColor: colors.primary,
    borderRadius: 24,
    elevation: 14,
  },
  cardContentAlt: {
    padding: 8,
  },
  cardCoverAlt: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
})