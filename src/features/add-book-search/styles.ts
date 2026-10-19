import { StyleSheet } from 'react-native';
import { AppColors } from '../../common/themes';

export const styles = ({colors}: AppColors) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '90%',
  },
  input: {
    height: 50,
    width: '100%',
    paddingHorizontal: 6,
    backgroundColor: '#ffffff',
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
});
