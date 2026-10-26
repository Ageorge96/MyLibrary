import { AppColors } from '@common/themes';
import { StyleSheet } from 'react-native';

export const styles = (colors: AppColors) =>
  StyleSheet.create({
    button: {
      height: 50,
      width: 50,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
    },
  });
