import React from "react";
import { FlatList } from "react-native";
import { Background, Info } from "@/components/basics";
import { useNavigation } from "@react-navigation/native";
import { Card, CardStreamer, Header } from "@/components/compositives";

import * as S from "./styles";
import image from "@/assets/images/bg-login.png";
import { listStreamer } from "@/mocks/listStreamer.mock";
import { listEvent, listProduct } from "@/mocks/listProduct.mock";

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Background>
      <S.Content>
        <Header
          name="italoguglielmini"
          onPress={() => navigate("Settings")}
          loja={() => navigate("Notification")}
          image={image}
        />
        {/* Info basic user */}
        <S.Box>
          <Info coins={800} bank={292589} carros={3} />
        </S.Box>
        {/* escolhas e flatlist */}
        <S.Scroll>
          {/* doaçao */}
          <S.Box2>
            <S.TitleSection style={{ paddingLeft: 24 }}>Doações</S.TitleSection>
            <FlatList
              data={listProduct}
              showsHorizontalScrollIndicator={false}
              horizontal
              style={{ paddingLeft: 24, width: "100%" }}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Card
                  onPress={() => navigate("Product")}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                />
              )}
            />
          </S.Box2>
          <S.Box2>
            <S.TitleSection style={{ paddingLeft: 24 }}>Eventos</S.TitleSection>
            <FlatList
              data={listEvent}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ paddingLeft: 24, width: "100%" }}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Card
                  onPress={() => navigate("Event")}
                  image={item.image}
                  title={item.title}
                  price={item.price as never}
                />
              )}
            />
          </S.Box2>
          {/* Streamer */}
          <S.Box2>
            <S.TitleSection style={{ paddingLeft: 24 }}>
              Nossos Streamers
            </S.TitleSection>
            <FlatList
              data={listStreamer}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ paddingLeft: 24, width: "100%" }}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <CardStreamer
                  onPress={() => {}}
                  image={{
                    uri: item.image,
                  }}
                  title={item.title}
                />
              )}
            />
          </S.Box2>
        </S.Scroll>
      </S.Content>
    </Background>
  );
};

export default Home;
