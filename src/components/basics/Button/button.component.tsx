import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";
import DiscordImg from "@/assets/images/discord.png";

type IButtonIcon = TouchableOpacityProps & {
  title: string;
};

const Button: React.FC<IButtonIcon> = ({ title, ...rest }) => {
  return (
    <S.ButtonIcon {...rest}>
      <S.IconWrapper>
        <S.IconImage source={DiscordImg} />
      </S.IconWrapper>
      <S.TitleIcon>{title}</S.TitleIcon>
    </S.ButtonIcon>
  );
};

export default Button;
