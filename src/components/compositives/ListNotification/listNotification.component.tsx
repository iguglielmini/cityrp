import React from "react";

import ImgTest from "@/assets/images/evento.jpg";
import ImgTest2 from "@/assets/images/festa.png";
import ImgTest3 from "@/assets/images/noticia.jpg";
import * as S from "./styles";
import { CardNotify } from "@/components/basics";

const ListNotification: React.FC = () => {
  return (
    <S.Scroll showsVerticalScrollIndicator={false}>
      <S.Box>
        <S.TitleSection>Hoje</S.TitleSection>
        <CardNotify
          text="Se liga no evento do dia 30/08 as 20:30, nesse evento a prefeitura irá leiloar carros"
          image={ImgTest}
          datetime="21/08/23 - 23:00"
        />
        <CardNotify
          text="Se liga no evento do dia 30/08 as 20:30, nesse evento a prefeitura irá leiloar carros"
          image={ImgTest}
          datetime="21/08/23 - 23:00"
        />
      </S.Box>
      <S.Box>
        <S.TitleSection>Notificação antigas</S.TitleSection>
        <CardNotify
          text="Se liga no evento do dia 30/08 as 20:30, nesse evento a prefeitura irá leiloar carros"
          image={ImgTest2}
          datetime="20/08/23 - 23:00"
        />
        <CardNotify
          text="Se liga no evento do dia 30/08 as 20:30, nesse evento a prefeitura irá leiloar carros"
          image={ImgTest3}
          datetime="11/08/23 - 23:00"
        />
      </S.Box>
    </S.Scroll>
  );
};

export default ListNotification;
