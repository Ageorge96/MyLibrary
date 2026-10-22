import { AppColors } from '@common/themes';
import { useTheme } from '@react-navigation/native';
import {
  Pressable,
  PressableProps as RNPressableProps,
  StyleSheet,
  Text,
} from 'react-native';

interface ButtonProps extends RNPressableProps {
  title: string;
  // icon?: string; TODO: a part of icons branch
}

export function Button(props: ButtonProps) {
  const { title } = props;
  const { colors } = useTheme();
  const themedStyles = styles(colors);

  return (
    <Pressable {...props} style={themedStyles.button}>
      <Text style={themedStyles.title} >{title}</Text>
    </Pressable>
  );
}

const styles = (colors: AppColors) =>
  StyleSheet.create({
    button: {
      height: 35,
      width: 135,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8,
      borderRadius: 12,
    },
    title: {
      fontSize: 18,
      color: colors.contrastText,
      fontWeight: 'bold',
    },
  });
