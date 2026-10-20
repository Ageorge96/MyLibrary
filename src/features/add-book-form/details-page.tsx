import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import { GENRE, STATUS } from '../../common/constants/enums';
import { useTheme } from '@react-navigation/native';
import { styles } from './styles';

const genreOptions = Object.values(GENRE).map(value => {
  return { label: value, value: value };
});

const statusOptions = Object.values(STATUS).map(value => {
  return { label: value, value: value };
});

export function DetailsPage() {
  const { colors } = useTheme();
  const themedStyles = styles(colors);

  const [genre, setGenre] = useState<GENRE[]>([]);
  const [status, setStatus] = useState<STATUS>();

  return (
    <View style={themedStyles.container}>
      <View style={themedStyles.inputContainer}>
        <Text style={themedStyles.inputLabel}>Title:</Text>
        <TextInput style={themedStyles.input} />
      </View>

      <View style={themedStyles.inputContainer}>
        <Text style={themedStyles.inputLabel}>Author</Text>
        <TextInput style={themedStyles.input} />
      </View>
      <View style={themedStyles.inputContainer}>
        <Text style={themedStyles.inputLabel}>Genre/s</Text>
        <MultiSelect
          data={genreOptions}
          placeholder="Select genre/s"
          placeholderStyle={themedStyles.dropDownText}
          value={genre}
          onChange={item => setGenre(item as GENRE[])}
          labelField={'label'}
          valueField={'value'}
          style={themedStyles.input}
          containerStyle={themedStyles.dropDownContainer}
          itemTextStyle={themedStyles.dropDownText}
          dropdownPosition="top"
        />
      </View>
      <View style={themedStyles.inputContainer}>
        <Text style={themedStyles.inputLabel}>Status</Text>
        <Dropdown
          data={statusOptions}
          placeholder="Select status"
          placeholderStyle={themedStyles.dropDownText}
          value={status}
          onChange={item => setStatus(item.value)}
          labelField={'label'}
          valueField={'value'}
          style={themedStyles.input}
          containerStyle={themedStyles.dropDownContainer}
          itemTextStyle={themedStyles.dropDownText}
          dropdownPosition="top"
        />
      </View>
      <View style={themedStyles.inputContainer}>
        <Text style={themedStyles.inputLabel}>Bookmark</Text>
        <TextInput
          style={themedStyles.input}
          inputMode="numeric"
          keyboardType="numeric"
        />
      </View>
    </View>
  );
}
