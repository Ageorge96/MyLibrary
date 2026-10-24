import { iconSize } from ".";
import { IconMap } from "./icon-map";

export interface IconProps {
  name: IconMap;
  size: IconSize;
}

export type IconSize = keyof typeof iconSize