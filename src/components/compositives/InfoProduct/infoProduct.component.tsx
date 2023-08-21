import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import ImageCoins from "@/assets/images/coins-product.png";
import * as S from "./styles";
import { IInfoProductsProps } from "@/types/ICommon";


const InfoProduct: React.FC<IInfoProductsProps> = () => {
  return (
    <S.Content>
      <S.Title>Coins</S.Title>
      <S.Section>
        <S.Info>
          <S.InfoBox>
            <S.InfoBoxTitle>
              <Icon name="gold" size={24} color="#E51C44" />
              <S.TitleInfo>O que é?</S.TitleInfo>
            </S.InfoBoxTitle>
            <S.SubTitleInfo>Uso individual</S.SubTitleInfo>
          </S.InfoBox>
          <S.InfoBox>
            <S.InfoBoxTitle>
              <Icon name="update" size={24} color="#E51C44" />
              <S.TitleInfo>Validade</S.TitleInfo>
            </S.InfoBoxTitle>
            <S.SubTitleInfo>Indefinido</S.SubTitleInfo>
          </S.InfoBox>
          <S.InfoBox>
            <S.InfoBoxTitle>
              <Icon name="yoga" size={24} color="#E51C44" />
              <S.TitleInfo>Uso</S.TitleInfo>
            </S.InfoBoxTitle>
            <S.SubTitleInfo>VIP, CARROS e CASAS</S.SubTitleInfo>
          </S.InfoBox>
        </S.Info>
        <S.ImageProduct source={ImageCoins} resizeMode="contain" />
      </S.Section>
      <S.Title>Informações</S.Title>
      <S.Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry, Lorem Ipsum is simply dummy
        text of the printing and typesetting industry.
      </S.Description>
    </S.Content>
  );
};

export default InfoProduct;
