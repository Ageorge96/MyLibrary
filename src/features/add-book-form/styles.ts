import { StyleSheet } from 'react-native';
import { AppColors } from '../../common/themes';

export const styles = (colors: AppColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
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
      borderColor: colors.border,
      fontSize: 24,
    },
    inputLabel: {
      fontSize: 18,
      paddingBottom: 6,
    },
    dropDownContainer: {
      borderWidth: 2,
      borderColor: colors.border,
    },
    dropDownText: {
      fontSize: 24,
    },
    navigationContainer: {
      width: '100%',
      paddingHorizontal: 12,
      paddingBottom: 12,
      flexDirection: 'row',
      justifyContent: 'space-around',
      gap: 8,
    },
    navButtonView: {
      flex: 1,
    },
    coverView: {
      height: '80%',
      width: '75%',
      // To be deleted
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
