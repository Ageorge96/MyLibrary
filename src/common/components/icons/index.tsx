import { Lucide } from "@react-native-vector-icons/lucide";
import { useTheme } from "@react-navigation/native";
import { IconProps } from "./icons.types";

export const iconSize = {
  s: 18,
  m: 24
}

export function Icon({name, size}: IconProps) {
  const { colors } = useTheme();

  return <Lucide name={name} color={colors.contrastText} size={iconSize[size]} />
}