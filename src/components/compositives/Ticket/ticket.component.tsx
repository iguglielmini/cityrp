import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import * as S from "./styles";
import { limitStringTo100Chars } from "@/utils/limitStringTo";
import { formatCurrency } from "@/utils/currency";
import { ITicketProps } from "@/types/ICommon";

const Ticket: React.FC<ITicketProps> = ({
  title,
  description,
  price,
  createDate,
  image,
  onPress,
}) => {
  const paragraph = description;

  const trucanteDescription = limitStringTo100Chars(paragraph);
  return (
    <S.Content onPress={onPress}>
      <S.LineContent>
        <Icon name={image} size={45} color="#fff" />
        <S.ContentInfo>
          <S.Title>{title}</S.Title>
          <S.Description>{trucanteDescription}</S.Description>
        </S.ContentInfo>
      </S.LineContent>
      <S.InfoGeneral>
        <S.TitleDate>{createDate}</S.TitleDate>
        {price && <S.TitlePrice>{formatCurrency(price | 0)}</S.TitlePrice>}
      </S.InfoGeneral>
    </S.Content>
  );
};

export default Ticket;
