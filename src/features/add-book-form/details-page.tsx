import { Text, View } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import { GENRE, STATUS } from '@common/constants/enums';
import { useTheme } from '@react-navigation/native';
import { styles } from './styles';
import { InputField } from '@components/input-field';
import { Controller } from 'react-hook-form';
import { DropDown } from '@components/drop-downs'
import { FormPageProps } from './types';

const genreOptions = Object.values(GENRE).map(value => {
  return { label: value, value: value };
});

const statusOptions = Object.values(STATUS).map(value => {
  return { label: value, value: value };
});

export function DetailsFormPage({ control }: FormPageProps) {
  const { colors } = useTheme();
  const themedStyles = styles(colors);

  return (
    <View style={themedStyles.container}>
      <Controller
        control={control}
        name="title"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <InputField label="Title" value={value} onChangeText={onChange} />
        )}
      />
      <Controller
        control={control}
        name="author"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <InputField label="Author" value={value} onChangeText={onChange} />
        )}
      />

      <Controller
        control={control}
        name="genre"
        render={({ field: { onChange, value } }) => (
          <View style={themedStyles.inputContainer}>
            <Text style={themedStyles.inputLabel}>Genre/s</Text>
            <MultiSelect
              data={genreOptions}
              placeholder="Select genre/s"
              placeholderStyle={themedStyles.dropDownText}
              value={value}

              onChange={onChange}
              labelField={'label'}
              valueField={'value'}
              maxSelect={4}
              style={themedStyles.input}
              containerStyle={themedStyles.dropDownContainer}
              itemTextStyle={themedStyles.dropDownText}
              selectedTextStyle={themedStyles.dropDownText}
              dropdownPosition="top"
              // inside
            />
          </View>
        )}
      />

      <Controller 
        control={control}
        name="status"
        render={({field: { onChange, value }}) => (
          <DropDown label='Status' placeholder='Select Status' data={statusOptions} onChange={onChange} value={value} />
        )}
      />

      <Controller
        control={control}
        name="bookmark"
        render={({ field: { onChange, value } }) => (
          <InputField
            label="Bookmark"
            value={value}
            onChangeText={onChange}
            inputMode="numeric"
            keyboardType="numeric"
          />
        )}
        
      />
    </View>
  );
}
