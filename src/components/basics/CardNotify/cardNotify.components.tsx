import React from "react";
import { ImageSourcePropType } from "react-native";

import * as S from "./styles";

interface ICardNotify {
  text: string;
  image: ImageSourcePropType;
  datetime: string;
}

const CardNotify: React.FC<ICardNotify> = ({ image, text, datetime }) => {
  return (
    <S.CardNotify>
      <S.ImageNotify source={image} resizeMode="cover" />
      <S.BoxNotify>
        <S.TextNotify>{text}</S.TextNotify>
        <S.DateText>{datetime}</S.DateText>
      </S.BoxNotify>
    </S.CardNotify>
  );
};

export default CardNotify;
