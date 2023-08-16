import React, { ReactNode } from "react";
import { View } from "react-native";

import { theme } from "@/styles/theme";
import TestImg from "@/assets/images/bg-login.png";
import * as S from "./styles";

const Avatar: React.FC = () => {
  return (
    <S.Content>
      <S.Avatar source={TestImg} resizeMode="stretch" />
      <S.ContentInfo>
        <S.TextUser>Italo Giovanni</S.TextUser>
        <S.InfoText># 923</S.InfoText>
        <S.TextVip>VIP PLATINA</S.TextVip>
      </S.ContentInfo>
    </S.Content>
  );
};

export default Avatar;
