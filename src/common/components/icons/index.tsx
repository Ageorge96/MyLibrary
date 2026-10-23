import { Lucide } from "@react-native-vector-icons/lucide";
import { useTheme } from "@react-navigation/native";
import { IconMap } from "./icon-map";

interface IconProps {
  name: IconMap;
  size: number;
}
export function Icon({name, size}: IconProps) {
  const { colors } = useTheme();

  return <Lucide name={name} color={colors.contrastText} size={size} />
}