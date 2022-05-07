import { TouchableOpacityProps } from "react-native";

export type IContentProps = TouchableOpacityProps & {
  title: string;
  isDisabled?: boolean;
};
