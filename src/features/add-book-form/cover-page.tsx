import { Text, TextInput, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { styles } from './styles';

export function CoverPage() {
  const { colors } = useTheme();
  const themedStyles = styles({colors})
  
  return (
    <View style={themedStyles.container}>
      <View style={themedStyles.coverView} >
        <Text>Cover</Text>
      </View>
      <View style={themedStyles.inputContainer}>
        <Text style={themedStyles.inputLabel}>Cover</Text>
        <TextInput style={themedStyles.input} />
      </View>
    </View>
  );
}
