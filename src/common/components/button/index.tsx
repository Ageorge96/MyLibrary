import { useTheme } from '@react-navigation/native';
import { Pressable, PressableProps, Text } from 'react-native';
import { Icon } from '../icons';
import { IconMap } from '../icons/icon-map';
import { styles } from './styles';

interface ButtonProps extends PressableProps {
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
      <Text style={themedStyles.title}>{title}</Text>
    </Pressable>
  );
}
