import { AppColors } from "@common/themes";
import { StyleSheet } from "react-native";

export const styles = (colors: AppColors) => StyleSheet.create({
  inputContainer: {
      width: '90%',
    },
    input: {
      height: 50,
      width: '100%',
      paddingHorizontal: 6,
      backgroundColor: colors.input,
      marginBottom: 12,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: colors.secondary,
      fontSize: 24,
    },
    inputLabel: {
      fontSize: 18,
      paddingBottom: 6,
    },
    dropDownContainer: {
      borderWidth: 2,
      borderColor: colors.secondary,
    },
    dropDownText: {
      fontSize: 24,
    },
})