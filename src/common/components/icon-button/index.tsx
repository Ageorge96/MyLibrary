import { Pressable, PressableProps } from 'react-native';
import { IconMap } from '../icons/icon-map';
import { Icon } from '../icons';
import { useTheme } from '@react-navigation/native';
import { styles } from './styles';

interface IconButtonProps extends PressableProps {
  icon: IconMap;
}

export function IconButton(props: IconButtonProps) {
  const { icon } = props;
  const { colors } = useTheme();
  const themedStyles = styles(colors);

  return (
    <Pressable {...props} style={themedStyles.button}>
      <Icon name={icon} size={'m'} />
    </Pressable>
  );
}
