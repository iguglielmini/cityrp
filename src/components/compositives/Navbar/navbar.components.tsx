import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import * as S from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { INavProps } from "@/types/ICommon";

const Navbar: React.FC<INavProps> = ({ title, onPress }) => {
  return (
    <S.Content>
      <TouchableOpacity onPress={onPress}>
        <Icon name="angle-left" size={45} color="#fff" />
      </TouchableOpacity>
      <S.Title>{title}</S.Title>
    </S.Content>
  );
};

export default Navbar;
