import React from "react";

import * as S from "./styles";
import DiscordImg from "@/assets/images/discord.png";
import { IButtonProps } from "@/types/ICommon";

const Button: React.FC<IButtonProps> = ({
  title,
  loading,
  loadingColor,
  ...rest
}) => {
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
