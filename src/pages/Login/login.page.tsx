import React from "react";

import { Background, Button } from "@/components/basics";
import ImageIntroBg from "@/assets/images/intro.png";
import * as S from "./styles";

const Login: React.FC = () => {
  return (
    <Background>
      <S.Content>
        <S.ImageIntro source={ImageIntroBg} resizeMode="stretch" />
        <S.Section>
          <S.Title>
            Viva aventuras, desafie-se e crie sua própria historia
          </S.Title>
          <S.SubTitle>Conecte-se e organize suas conquistas</S.SubTitle>
        </S.Section>
        {/* <Button title="Entrar com discord" onPress={() => {}} /> */}
      </S.Content>
    </Background>
  );
};

export default Login;
