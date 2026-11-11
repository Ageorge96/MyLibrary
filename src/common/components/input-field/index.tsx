import { useTheme } from '@react-navigation/native';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { styles } from './styles';

interface InputFieldProps extends TextInputProps {
  label: string;
}

export function InputField(props: InputFieldProps) {
  const { label } = props;
  const { colors } = useTheme();
  const themedStyles = styles(colors);

  return (
    <View style={themedStyles.inputContainer}>
      <Text style={themedStyles.inputLabel}>{label}</Text>
      <TextInput style={themedStyles.input} {...props} />
    </View>
  );
}
