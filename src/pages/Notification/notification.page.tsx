import React from "react";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import { Background } from "@/components/basics";
import { ListNotification, Navbar } from "@/components/compositives";

const Notification: React.FC = () => {
  const { navigate, goBack } = useNavigation();

  return (
    <Background>
      <Navbar onPress={goBack} title="Notificações" />
      <ListNotification />
    </Background>
  );
};

export default Notification;
