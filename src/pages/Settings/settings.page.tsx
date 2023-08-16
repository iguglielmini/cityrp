import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Background } from "@/components/basics";
import { Navbar } from "@/components/compositives";

import * as S from "./styles";

const Settings: React.FC = () => {
  const { goBack } = useNavigation();
  return (
    <Background>
      <Navbar onPress={goBack} title="Configuração" />
      <S.Content>
        <Avatar />
      </S.Content>
    </Background>
  );
};

export default Settings;
