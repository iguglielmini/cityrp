import React from "react";

import * as S from "./styles";
import { formatCurrency } from "@/utils/currency";

interface IPaymentButton {
  price: number;
  onPress: () => void;
}

const PaymentButton: React.FC<IPaymentButton> = ({ price, onPress }) => {
  return (
    <S.Content>
      <S.BoxGeneral>
        <S.Title>{formatCurrency(price | 0)}</S.Title>
        <S.ButtonPay onPress={onPress}>
          <S.Title>Doar</S.Title>
        </S.ButtonPay>
      </S.BoxGeneral>
    </S.Content>
  );
};

export default PaymentButton;
