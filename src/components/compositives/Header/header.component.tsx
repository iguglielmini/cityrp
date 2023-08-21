import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

import * as S from "./styles";
import { theme } from "@/styles/theme";
import { IUserProps } from "@/types/ICommon";
import TestImg from "@/assets/images/bg-login.png";

const Header: React.FC<IUserProps> = ({ name, onPress, loja }) => {
  const { secondary50, secondary70 } = theme.colors;
  return (
    <S.Content>
      <S.ButtonAvatar onPress={onPress}>
        <LinearGradient
          style={{
            width: 50,
            height: 50,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
          colors={[secondary50, secondary70]}
        >
          <S.Avatar source={TestImg} resizeMode="cover" />
        </LinearGradient>
        <S.Div>
          <S.Section>
            <S.Textinfo>Olá,</S.Textinfo>
            <S.TextUser>{name}</S.TextUser>
          </S.Section>
          <S.TextMessage>Bem-vindo a cidade Malta</S.TextMessage>
        </S.Div>
      </S.ButtonAvatar>
      <S.Box>
        <S.ButtonLoja onPress={loja}>
          <Icon name="bell" size={32} color="#fff" />
        </S.ButtonLoja>
      </S.Box>
    </S.Content>
  );
};

export default Header;
