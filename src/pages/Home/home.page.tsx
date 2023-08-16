import React from "react";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import { Background } from "@/components/basics";
import { Header } from "@/components/compositives";
import image from "@/assets/images/bg-login.png";

const Home: React.FC = () => {
  const { navigate } = useNavigation();


  return (
    <Background>
      <S.Content>
        <Header
          name="italoguglielmini"
          onPress={() => navigate('Settings')}
          loja={() => {}}
          image={image}
        />
        <S.Scroll>
          <S.TitleSection>Fóruns</S.TitleSection>
        </S.Scroll>
      </S.Content>
    </Background>
  );
};

export default Home;
