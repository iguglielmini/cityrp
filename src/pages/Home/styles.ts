import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const statusBarHeight = getStatusBarHeight();

export const Content = styled.View`
  padding-top: ${statusBarHeight}px;
`;
