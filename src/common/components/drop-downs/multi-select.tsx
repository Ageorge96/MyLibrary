import { useTheme } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { MultiSelect as RNMultiSelect } from 'react-native-element-dropdown';
import { MultiSelectProps } from "./types";

export function MultiSelect({
  label,
  data,
  onChange,
  value,
  maxSelect,
}: MultiSelectProps) {
  const { colors } = useTheme();
  const themedStyles = styles(colors);

  return (
    <View style={themedStyles.inputContainer}>
      <Text style={themedStyles.inputLabel}>{label}</Text>
      <RNMultiSelect
        data={data}
        placeholder="Select genre/s"
        placeholderStyle={themedStyles.dropDownText}
        value={value}
        onChange={onChange}
        labelField={'label'}
        valueField={'value'}
        maxSelect={maxSelect}
        style={themedStyles.input}
        containerStyle={themedStyles.dropDownContainer}
        itemTextStyle={themedStyles.dropDownText}
        selectedTextStyle={themedStyles.dropDownText}
        dropdownPosition="top"
        // inside
      />
    </View>
  );
};
