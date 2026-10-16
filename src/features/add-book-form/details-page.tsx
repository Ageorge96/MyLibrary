import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import { styles } from './styles';
import { GENRE, STATUS } from '../../common/constants/enums';

const genreOptions = Object.values(GENRE).map(value => {
  return { label: value, value: value};
});

const statusOptions = Object.values(STATUS).map(value => {
  return { label: value, value: value };
});


export function DetailsPage() {
  const [genre, setGenre] = useState<GENRE[]>([]);
  const [status, setStatus] = useState<STATUS>();

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Title:</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Author</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Genre/s</Text>
        <MultiSelect
          data={genreOptions}
          placeholder="Select genre/s"
          placeholderStyle={styles.dropDownText}
          value={genre}
          onChange={item => setGenre(item as GENRE[])}
          labelField={'label'}
          valueField={'value'}
          style={styles.input}
          containerStyle={styles.dropDownContainer}
          itemTextStyle={styles.dropDownText}
          dropdownPosition="top"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Status</Text>
        <Dropdown
          data={statusOptions}
          placeholder="Select status"
          placeholderStyle={styles.dropDownText}
          value={status}
          onChange={item => setStatus(item.value)}
          labelField={'label'}
          valueField={'value'}
          style={styles.input}
          containerStyle={styles.dropDownContainer}
          itemTextStyle={styles.dropDownText}
          dropdownPosition="top"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Bookmark</Text>
        <TextInput style={styles.input} inputMode="numeric" keyboardType="numeric"  />
      </View>
    </View>
  );
}
