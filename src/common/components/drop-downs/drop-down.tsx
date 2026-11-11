import { useTheme } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { DropDownProps } from "./types";
import { Dropdown as RNDropdown } from "react-native-element-dropdown";

export function DropDown({ label, placeholder, data, onChange, value }: DropDownProps) {
  const { colors } = useTheme();
  const themedStyles = styles(colors);

  return (
    <View style={themedStyles.inputContainer}>
      <Text style={themedStyles.inputLabel}>{label}</Text>
      <RNDropdown
        data={data}
        placeholder={placeholder}
        placeholderStyle={themedStyles.dropDownText}
        value={value}
        onChange={onChange}
        labelField={'label'}
        valueField={'value'}
        style={themedStyles.input}
        containerStyle={themedStyles.dropDownContainer}
        itemTextStyle={themedStyles.dropDownText}
        selectedTextStyle={themedStyles.dropDownText}
        dropdownPosition="top"
      />
    </View>
  );
}