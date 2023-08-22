import React from "react";

import * as S from "./styles";
import { ImageSourcePropType } from "react-native";

interface ICardProps {
  onPress: () => void;
  image: ImageSourcePropType;
  title?: string;
}

const CardStreamer: React.FC<ICardProps> = ({ onPress, image, title }) => {
  return (
    <S.ButtonCard onPress={onPress}>
      <S.Content source={image} resizeMode="contain" />
      <S.Title>{title}</S.Title>
      <S.SubTitle>Online</S.SubTitle>
    </S.ButtonCard>
  );
};

export default CardStreamer;
