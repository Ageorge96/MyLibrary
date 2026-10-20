import { DefaultTheme as RNTheme, Theme } from "@react-navigation/native";

export type AppColors = Theme['colors'] & {
    secondary: string;
    input: string;
    contrastText: string;
  }

type AppTheme = Omit<Theme, 'colors'> & {
  colors: AppColors;
}

export const DefaultTheme: AppTheme = {
  ...RNTheme,
  colors: {
    ...RNTheme.colors,
    primary: '#536B50',
    background: '#F5F0E6',
    secondary: '#A87950',
    border: '#C8795B',
    text: '#302E29',
    contrastText: '#FAF4E8',
    input: '#FFFFFF',
  },
};

// export const DefaultTheme: AppTheme = {
//   ...RNTheme,
//   colors: {
//     ...RNTheme.colors,
//     primary: '#C19A6B',
//     secondary: '#8B6F76',
//     background: '#f6eee3',
//     border: '#C19A6B',
//     input: '#ffffff',
//   },
// };

// secondary colours for default theme:
// #526653
// #34483D
// #8B6F76
// #596B7A

export const themeOlive: AppTheme = {
  ...RNTheme,
  colors: {
    ...RNTheme.colors,
    primary: '#243B35',
    background: '#F5F0E6',
    secondary: '#A87950',
    border: '#A87950',
    text: '#292820',
    contrastText: '#ffffff',
    input: '#ffffff',
  },
};



