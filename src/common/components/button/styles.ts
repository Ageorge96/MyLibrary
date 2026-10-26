import { AppColors } from "@common/themes";
import { StyleSheet } from "react-native";

export const styles = (colors: AppColors) =>
  StyleSheet.create({
    button: {
      height: 35,
      width: 135,
      flexDirection: 'row',
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      elevation: 8,
      borderRadius: 12,
    },
    title: {
      fontSize: 18,
      color: colors.contrastText,
      fontWeight: 'bold',
    },
  });