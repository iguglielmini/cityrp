import { theme } from "@/styles/theme";
import { TouchableOpacity } from "react-native";
import { IBaseButtonProps } from "@/types/ICommon";
import styled from "styled-components/native";

export const ButtonIcon = styled(TouchableOpacity)<IBaseButtonProps>`
  width: 100%;
  height: 56px;
  background-color: ${theme.colors.discord};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const TitleIcon = styled.Text`
  flex: 1;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.text500};
  font-size: 16px;
  text-align: center;
`;

export const IconWrapper = styled.View`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
`;

export const IconImage = styled.Image`
  width: 24px;
  height: 18px;
`;
