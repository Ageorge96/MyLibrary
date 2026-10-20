import { AppTheme } from "@common/themes";

declare module '*.jpg' {
  const value: import("react-native").ImageSourcePropType;
  export = value;
}

declare module "@react-navigation/native" {
  export function useTheme(): AppTheme;
}
