import { Image } from "react-native";
import coverUnavailable from "./cover_unavailable.jpg"

interface CoverProps {
  src?: string;
  title?: string;
}

export function Cover({src, title}: CoverProps) {

  return <Image
          source={src ? {uri: src} : coverUnavailable}
          resizeMode="cover"
          accessibilityLabel={title ? `${title} cover` : "Cover"}
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            bottom: 0,
          }}
        />
}