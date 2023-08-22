import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Background } from "@/components/basics";
import { Navbar } from "@/components/compositives";

import * as S from "./styles";

import Teste from "@/assets/images/noticia.jpg";
import Teste2 from "@/assets/images/festa.png";

const Event: React.FC = () => {
  const { navigate, goBack } = useNavigation();

  return (
    <Background>
      <Navbar onPress={goBack} title="Eventos" />
      <S.IntroImage source={Teste} resizeMode="cover">
        <S.BoxDate>
          <S.SubTitle>22 AGO</S.SubTitle>
        </S.BoxDate>
        <S.Box>
          <S.Title>Treinamento de cyber segurança</S.Title>
          <S.DateText>20/08/23</S.DateText>
        </S.Box>
      </S.IntroImage>
      <S.Section>
        <S.Box2>
          <S.InfoText>Praça Central</S.InfoText>
          <S.InfoText>30 Participantes</S.InfoText>
          <S.InfoText>24/08/2023 - 21:30</S.InfoText>
        </S.Box2>
      </S.Section>
      <S.Section>
        <S.Title>Sobre</S.Title>
        <S.Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry
        </S.Description>
      </S.Section>
    </Background>
  );
};

export default Event;
