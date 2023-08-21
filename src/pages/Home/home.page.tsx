import React from "react";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import { Background } from "@/components/basics";
import { Card, Header } from "@/components/compositives";
import image from "@/assets/images/bg-login.png";
import Coin from "@/assets/images/coins.jpg";

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Background>
      <S.Content>
        <Header
          name="italoguglielmini"
          onPress={() => navigate("Settings")}
          loja={() => {}}
          image={image}
        />
        <S.Scroll>
          <S.Box>
            <S.TitleSection>Doações</S.TitleSection>
            <Card
              onPress={() => navigate("Product")}
              image={Coin}
              title="1 Coins"
              price={1}
            />
          </S.Box>
          <S.Box>
            <S.TitleSection>Eventos</S.TitleSection>
            <Card
              onPress={() => navigate("Product")}
              image={Coin}
              title="1 Coins"
              price={1}
            />
          </S.Box>
          <S.Box>
            <S.TitleSection>Forúns</S.TitleSection>
            <Card
              onPress={() => navigate("Product")}
              image={Coin}
              title="1 Coins"
              price={1}
            />
          </S.Box>
        </S.Scroll>
      </S.Content>
    </Background>
  );
};

export default Home;
