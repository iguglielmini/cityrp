import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Background } from "@/components/basics";
import { Navbar, Ticket } from "@/components/compositives";
import { ListaTicketMocks, ListaVips } from "@/mocks/listTicket.mock";

import * as S from "./styles";

const Settings: React.FC = () => {
  const { goBack } = useNavigation();
  const [currentList, setCurrentList] = useState<"A" | "B" | null>(null);

  return (
    <Background>
      <Navbar onPress={goBack} title="Configuração" />
      <S.Content>
        <Avatar />
        <S.ContentButtons>
          <S.ButtonAction onPress={() => {}}>
            <S.TitleButton>Históricos de Tickets</S.TitleButton>
          </S.ButtonAction>
          <S.ButtonAction onPress={() => {}}>
            <S.TitleButton>Historicos de Doações</S.TitleButton>
          </S.ButtonAction>
        </S.ContentButtons>
        <S.ContentList>
          <Ticket
            price={10}
            image="ticket"
            title="Denuncias"
            onPress={() => {}}
            createDate="21/08/23"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
          />
          <Ticket
            price={10}
            image="ticket"
            title="Denuncias"
            onPress={() => {}}
            createDate="21/08/23"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
          />
        </S.ContentList>
      </S.Content>
    </Background>
  );
};

export default Settings;
