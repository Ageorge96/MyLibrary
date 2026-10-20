import { StyleSheet } from 'react-native';
import { AppColors } from '@common/themes';

export const styles = (colors: AppColors) =>
  StyleSheet.create({
    container: {
      width: '100%',
    },
    itemSeparator: {
      height: 2,
      width: '100%',
      backgroundColor: colors.border,
    },
  });
