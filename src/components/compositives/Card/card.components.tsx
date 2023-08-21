import React from "react";

import * as S from "./styles";
import { formatCurrency } from "@/utils/currency";

interface ICardProps {
  onPress: () => void;
  image?: string;
  title?: string;
  price?: number;
}

const Card: React.FC<ICardProps> = ({ onPress, image, title, price }) => {
  return (
    <S.ButtonCard onPress={onPress}>
      <S.Content source={image as never} resizeMode="contain">
        <S.Box>
          <S.Title>{title}</S.Title>
          <S.SubTitle>{formatCurrency(price | 0)}</S.SubTitle>
        </S.Box>
      </S.Content>
    </S.ButtonCard>
  );
};

export default Card;
