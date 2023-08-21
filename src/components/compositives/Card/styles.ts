import { theme } from "@/styles/theme";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const statusBarHeight = getStatusBarHeight();

export const Content = styled(ImageBackground)`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;

export const ButtonCard = styled(TouchableOpacity)`
  border-radius: 10px;
  margin-top: 16px;
`;

export const Title = styled(Text)`
  font-size: 24px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;

export const SubTitle = styled(Text)`
  font-size: 16px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.text400};
`;

export const Box = styled(View)`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 8px;
`;
