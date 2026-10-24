import { AppColors } from '@common/themes';
import { useTheme } from '@react-navigation/native';
import {
  Pressable,
  PressableProps as RNPressableProps,
  StyleSheet,
  Text,
} from 'react-native';
import { Icon } from '../icons';
import { IconMap } from '../icons/icon-map';

interface ButtonProps extends RNPressableProps {
  title: string;
  icon?: IconMap;
}

export function Button(props: ButtonProps) {
  const { title, icon } = props;
  const { colors } = useTheme();
  const themedStyles = styles(colors);

  return (
    <Pressable {...props} style={themedStyles.button}>
      {icon ? <Icon name={icon} size={'s'} /> : null}
      <Text style={themedStyles.title} >{title}</Text>
    </Pressable>
  );
}

const styles = (colors: AppColors) =>
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
