import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export function CoverPage() {
  return (
    <View style={styles.container}>
      <View style={styles.coverView} >
        <Text>Cover</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Cover</Text>
        <TextInput style={styles.input} />
      </View>
    </View>
  );
}
