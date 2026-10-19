import { Button, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { useNavigation, useTheme } from '@react-navigation/native';

export function AddBookSearch() {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const themedStyles = styles({ colors });

  return (
    <View style={themedStyles.container}>
      <View style={themedStyles.inputContainer}>
        <Text style={themedStyles.inputLabel}>Search for book by title</Text>
        <TextInput style={themedStyles.input} />
      </View>
      <Button title="Search" onPress={() => navigation.goBack()} />
    </View>
  );
}
