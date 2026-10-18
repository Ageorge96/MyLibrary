import { DefaultTheme as RNTheme, Theme } from "@react-navigation/native";

export const DefaultTheme: Theme = {
  ...RNTheme,
  colors: {
    ...RNTheme.colors,
    background: '#f6eee3',
    primary: '#C19A6B',
    border: '#C19A6B',
  },
};

export type AppColors = Pick<Theme, "colors">