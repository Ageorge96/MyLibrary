import { useState } from 'react';
import { AddBookForm } from '../features/add-book-form';
import { AddBookSearch } from '../features/add-book-search';
import { Switch, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export function AddBookScreen() {
  const [searchMode, setSearchMode] = useState(false);
  const { colors } = useTheme();

  const toggleSwitch = () => {
    setSearchMode(previousState => !previousState);
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Text>{`Switch to ${searchMode ? 'form' : 'search'}`}</Text>
        <Switch
          trackColor={{ false: '#767577', true: colors.secondary }}
          thumbColor={searchMode ? colors.primary : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={searchMode}
        />
      </View>
      {searchMode ? <AddBookSearch /> : <AddBookForm />}
    </>
  );
}
