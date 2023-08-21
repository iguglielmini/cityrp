import {
  TouchableOpacityProps,
  ImageSourcePropType,
  ActivityIndicator,
} from "react-native";

type IButtonProps = TouchableOpacityProps & {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  loadingColor?: string;
};

type ILoadingProps = ActivityIndicator & {
  loading?: boolean;
  color: string;
};

type IBaseButtonProps = Omit<IButtonProps, "title">;

interface IUserProps {
  name?: string;
  image?: string;
  onPress?: () => void;
  loja?: () => void;
}

interface INavProps {
  title: string;
  onPress: () => void;
}

interface ITicketProps {
  id?: number;
  image: string;
  title?: string;
  price?: number;
  category?: number;
  createDate?: string;
  description: string;
  onPress?: () => void;
}

export {
  IButtonProps,
  ILoadingProps,
  IBaseButtonProps,
  IUserProps,
  INavProps,
  ITicketProps,
};
