import styled from "styled-components/native";
import { Text, View, Image } from "react-native";
import { theme } from "@/styles/theme";

export const CardNotify = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const ImageNotify = styled(Image)`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  border: 1px solid ${theme.colors.discord};
`;

export const BoxNotify = styled(View)`
  flex: 1;
  margin-left: 16px;
  border-bottom-width: 1px;
  border-color: white;
`;

export const TextNotify = styled(Text)`
  font-size: 16px;
  color: ${theme.colors.highlight};
  font-family: ${theme.fonts.title500};
`;

export const DateText = styled(Text)`
  font-size: 12px;
  padding-bottom: 16px;
  color: ${theme.colors.secondary50};
  font-family: ${theme.fonts.title700};
`;
