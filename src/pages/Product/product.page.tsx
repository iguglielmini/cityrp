import React from "react";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import { Background, PaymentButton } from "@/components/basics";
import { Card, Header, InfoProduct, Navbar } from "@/components/compositives";

const Product: React.FC = () => {
  const { navigate, goBack } = useNavigation();

  return (
    <Background>
      <Navbar onPress={goBack} title="Doações" />
      <InfoProduct />
      <PaymentButton price={1} onPress={() => {}} />
    </Background>
  );
};

export default Product;
