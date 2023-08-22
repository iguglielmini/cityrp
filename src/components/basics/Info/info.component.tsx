import React from "react";
import { Text, View } from "react-native";

import * as S from "./styles";
import { formatCurrency } from "@/utils/currency";

interface IInfoProps {
  bank: number;
  coins: number;
  carros: number;
}

const Info: React.FC<IInfoProps> = ({ bank, coins, carros }) => {
  return (
    <S.InfoContent>
      <S.Box>
        <S.Title>Flecca Bank</S.Title>
        <S.TitlePrice>{formatCurrency(bank | 0)}</S.TitlePrice>
      </S.Box>
      <S.Box
        style={{
          borderLeftWidth: 1,
          borderRightWidth: 1,
          paddingHorizontal: 16,
          borderLeftColor: "white",
          borderRightColor: "white",
        }}
      >
        <S.Title>Coins no bolso</S.Title>
        <S.TitlePrice>{formatCurrency(coins | 0)}</S.TitlePrice>
      </S.Box>
      <S.Box>
        <S.Title>Carros</S.Title>
        <S.TitlePrice>{carros}</S.TitlePrice>
      </S.Box>
    </S.InfoContent>
  );
};

export default Info;
