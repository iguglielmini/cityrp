import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { ScrollView, Text, View, Image } from "react-native";
import { theme } from "@/styles/theme";

const statusBarHeight = getStatusBarHeight();

export const Content = styled(View)`
  padding-left: 24px;
  padding-right: 24px;
`;