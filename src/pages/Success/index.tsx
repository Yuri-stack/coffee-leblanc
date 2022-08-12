import { Timer } from "phosphor-react";
import { OrderContainer, OrderDataContainer, OrderDataContent, SuccessContainer } from "./styles";

import deliveryMan from '../../assets/delivery.svg'

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <OrderContainer>
        <OrderDataContainer>

          <OrderDataContent>
            <Timer size={22} />
            <div>
              <p>Entrega em Rua João Daniel Martinelli, 102</p>
              <strong>Farrapos - Porto Alegre, RS</strong>
            </div>
          </OrderDataContent>

          <OrderDataContent>
            <Timer size={22} />
            <div>
              <p>Previsão de entrega</p>
              <strong> 20 min - 30 min</strong>
            </div>
          </OrderDataContent>

          <OrderDataContent>
            <Timer size={22} />
            <div>
              <p>Pagamento na entrega</p>
              <strong> Cartão de Crédito</strong>
            </div>
          </OrderDataContent>

        </OrderDataContainer>

        <img src={deliveryMan} alt="" />
      </OrderContainer>
    </SuccessContainer>
  )
}
